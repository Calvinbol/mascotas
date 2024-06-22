const router = require('express').Router()

const {
  getHostels,
  getHostelById,
  getMyProfileByToken,
  createHostel,
  updateHostel,
  deleteHostel,
} = require("../controllers/hostel.controller");

router.get("/", getHostels);
router.get("/:id", getHostelById);
router.get("/:myprofile", getMyProfileByToken);
router.post("/", createHostel);
router.put("/:id", updateHostel);
router.delete("/:id", deleteHostel);


module.exports = router