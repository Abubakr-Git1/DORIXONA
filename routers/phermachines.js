const { getPhermacines, addNewPhermacines, getPhermacinesByID, updataPhermacinesByID, deletePhermacinesByID } = require("../controllers/Phermacines");

const router = require("express").Router()

router.get("/all", getPhermacines);
router.post("/create", addNewPhermacines);
router.get("/findby:id", getPhermacinesByID);
router.patch("/update:id", updataPhermacinesByID);
router.delete("/delete:id", deletePhermacinesByID)

module.exports = router