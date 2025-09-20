

const FUN_FACT_API = "http://numbersapi.com/"

const getFunFact = async (date) => {

  let month = date.split("-")[1]
  let day = date.split("-")[2]

  if (!month && !day) {
    month = date.split("/")[1]
    day = date.split("/")[2]
  }

  const fact = await fetch(`${FUN_FACT_API}${month}/${day}/date`)
  const res = await fact.text()
  return { text: res }

}

module.exports = {getFunFact}