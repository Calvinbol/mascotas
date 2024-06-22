const Pet = require('../models/pet.models')

// CREA MASCOTA (POST)

const createPet = async (req, res) => {
    try {
        const pet = await Pet.create(req.body);
        return res.status(201).json(pet);
    } catch (error) {
        console.log(error);
        return res.status(500).send('>> Oops something went wrong, could not create pet.');
    }
};


// OBTIENE TODAS MASCOTAS (GET)

const getPets = async (req, res) => {
    try {
        const query = req.query || {}
        const pets = await Pet.findAll({where: query});
        return res.status(200).json(pets);
    } catch (error) {
        console.log(error);
        return res.status(500).send('>> Oops something went wrong, could not fetch pets.');
    }
};

// OBTIENE UNA MASCOTA POR ID 

const getPetById = async (req, res) => {
    try {
        const pet = await Pet.findByPk(req.params.id);
        if (pet) {
            return res.status(200).json(pet);
        } else {
            return res.status(404).send('>> Pet not found.');
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send('>> Oops something went wrong, could not fetch pet.');
    }
};


// ACTUALIZA MASCOTA 

const updatePet = async (req, res) => {
    try {
        const pet = await Pet.findByPk(req.params.id);
        if (pet) {
            await pet.update(req.body);
            return res.status(200).json(pet);
        } else {
            return res.status(404).send('>> Pet not found.');
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send('>> Oops something went wrong, could not update pet.');
    }
};


// BORRA MASCOTA 

const deletePet = async (req, res) => {
    try {
        const pet = await Pet.findByPk(req.params.id);
        if (pet) {
            await pet.destroy();
            return res.status(204).send();
        } else {
            return res.status(404).send('>> Pet not found.');
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send('>> Oops something went wrong, could not delete pet.');
    }
};

module.exports = {
    createPet,
    getPets,
    getPetById,
    updatePet,
    deletePet
};