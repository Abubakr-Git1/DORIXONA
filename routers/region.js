const { getRegion, addNewRegion, getRegionByID, updataRegionByID, deleteRegionByID } = require("../controllers/Region");

const router = require("express").Router()

router.get("/all", getRegion);
router.post("/create", addNewRegion);
router.get("/findby:id", getRegionByID);
router.patch("/update:id", updataRegionByID);
router.delete("/delete:id", deleteRegionByID);

module.exports = router