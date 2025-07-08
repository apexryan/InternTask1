function evenNumber() {
  let num = [8, 9, 11, 16, 24, 43, 57, 65];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 == 0) {
      console.log(num[i]);
    }
  }
}
module.exports = evenNumber;
