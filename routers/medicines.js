const { getMedicines, addNewMedicines, getMedicinesByID, updataMedicinesByID, deleteMedicinesByID } = require("../controllers/Medicines");

const router = require("express").Router()

router.get("/all", getMedicines);
router.post("/create", addNewMedicines);
router.get("/findby:id", getMedicinesByID);
router.patch("/update:id", updataMedicinesByID);
router.delete("/delete:id", deleteMedicinesByID);

module.exports = router