function isleapYear() {
  let year = 2028;
  if (year % 4 == 0 && year % 100 != 0) {
    console.log(year, "is a leap year.");
  } else if (year % 400 == 0 && year % 100 != 0) {
    console.log(year, "is a leap year.");
  } else {
    console.log(year, "is not a leap year.");
  }
}
module.exports = isleapYear;
