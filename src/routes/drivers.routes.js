import { Router } from "express";
import { getAgeWithName, getDrivers } from "../controller/drivers.controller.js";

const router = Router()

router.get("/drivers", getDrivers)
router.get("/driver/age/:id", getAgeWithName)

export default router