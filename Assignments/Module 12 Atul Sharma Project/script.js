monthObj = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};
let objKeys = Object.keys(monthObj);
let objValues = Object.values(monthObj);

function ageCalculator() {
  const currentDate = new Date();

  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  let d = Math.floor(document.getElementById("date").value);
  let m = Math.floor(document.getElementById("month").value);
  let y = Math.floor(document.getElementById("year").value);

  if (d === '') {
    document.getElementById("result").innerText = "Please provide date";
  } else if (isNaN(d)) {
    document.getElementById("result").innerText = "Please provide valid date";
  } else if (d <= 0) {
    document.getElementById("result").innerText =
      "Date cannot be 0 or less than 0";
  } else {
    if (m === "") {
      document.getElementById("result").innerText = "Please provide month";
    } else if (isNaN(m)) {
      document.getElementById("result").innerText =
        "Please provide valid Month";
    } else if (m < 1 || m > 12) {
      document.getElementById("result").innerText =
        "Please provide Month value in the range from 1 to 12";
    } else if (m <= 0) {
      document.getElementById("result").innerText =
        "Month cannot be 0 or less than 0";
    } else if (objKeys[m] - 1 === m && d > objValues[m - 1]) {
      document.getElementById("result").innerText =
        "Please provide valid Date with respect to Month";
    } else {
      if (y === "") {
        document.getElementById("result").innerText = "Please provide year";
      } else if (isNaN(y)) {
        document.getElementById("result").innerText =
          "Please provide valid year";
      } else if (y.length < 4 || y.length > 4) {
        document.getElementById("result").innerText = "Provide year in format YYYY";
      } else if (y <= 0) {
        document.getElementById("result").innerText =
          "Year cannot be 0 or less than 0";
      } else if (y > currentYear) {
        document.getElementById(
          "result"
        ).innerText = `Year can't be greater than current year of ${currentYear}`;
      } else if (y >= currentYear && m >= currentMonth && d > currentDay) {
        document.getElementById(
          "result"
        ).innerText = `Selected date must be lower than today's date (${currentDay}/${currentMonth}/${currentYear}) `;
      } else {
        let ageYears = currentYear - y;

        let ageMonths = null;
        if (currentMonth > m) {
          ageMonths = currentMonth - m;
        } else if (currentMonth === m) {
          ageMonths = currentMonth - m;
        } else {
          ageMonths = currentMonth - m + 12;
          ageYears--;
        }

        let ageDays = null;
        if (currentDay >= d) {
          ageDays = currentDay - d;
        } else if (currentDay < d && ageMonths === 0) {
          ageDays = d - currentDay;
          ageMonths--;
          ageYears--;
        } else {
          ageDays = currentDay - d + objValues[m];
          ageMonths--;
        }

        document.getElementById(
          "result"
        ).innerText = `Your age is ${ageYears} years, ${ageMonths} months & ${ageDays} days`;
      }
    }
  }
}
