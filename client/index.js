function fire() {
  debugger
  console.log("fired")
}

function dateLink() {
  const utcDate = makeYearMonthDay()
  const div = document.getElementById("dateLink")
  div.textContent = "[project url]/api/" + utcDate
  div.href = `/api/${utcDate}`
}
dateLink()

function dateInUnix() {
  const unixDate = makeDate().unixDate
  const div = document.getElementById("dateUnix")
  div.textContent = `[project url]/api/` + unixDate
  div.href = `/api/${unixDate}`
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


function getApiUtcDate() {
  const url = window.location.href
  console.log(url)
  // fetch()
}

async function fetchDate() {
  debugger
  const res = await fetch("http://localhost:8080/api/12-12-12")
  const date = await res.json();
  console.log(date)
}