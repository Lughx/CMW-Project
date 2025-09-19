import { calculateAge } from "../utils/age.util.js"

export const getAgeWithName = async ({ params }, res) => {
    try {
        const resFetch = await fetch(`${process.env.API_URI}/drivers/search?q=${params.id}`)
        const result = await resFetch.json()

        console.log(result)

        if (result.total === 0) return res.status(400).json({"Error": "Driver don't found"})

        let drivers = []

        for (let i = 0; i < result.drivers.length; i++) {
            const element = result.drivers[i];
            const ageSplited = element.birthday.split("/")
    
            const age = calculateAge(`${ageSplited[2]}-${ageSplited[1]}-${ageSplited[0]}`)

            drivers.push({
                driverId: element.driverId,
                name: element.name,
                surname: element.surname,
                age: age
            })
            
        }

    
        res.json(drivers)

    } catch (error) {
        console.log(error)
        res.status(400).json({"Error": "Unable to get data"})
    }
}

export const getDrivers = async (req, res) => {
    try {
        const resFetch = await fetch(process.env.API_URI+"/drivers")
    
        const result = await resFetch.json()
    
        res.json(result)
    } catch (error) {
        console.log(error)
        res.status(400).json({"Error": "Unable to get data"})
    }
}