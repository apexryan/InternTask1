function sumofNumbers() {
  let num = 6;
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  console.log(sum);
}
module.exports = sumofNumbers;
