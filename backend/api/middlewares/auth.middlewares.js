const jwt = require('jsonwebtoken')
const Hostel = require('../models/hostel.model')

function checkAuth(req, res, next) {
  console.log(req)
  if (!req.headers.authorization) return res.status(401).send('Token not found') // comprobamos que nos envia el token en el req.headers

  jwt.verify(
    req.headers.authorization,
    process.env.JWT_SECRET,
    async (err, result) => {
      if (err) return res.status(401).send('Token not valid')
      const hostel = await Hostel.findOne({where:{email: result.email}})
      if (!hostel) return res.status(401).send('hostel not found')

      res.locals.hostel = Hostel

      next()
    }
  )
}

module.exports = {checkAuth}