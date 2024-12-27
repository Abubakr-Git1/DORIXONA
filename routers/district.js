const { getDistrict, addNewDistrict, getDistrictByID, updateDistrictByID, deleteDistrictByID } = require("../controllers/District");

const router = require('express').Router()

router.get("/all", getDistrict);
router.post("/create", addNewDistrict);
router.get("/findby:id", getDistrictByID);
router.patch("/update:id", updateDistrictByID);
router.delete("/delete:id", deleteDistrictByID);

module.exports = router;