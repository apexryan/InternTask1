function multTable() {
  let num = 7;
  for (let i = 1; i <= 10; i++) {
    let multi = num * i;
    console.log(num, "*", i, "=", multi);
  }
}
module.exports = multTable;
