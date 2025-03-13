//c08_array_exercise.js

function sumUntilInfinity(ar) {
  //sum all numbers in the array until you reach Infinity
  //skip anything that is not a number or a negative value
  //return the result
  let sum = 0;
  for (let i of ar) {
    if (i === Infinity) {
      break;
    }
    if (typeof i == "number" && i >= 1) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumUntilInfinity([Infinity, 1, "Hello", "fine", 3]));

function replaceAllNegativeValueWith(ar, increment) {
  let result = [];
  for (let i of ar) {
    if (typeof i === "number" && i < 0) {
      result.push(i + increment);
    } else {
      result.push(i);
    }
  }
  return result;
}

console.log(replaceAllNegativeValueWith([1, -2, "Hello", -3], 5));
