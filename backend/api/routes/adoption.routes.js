const route = require('express').Router()

const {
  createAdoption,
  getAdoptions,
  getAdoptionById,
  updateAdoption,
  deleteAdoption
} = require("../controllers/adoption.controllers");

route.get("/", getAdoptions)
route.get("/:id", getAdoptionById)
route.post("/", createAdoption)
route.put("/:id", updateAdoption)
route.delete("/:id", deleteAdoption)

module.exports = route