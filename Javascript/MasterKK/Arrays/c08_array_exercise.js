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
// console.log(replaceAllNegativeValueWith([1, -2, "Hello", -3], 5));

function arrtest() {
  let a = new Array("work hard", "work hard", "work hard", "work hard");
  let b = new Array();
  b.fill("Hello");
  console.log(b); // เพิ่มไม่ได้ เพราะว่า ไม่ได้กำหนด space
  console.log("Make an Empty Array :", a);
  a.fill("Word1"); //เติมหมด ไม่สนลูกใคร
  console.log(a);
  delete a[2 - 1];
  console.log("Deleting array 2", a);
  console.log("value ของค่าที่ว่าง = ", a[2 - 1]);
  console.log("------FOR LOOP(Classic)------");
  for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
  }
  console.log("------FOR EACH(ignore undefine)-----");
  a.forEach(i => console.log(i))
}


arrtest();
