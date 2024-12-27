const { getMedicines_type, addNewMedicines_type, getMedicines_typeByID, updataMedicines_typeByID, deleteMedicines_typeByID } = require("../controllers/MediceneType");

const router = require("express").Router()

router.get("/all", getMedicines_type);
router.post("/create", addNewMedicines_type);
router.get("/findby:id", getMedicines_typeByID);
router.patch("/update:id", updataMedicines_typeByID);
router.delete("/delete:id", deleteMedicines_typeByID)

module.exports = router