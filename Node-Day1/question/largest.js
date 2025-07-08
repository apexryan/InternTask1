function largestNumber() {
  let array = [10, 30, 60, 120, 90, 55];
  let largest = array[1];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  console.log(largest);
}
module.exports = largestNumber;
