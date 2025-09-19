import express from "express"
import morgan from "morgan"
import "dotenv/config"

import RouterDrivers from "./routes/drivers.routes.js"

const app = express()

app.use(morgan("dev"))
app.use(express.json())

app.use(RouterDrivers)

export default app