import { Router } from "express";
import { getDriverWithName, getDrivers } from "../controller/drivers.controller.js";

const router = Router()

router.get("/drivers", getDrivers)
router.get("/getDriverByName/:id", getDriverWithName)

export default router