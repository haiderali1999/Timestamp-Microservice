function fire() {
  debugger
  console.log("fired")
}

function dateLink() {
  const div = document.getElementById("dateLink")
  div.textContent = "[project url]/api/" + makeYearMonthDay()
}
dateLink()

function dateInUnix() {
  const div = document.getElementById("dateUnix")
  div.textContent = `[project url]/api/` + makeDate().unixDate
}
dateInUnix()

function makeYearMonthDay() {
  const year = new Date().getFullYear()
  const month = new Date().getMonth()
  const day = new Date().getDate()

  return `${year}-${month}-${day}`
}

function makeDate() {
  const todayTimeInUtc = new Date().toUTCString()
  const todayTimeInUnix = Date.parse(todayTimeInUtc)

  return { utcDate: todayTimeInUtc, unixDate: todayTimeInUnix }
}

function currentDate() {
  const dateDiv = document.getElementById("current-date")
  let todayTimeUtc = makeDate().utcDate
  let todayUnixTime = makeDate().unixDate

  dateDiv.style.fontSize = "18px"

  dateDiv.textContent = JSON.stringify({
    unix: todayUnixTime,
    utc: todayTimeUtc,
  })
}
currentDate()
