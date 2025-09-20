const { calculateAge } =  require("../utils/age.util.js");
const API_URI = "https://f1api.dev/api"
const getDriverInfo = async (name) => {
  try {
    const resFetch = await fetch(
      `${API_URI}/drivers/search?q=${name}`,
    );
    const result = await resFetch.json();

    if (result.total === 0) return false;

    let driverInfo = [];
    const fetchDriver = result.drivers[0];
    const ageSplited = fetchDriver.birthday.split("/");

    const age = calculateAge(
      `${ageSplited[2]}-${ageSplited[1]}-${ageSplited[0]}`,
    );

    driverInfo.push({
      driverId: fetchDriver.driverId,
      name: fetchDriver.name,
      surname: fetchDriver.surname,
      age: age,
      dob: fetchDriver.birthday,
    });

    return driverInfo;

  } catch (error) {
    console.log(error);
    return false
  }
};

module.exports = {getDriverInfo}