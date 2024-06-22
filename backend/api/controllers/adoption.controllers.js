const bcrypt = require("bcrypt");
const Adoption = require("../models/adoption.model");

// CREA UNA ADOPCIÓN (POST)

const createAdoption = async (req, res) => {
  try {
    
    const adoption = await Adoption.create(req.body);
    return res.status(201).json(adoption);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send(">> Oops something went wrong, could not create adoption.");
  }
};

// OBTENER TODAS LAS ADOPCIONES (GET)

const getAdoptions = async (req, res) => {
  try {
    const adoptions = await Adoption.findAll();
    return res.status(200).json(adoptions);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send(">> Oops something went wrong, could not fetch adoptions.");
  }
};

// OBTIENE UNA ADOPCION POR ID

const getAdoptionById = async (req, res) => {
  try {
    const adoption = await Adoption.findByPk(req.params.id);
    if (adoption) {
      return res.status(200).json(adoption);
    } else {
      return res.status(404).send(">> adoption not found.");
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send(">> Oops something went wrong, could not fetch adoption.");
  }
};

// ACTUALIZA UNA ADOPCIÓN
const updateAdoption = async (req, res) => {
  try {
    const adoption = await Adoption.findByPk(req.params.id);
    if (adoption) {
      await adoption.update(req.body);
      return res.status(200).json(adoption);
    } else {
      return res.status(404).send(">> adoption not found.");
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send(">> Oops something went wrong, could not update adoption.");
  }
};

// BORRA UNA ADOPCIÓN

const deleteAdoption = async (req, res) => {
  try {
    const adoption = await Adoption.findByPk(req.params.id);
    if (adoption) {
      await adoption.destroy();
      return res.status(204).send();
    } else {
      return res.status(404).send(">> adoption not found.");
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send(">> Oops something went wrong, could not delete adoption.");
  }
};

module.exports = {
  createAdoption,
  getAdoptions,
  getAdoptionById,
  updateAdoption,
  deleteAdoption,
};