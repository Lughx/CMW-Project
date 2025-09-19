import { calculateAge } from "../utils/age.util.js";

export const getDriverInfo = async (name) => {
  try {
    const resFetch = await fetch(
      `${process.env.API_URI}/drivers/search?q=${name}`,
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