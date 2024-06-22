const Hostel = require('../models/hostel.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



// CONTROLA EL SIGN UP (DEJAR SESION)

const signUp = async (req, res) => {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const hostel = await Hostel.create(req.body);

    const token = jwt.sign({ email: hostel.email }, process.env.JWT_SECRET, {
      expiresIn: '1y'
    });

    console.log('Logged in successfully');
    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send('>> Oops something went wrong, we could not sign you up.');
  }
};

// CONTROLA EL LOGING (INICIO SESION)

const logIn = async (req, res) => {
  try {
    const hostel = await Hostel.findOne({ where: { email: req.body.email } });
    if (hostel) {
      const result = bcrypt.compareSync(req.body.password, hostel.password);
      if (result) {
        const token = jwt.sign({ email: hostel.email }, process.env.JWT_SECRET, {
          expiresIn: '1y'
        })
        return res.status(200).json({ message: 'Logged', token, hostel });
      }
      return res
        .status(400)
        .send('>> Oops something went wrong, hostel or password incorrect.');
    } else {
      return res
        .status(400)
        .send('>> Oops something went wrong, hostel or password incorrect.');
    }
  } catch (error) {
    return res
      .status(400)
      .send('>> Oops something went wrong, hostel or password incorrect.');
  }
};

module.exports = { signUp, logIn };