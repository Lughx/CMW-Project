import { getDriverInfo } from "../utils/driver.util.js";
import { getFunFact } from "../utils/funFact.util.js";

export const getDriverWithName = async ({ params }, res) => {

  try {

    const driverInfo = await getDriverInfo(params.id);
    if (!driverInfo) res.status(400).json({ Error: "Driver don't found" });
  
    const fact = await getFunFact(driverInfo[0].dob)
  
    const result = {
      driverId: driverInfo[0].driverId,
      name: driverInfo[0].name,
      date: driverInfo[0].dob,
      funFact: fact.text
    }
  
    res.json(result)
  } catch(e) {
    console.log(e)
    res.status(400).send("Error")
  }
};

export const getDrivers = async (req, res) => {
  try {
    const resFetch = await fetch(process.env.API_URI + "/drivers");
    const result = await resFetch.json();

    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json({ Error: "Unable to get data" });
  }
};
