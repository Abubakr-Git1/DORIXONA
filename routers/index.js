const router = require("express").Router()

const district = require('./district');
const medicenes_type = require('./medicenetype');
const medicenes = require('./medicines');
const phermacines = require('./phermachines');
const region = require('./region');
const stock = require('./stock');

router.use("/districts", district);
router.use("/medicenes_type", medicenes_type);
router.use("/medicines", medicenes);
router.use("/phermachines", phermacines);
router.use("/region", region);
router.use("/stock", stock);

module.exports = router;