const { Router } = require("express");
const { getDriverWithName, getDrivers } = require("../controller/drivers.controller.js");

const router = Router()

router.get("/drivers", getDrivers)
router.get("/getDriverByName/:id", getDriverWithName)

module.exports = router