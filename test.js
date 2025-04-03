// test.js
// โจทย์ฝึก JavaScript: เน้น problem solving โดยใช้ types, variables, operators, expressions, 
// conditionals, loops (iterative), strings, arrays, objects
// ห้ามใช้ functional approach (map, filter, reduce, forEach)

// ข้อ 1: Types, Variables, Operators, Expressions
// โจทย์: คำนวณระยะเวลาการเดินทาง (ชั่วโมง) จากระยะทาง (km) และความเร็ว (km/h)
// ถ้าความเร็ว <= 0 คืน "Invalid speed"
// คืนค่าเป็นทศนิยม 2 ตำแหน่ง
function travelTime(distance, speed) {
    // เขียนโค้ดที่นี่
  }
  console.log(travelTime(100, 50)); // "2.00"
  console.log(travelTime(30, 0));   // "Invalid speed"
  
  // ข้อ 2: Conditionals
  // โจทย์: ตรวจสอบว่าเลขเป็น "Perfect Square" หรือไม่ (เช่น 4, 9, 16)
  // ใช้ switch case เท่านั้น คืน true/false
  function isPerfectSquare(num) {
    // เขียนโค้ดที่นี่
  }
  console.log(isPerfectSquare(16)); // true
  console.log(isPerfectSquare(7));  // false
  
  // ข้อ 3: Loops (Iterative)
  // โจทย์: หาผลรวมของตัวเลขที่หาร 3 หรือ 5 ลงตัวตั้งแต่ 1 ถึง n
  function sumDivisibleBy3or5(n) {
    // เขียนโค้ดที่นี่
  }
  console.log(sumDivisibleBy3or5(10)); // 33 (3 + 5 + 6 + 9 + 10)
  
  // ข้อ 4: Strings
  // โจทย์: นับจำนวนคำใน string (คำคั่นด้วยช่องว่าง) โดยไม่นับช่องว่างซ้ำ
  function countWords(str) {
    // เขียนโค้ดที่นี่
  }
  console.log(countWords("Hello World"));     // 2
  console.log(countWords("This  is  a test")); // 4
  
  // ข้อ 5: Arrays
  // โจทย์: หาค่าต่ำสุดและสูงสุดใน array แล้วคืนผลต่าง (max - min)
  function arrayRange(arr) {
    // เขียนโค้ดที่นี่
  }
  console.log(arrayRange([3, 1, 4, 1, 5])); // 4 (5 - 1)
  console.log(arrayRange([10, 2, 8]));      // 8 (10 - 2)
  
  // ข้อ 6: Objects
  // โจทย์: คำนวณราคารวมของสินค้าในตะกร้า (object ที่มี key เป็นชื่อสินค้า, value เป็นราคา)
  function totalCart(cart) {
    // เขียนโค้ดที่นี่
  }
  console.log(totalCart({ apple: 10, banana: 15 })); // 25
  console.log(totalCart({ pen: 5, book: 20, eraser: 3 })); // 28
  
  // ข้อ 7: Types, Variables, Operators, Expressions
  // โจทย์: คำนวณดอกเบี้ยทบต้น โดยรับเงินต้น (principal), อัตราดอกเบี้ย (rate), และจำนวนปี (years)
  // คืนค่าเป็นจำนวนเต็ม
  function compoundInterest(principal, rate, years) {
    // เขียนโค้ดที่นี่
  }
  console.log(compoundInterest(1000, 0.05, 2)); // 1102 (1000 * (1 + 0.05)^2)
  
  // ข้อ 8: Conditionals
  // โจทย์: จำแนกประเภทสามเหลี่ยมจากความยาว 3 ด้าน (a, b, c)
  // คืน "Equilateral", "Isosceles", "Scalene" หรือ "Not a triangle"
  function triangleType(a, b, c) {
    // เขียนโค้ดที่นี่
  }
  console.log(triangleType(3, 3, 3)); // "Equilateral"
  console.log(triangleType(3, 4, 5)); // "Scalene"
  console.log(triangleType(1, 1, 3)); // "Not a triangle"
  
  // ข้อ 9: Loops (Iterative)
  // โจทย์: สร้าง string ที่เป็นลำดับ Fibonacci จนถึง n ตัว คั่นด้วย comma
  function fibonacciSequence(n) {
    // เขียนโค้ดที่นี่
  }
  console.log(fibonacciSequence(5)); // "0, 1, 1, 2, 3"
  console.log(fibonacciSequence(3)); // "0, 1, 1"
  
  // ข้อ 10: Strings
  // โจทย์: กลับคำใน string โดยรักษาตำแหน่งคำ (เช่น "Hello World" → "olleH dlroW")
  function reverseWords(str) {
    // เขียนโค้ดที่นี่
  }
  console.log(reverseWords("Hello World")); // "olleH dlroW"
  console.log(reverseWords("I am here"));   // "I ma ereh"
  
  // ข้อ 11: Arrays
  // โจทย์: หมุน array ไปทางขวา n ตำแหน่ง
  function rotateArray(arr, n) {
    // เขียนโค้ดที่นี่
  }
  console.log(rotateArray([1, 2, 3, 4], 1)); // [4, 1, 2, 3]
  console.log(rotateArray([1, 2, 3], 2));    // [2, 3, 1]
  
  // ข้อ 12: Objects
  // โจทย์: หาสินค้าที่ราคาสูงสุดในตะกร้า คืนชื่อสินค้า
  function mostExpensive(cart) {
    // เขียนโค้ดที่นี่
  }
  console.log(mostExpensive({ apple: 10, banana: 15, orange: 12 })); // "banana"
  console.log(mostExpensive({ pen: 5, book: 20 }));                  // "book"
  
  // ข้อ 13: Types, Variables, Operators, Expressions
  // โจทย์: คำนวณระยะห่างระหว่างจุดสองจุด (x1, y1) และ (x2, y2) คืนทศนิยม 2 ตำแหน่ง
  function distance(x1, y1, x2, y2) {
    // เขียนโค้ดที่นี่
  }
  console.log(distance(0, 0, 3, 4)); // "5.00"
  console.log(distance(1, 1, 4, 5)); // "5.00"
  
  // ข้อ 14: Conditionals
  // โจทย์: ตรวจสอบว่าเลขเป็น "Prime" หรือไม่ คืน true/false
  function isPrime(num) {
    // เขียนโค้ดที่นี่
  }
  console.log(isPrime(7));  // true
  console.log(isPrime(12)); // false
  
  // ข้อ 15: Loops (Iterative)
  // โจทย์: หาตัวเลขที่เกิดซ้ำมากที่สุดใน array คืนตัวเลขนั้น (ถ้าเสมอกันคืนตัวแรก)
  function mostFrequent(arr) {
    // เขียนโค้ดที่นี่
  }
  console.log(mostFrequent([1, 2, 2, 3, 2])); // 2
  console.log(mostFrequent([1, 1, 2, 2]));    // 1
  
  // ข้อ 16: Strings
  // โจทย์: ตรวจสอบว่า string เป็น anagram ของอีก string หรือไม่ (ตัวอักษรเหมือนกันแต่เรียงต่างกัน)
  function isAnagram(str1, str2) {
    // เขียนโค้ดที่นี่
  }
  console.log(isAnagram("listen", "silent")); // true
  console.log(isAnagram("hello", "world"));   // false
  
  // ข้อ 17: Arrays
  // โจทย์: รวม array สองตัวโดยลบตัวซ้ำออก คืน array ใหม่
  function mergeUnique(arr1, arr2) {
    // เขียนโค้ดที่นี่
  }
  console.log(mergeUnique([1, 2, 3], [2, 3, 4])); // [1, 2, 3, 4]
  console.log(mergeUnique([1, 1], [1, 2]));       // [1, 2]
  
  // ข้อ 18: Objects
  // โจทย์: นับจำนวนสินค้าที่ราคาเกิน 10 ในตะกร้า
  function countExpensive(cart) {
    // เขียนโค้ดที่นี่
  }
  console.log(countExpensive({ apple: 10, banana: 15, orange: 12 })); // 2
  console.log(countExpensive({ pen: 5, book: 8 }));                   // 0
  
  // ข้อ 19: Types, Variables, Operators, Expressions
  // โจทย์: คำนวณภาษีจากรายได้ (income) ถ้าเกิน 10000 คิด 10% ของส่วนที่เกิน คืนทศนิยม 2 ตำแหน่ง 
  function calculateTax(income) {
    // เขียนโค้ดที่นี่
  }
  console.log(calculateTax(15000)); // "500.00"
  console.log(calculateTax(8000));  // "0.00"
  
  // ข้อ 20: Conditionals + Loops
  // โจทย์: หาว่าเลข n เป็น "Happy Number" หรือไม่ (ผลรวมกำลังสองของหลักซ้ำจนได้ 1 หรือวนซ้ำ)
  function isHappyNumber(n) {
    // เขียนโค้ดที่นี่
  }
  console.log(isHappyNumber(19)); // true (1^2 + 9^2 = 82, 8^2 + 2^2 = 68, ... จนได้ 1)
  console.log(isHappyNumber(2));  // false (วนซ้ำไม่ถึง 1)
  
  // ข้อ 21: Strings + Arrays
  // โจทย์: แยก string เป็น array ของคำที่ยาวกว่า 3 ตัวอักษร
  function longWords(str) {
    // เขียนโค้ดที่นี่
  }
  console.log(longWords("I am coding now")); // ["coding"]
  console.log(longWords("Hello world test")); // ["Hello", "world", "test"]
  
  // ข้อ 22: Arrays + Objects
  // โจทย์: สร้าง object นับความถี่ของตัวเลขใน array
  function frequencyCounter(arr) {
    // เขียนโค้ดที่นี่
  }
  console.log(frequencyCounter([1, 2, 2, 3])); // { "1": 1, "2": 2, "3": 1 }
  console.log(frequencyCounter([1, 1, 1]));     // { "1": 3 }
  
  // ข้อ 23: Loops + Conditionals
  // โจทย์: หาค่า factorial ของ n โดยถ้าเกิน 10 ให้คืน "Too large"
  function factorial(n) {
    // เขียนโค้ดที่นี่
  }
  console.log(factorial(5));  // 120 (5 * 4 * 3 * 2 * 1)
  console.log(factorial(11)); // "Too large"
  
  // ข้อ 24: Strings + Loops
  // โจทย์: สร้าง string ที่ซ้ำตัวอักษรตามจำนวนครั้งที่กำหนด (เช่น "a", 3 → "aaa")
  function repeatChar(char, times) {
    // เขียนโค้ดที่นี่
  }
  console.log(repeatChar("a", 3)); // "aaa"
  console.log(repeatChar("x", 5)); // "xxxxx"
  
  // ข้อ 25: Objects + Conditionals
  // โจทย์: ตรวจสอบว่า object มี property ที่มีค่าเป็น number เกิน 100 หรือไม่ คืน true/false
  function hasLargeValue(obj) {
    // เขียนโค้ดที่นี่
  }
  console.log(hasLargeValue({ a: 50, b: 150 })); // true
  console.log(hasLargeValue({ x: 10, y: 20 }));  // false