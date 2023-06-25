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
  
  let d = document.getElementById("date").value;
  let m = document.getElementById("month").value;
  let y = document.getElementById("year").value;

  if (d === "") {
    document.getElementById("result").innerText = "Please provide date";
  } else if (isNaN(d)) {
    document.getElementById("result").innerText = "Please provide valid date";
  } else if (Number(d) <= 0) {
    document.getElementById("result").innerText =
      "Date cannot be 0 or less than 0";
  } else {
    if (m === "") {
      document.getElementById("result").innerText = "Please provide month";
    } else if (isNaN(m)) {
      document.getElementById("result").innerText =
        "Please provide valid Month";
    } else if (Number(m) < 1 || Number(m) > 12) {
      document.getElementById("result").innerText =
        "Please provide Month value in the range from 1 to 12";
    } else if (Number(m) <= 0) {
      document.getElementById("result").innerText =
        "Month cannot be 0 or less than 0";
    } else if (objKeys[Number(m)] - 1 === Number(m) && d > objValues[m - 1]) {
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
      } else if (Number(y) <= 0) {
        document.getElementById("result").innerText =
          "Year cannot be 0 or less than 0";
      } else if (Number(y) > currentYear) {
        document.getElementById(
          "result"
        ).innerText = `Year can't be greater than current year of ${currentYear}`;
      } else if (Number(y) >= currentYear && Number(m) >= currentMonth && Number(d) > currentDay) {
        document.getElementById(
          "result"
        ).innerText = `Selected date must be lower than today's date (${currentDay}/${currentMonth}/${currentYear}) `;
      } else {
        let ageYears = currentYear - Number(y);

        let ageMonths = null;
        if (currentMonth > Number(m)) {
          ageMonths = currentMonth - Number(m);
        } else if (currentMonth === Number(m)) {
          ageMonths = currentMonth - Number(m);
        } else {
          ageMonths = currentMonth - Number(m) + 12;
          ageYears--;
        }

        let ageDays = null;
        if (currentDay >= Number(d)) {
          ageDays = currentDay - Number(d);
        } else if (currentDay < Number(d) && ageMonths === 0) {
          ageDays = Number(d) - currentDay;
          ageMonths--;
          ageYears--;
        } else {
          ageDays = currentDay - Number(d) + objValues[Number(m)];
          ageMonths--;
        }

        document.getElementById(
          "result"
        ).innerText = `Your age is ${ageYears} years, ${ageMonths} months & ${ageDays} days`;
      }
    }
  }
}
