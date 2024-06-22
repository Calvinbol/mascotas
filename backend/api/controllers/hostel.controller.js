const bcrypt = require('bcrypt');
const Hostel = require('../models/hostel.model');

// OBTENER TODOS LOS ALBERGUES (GET)

const getHostels = async (req, res) => {
    try {
        const hostels = await Hostel.findAll();
        return res.status(200).json(hostels);
    } catch (error) {
        console.log(error);
        return res.status(500).send('>> Oops something went wrong, could not fetch hostels.');
    }
};

// OBTIENE ALBERGUE POR ID 

const getHostelById = async (req, res) => {
    try {
        const hostel = await Hostel.findByPk(req.params.id);
        if (hostel) {
            return res.status(200).json(hostel);
        } else {
            return res.status(404).send('>> hostel not found.');
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send('>> Oops something went wrong, could not fetch hostel.');
    }
};

async function getMyProfileByToken(req, res) {
    try {

        const user = await Hostel.findByPk(res.locals.user.id)

        if (!user) return res.status(404).send('User not found!')

        res.status(200).json(user)

    } catch (error) {
        res.status(500).send(error)
    }
}
// CREA ALBERGUE (POST)

const createHostel = async (req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const hostel = await Hostel.create(req.body);
        return res.status(201).json(hostel);
    } catch (error) {
        console.log(error);
        return res.status(500).send('>> Oops something went wrong, could not create hostel.');
    }
};

// ACTUALIZA ALBERGUE 

const updateHostel = async (req, res) => {
    try {
        const hostel = await Hostel.findByPk(req.params.id);
        if (hostel) {
            await hostel.update(req.body);
            return res.status(200).json(hostel);
        } else {
            return res.status(404).send('>> hostel not found.');
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send('>> Oops something went wrong, could not update hostel.');
    }
};

// BORRA ALBERGUE

const deleteHostel = async (req, res) => {
    try {
        const hostel = await Hostel.findByPk(req.params.id);
        if (hostel) {
            await hostel.destroy();
            return res.status(204).send();
        } else {
            return res.status(404).send('>> hostel not found.');
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send('>> Oops something went wrong, could not delete hostel.');
    }
};




module.exports = {
    getHostels,
    getHostelById,
    getMyProfileByToken,
    createHostel,
    updateHostel,
    deleteHostel
};