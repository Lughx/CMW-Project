const { getDriverInfo } = require("../utils/driver.util.js");
const { getFunFact } = require("../utils/funFact.util.js");

const API_URI = "https://f1api.dev/api"

const getDriverWithName = async ({ params }, res) => {

  try {

    const driverInfo = await getDriverInfo(params.id);
    if (!driverInfo) res.status(400).json({ Error: "Driver don't found" });
    console.log(driverInfo) 
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

const getDrivers = async (req, res) => {
  try {
    const resFetch = await fetch(API_URI + "/drivers");
    const result = await resFetch.json();

    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json({ Error: "Unable to get data" });
  }
};


module.exports = { getDriverWithName, getDrivers }
