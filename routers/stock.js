const { getStocks, addNewStocks, getStocksByID, updataStocksByID, deleteStocksByID } = require("../controllers/Stocks");

const router = require("express").Router()

router.get("/all", getStocks);
router.post("/create", addNewStocks);
router.get("/findby:id", getStocksByID);
router.patch("/update:id", updataStocksByID);
router.delete("/delete:id", deleteStocksByID)

module.exports = router