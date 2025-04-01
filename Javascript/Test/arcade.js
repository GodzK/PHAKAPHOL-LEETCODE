/**
 * 🎮 JAVASCRIPT INTERACTIVE PLAYGROUND 🎮
 * ===========================================
 * คู่มือฝึกฝน JavaScript ครบทุกหัวข้อพื้นฐาน
 * - Types, Variables, Operators
 * - Expressions, Conditionals, Loops
 * - Strings, Arrays, Objects
 *
 * คำแนะนำ: ทำแบบฝึกหัดต่างๆ ตามที่กำหนดไว้ในแต่ละส่วน
 * โดยเขียนโค้ดของคุณในพื้นที่ที่กำหนด
 */

// ============================================
// 📚 SECTION 1: TYPES AND VARIABLES
// ============================================

/**
 * 🔍 โจทย์ 1.1: ประกาศตัวแปรให้ครบทุกชนิด
 * ประกาศตัวแปรดังต่อไปนี้:
 * - ตัวแปร name เก็บชื่อของคุณ
 * - ตัวแปร age เก็บอายุของคุณ
 * - ตัวแปร isStudent เก็บสถานะว่าคุณเป็นนักเรียนหรือไม่
 * - ตัวแปร favColors เก็บสีที่ชอบเป็น array
 * - ตัวแปร userData เก็บข้อมูลของคุณเป็น object
 */

// เขียนโค้ดตรงนี้
function typeandvar(params) {
    let name = "Phakaphol";
let age = 19;
let isStudent = true;
let favColors = "yellow";
let userData = {
  name: "Phakaphol",
  isStudent: true,
  favColors: "yellow",
};
}


/**
 * 🔍 โจทย์ 1.2: Type Conversion
 * แปลงข้อมูลดังต่อไปนี้:
 * - แปลงตัวแปร numStr = "42" เป็นตัวเลข
 * - แปลงตัวแปร num = 100 เป็น string
 * - แปลงตัวแปร truthy = "hello" เป็น boolean
 * - แปลงตัวแปร falsy = 0 เป็น boolean
 */

// เขียนโค้ดตรงนี้
let numStr = "42";
let num100 = 100;
let truthy = "hello";
let falsy = 0;
let intnumStr = Number(numStr);
console.log(typeof intnumStr);
let numtostr = String(num100);
console.log(typeof numtostr);
let truthybool = Boolean(truthy);
console.log(truthybool);
let falsyy = Boolean(falsy);
console.log(falsyy);

// ============================================
// 📚 SECTION 2: OPERATORS AND EXPRESSIONS
// ============================================

//
 // โจทย์ 2.1: คำนวณและเก็บผลลัพธ์ในตัวแปร
 // สร้างตัวแปร sum ที่เก็บผลบวกของ 15 และ 7
 let sum = 15 + 7
 // สร้างตัวแปร diff ที่เก็บผลต่างของ 15 และ 7
 let diff = 15 + 7
 // สร้างตัวแปร product ที่เก็บผลคูณของ 15 และ 7
 let product = 15 * 7
 // สร้างตัวแปร quotient ที่เก็บผลหารของ 15 และ 7
 let quotient = 15 / 7
 // สร้างตัวแปร remainder ที่เก็บเศษของการหารระหว่าง 15 และ 7
 let remainder = 15 % 7

console.log(`Sum: ${sum}, Diff: ${diff}, Product: ${product}, Quotient: ${quotient}, Remainder: ${remainder}`);
 //



/**
 * 🔍 โจทย์ 2.2: การใช้ Compound Assignment Operators
 * กำหนดให้ x = 10, y = 5:
 * - เพิ่ม x ด้วย y โดยใช้ +=
 * - ลด x ด้วย y โดยใช้ -=
 * - คูณ x ด้วย y โดยใช้ *=
 * - หาร x ด้วย y โดยใช้ /=
 */

// เขียนโค้ดตรงนี้
// let x = 10;
// let y = 5;
//
// x += y; // x = x + y
// console.log("After addition:", x); // ควรได้ 15
//
// x -= y; // x = x - y
// console.log("After subtraction:", x); // ควรได้ 10
//
// x *= y; // x = x * y
// console.log("After multiplication:", x); // ควรได้ 50
//
// x /= y; // x = x / y
// console.log("After division:", x); // ควรได้ 10

/**
 * 🔍 โจทย์ 2.3: ลำดับการทำงานของตัวดำเนินการ (Operator Precedence)
 * คำนวณผลลัพธ์ของนิพจน์ต่อไปนี้และอธิบายลำดับการทำงาน:
 * - 2 + 3 * 4
 * - (2 + 3) * 4
 * - 2 + 3 * 4 / 2
 * - (2 + 3 * 4) / 2
 */

// เขียนโค้ดตรงนี้
// let expr1 = 2 + 3 * 4;      // 3 * 4 = 12, แล้วบวกด้วย 2 = 14
// let expr2 = (2 + 3) * 4;    // 2 + 3 = 5, แล้วคูณด้วย 4 = 20
// let expr3 = 2 + 3 * 4 / 2;  // 3 * 4 = 12, หารด้วย 2 = 6, บวกด้วย 2 = 8
// let expr4 = (2 + 3 * 4) / 2; // 3 * 4 = 12, บวกด้วย 2 = 14, หารด้วย 2 = 7
//
// console.log(`expr1: ${expr1}, expr2: ${expr2}, expr3: ${expr3}, expr4: ${expr4}`);

// ============================================
// 📚 SECTION 3: CONDITIONALS
// ============================================

/**
 * 🔍 โจทย์ 3.1: เขียนเงื่อนไขแบบ if-else
 * - เขียนโค้ดที่ตรวจสอบว่าตัวแปร score (สมมติให้มีค่า 75) อยู่ในช่วงใด
 *   และแสดงเกรดตามเงื่อนไขต่อไปนี้:
 *   - 80-100: A
 *   - 70-79: B
 *   - 60-69: C
 *   - 50-59: D
 *   - 0-49: F
 */

// เขียนโค้ดตรงนี้
// let score = 75;
// let grade;
//
// if (score >= 80 && score <= 100) {
//   grade = "A";
// } else if (score >= 70 && score <= 79) {
//   grade = "B";
// } else if (score >= 60 && score <= 69) {
//   grade = "C";
// } else if (score >= 50 && score <= 59) {
//   grade = "D";
// } else if (score >= 0 && score <= 49) {
//   grade = "F";
// } else {
//   grade = "Invalid score";
// }
//
// console.log(`Score: ${score}, Grade: ${grade}`);

/**
 * 🔍 โจทย์ 3.2: เขียนเงื่อนไขโดยใช้ Ternary Operator
 * - เขียนโค้ดที่ตรวจสอบว่าตัวแปร age มีค่ามากกว่าหรือเท่ากับ 18 หรือไม่
 *   ถ้าใช่ให้กำหนดค่า "Adult" ให้กับตัวแปร status
 *   ถ้าไม่ใช่ให้กำหนดค่า "Minor" ให้กับตัวแปร status
 */

// เขียนโค้ดตรงนี้
let age = 20
console.log(age > 18 ? "Adult" : "Minor");


/**
 * 🔍 โจทย์ 3.3: เขียนเงื่อนไขแบบ switch
 * - เขียนโค้ดที่ตรวจสอบค่าของตัวแปร day (เป็นตัวเลข 0-6)
 *   และแสดงชื่อวันตามค่าของ day โดยที่ 0 คือวันอาทิตย์, 1 คือวันจันทร์, ฯลฯ
 */

// เขียนโค้ดตรงนี้
// let day = 3; // สมมติเป็นวันพุธ
// let dayName;
//
// switch (day) {
//   case 0:
//     dayName = "วันอาทิตย์";
//     break;
//   case 1:
//     dayName = "วันจันทร์";
//     break;
//   case 2:
//     dayName = "วันอังคาร";
//     break;
//   case 3:
//     dayName = "วันพุธ";
//     break;
//   case 4:
//     dayName = "วันพฤหัสบดี";
//     break;
//   case 5:
//     dayName = "วันศุกร์";
//     break;
//   case 6:
//     dayName = "วันเสาร์";
//     break;
//   default:
//     dayName = "ไม่ใช่วันที่ถูกต้อง";
// }
//
// console.log(`Day number: ${day}, Day name: ${dayName}`);

// ============================================
// 📚 SECTION 4: LOOPS
// ============================================

/**
 * 🔍 โจทย์ 4.1: วนลูปด้วย for
 * - สร้าง array numbers ที่มีตัวเลขตั้งแต่ 1 ถึง 10
 * - ใช้ for loop เพื่อคำนวณผลรวมของตัวเลขทั้งหมดใน array
 */
// เขียนโค้ดตรงนี้

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.length);
function loopnum(numbers) {
    console.log("Function Sum()");
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i] 
        console.log(sum);
    }return sum
}
/**
 * 🔍 โจทย์ 4.2: วนลูปด้วย while
 * - ใช้ while loop เพื่อหาตัวเลขที่หาร 3 ลงตัวตั้งแต่ 1 ถึง 20
 */


function divisibleBy3() {
    let i = 0
    let ans = []

    while (i <= 20) {
        if(i % 3 == 0 && i !== 0){
            ans.push(i)
        }i++
    }return ans
    
}

console.log(divisibleBy3());

/**
 * 🔍 โจทย์ 4.3: วนลูปด้วย for...of
 * - กำหนดให้มี array fruits ที่มีผลไม้หลายชนิด
 * - ใช้ for...of loop เพื่อแสดงชื่อผลไม้แต่ละชนิด
 */

// เขียนโค้ดตรงนี้
let fruits = ["Apple", "Banana", "Orange", "Mango", "Strawberry"];
//

for(let i of fruits){
    console.log(i);
}

/**
 * 🔍 โจทย์ 4.4: วนลูปด้วย for...in
 * - กำหนดให้มี object person ที่มี properties หลายตัว
 * - ใช้ for...in loop เพื่อแสดงชื่อ property และ value แต่ละตัว
 */

// เขียนโค้ดตรงนี้
let person = {
  name: "John",
  age: 30,
  job: "Developer",
  city: "Bangkok",
  hobby: "Reading"
};

for(let i in person){
    console.log(person[i]);
}

// ============================================
// 📚 SECTION 5: STRINGS
// ============================================

/**
 * 🔍 โจทย์ 5.1: การจัดการกับ String
 * - สร้างตัวแปร fullName ที่เก็บชื่อเต็มของคุณ
 * - แยกชื่อและนามสกุลโดยใช้ method .split()
 * - แปลงชื่อให้เป็นตัวพิมพ์ใหญ่ทั้งหมดโดยใช้ .toUpperCase()
 * - แปลงนามสกุลให้เป็นตัวพิมพ์เล็กทั้งหมดโดยใช้ .toLowerCase()
 */

// เขียนโค้ดตรงนี้
// let fullName = "John Smith";
// let nameParts = fullName.split(" ");  // แยกชื่อและนามสกุล
//
// let firstName = nameParts[0];
// let lastName = nameParts[1];
//
// let upperFirstName = firstName.toUpperCase();
// let lowerLastName = lastName.toLowerCase();
//
// console.log(`Original: ${fullName}`);
// console.log(`Transformed: ${upperFirstName} ${lowerLastName}`);

/**
 * 🔍 โจทย์ 5.2: ค้นหาและแทนที่ข้อความใน String
 * - สร้างตัวแปร sentence ที่เก็บประโยคหนึ่ง
 * - ค้นหาตำแหน่งแรกของคำที่ต้องการโดยใช้ .indexOf()
 * - แทนที่คำบางคำในประโยคโดยใช้ .replace()
 */

// เขียนโค้ดตรงนี้
// let sentence = "JavaScript is a fun programming language to learn";
//
// // ค้นหาตำแหน่งของคำว่า "fun"
// let funPosition = sentence.indexOf("fun");
// console.log(`The word "fun" starts at position: ${funPosition}`);
//
// // แทนที่คำว่า "fun" ด้วย "awesome"
// let newSentence = sentence.replace("fun", "awesome");
// console.log(`Original: ${sentence}`);
// console.log(`Modified: ${newSentence}`);

/**
 * 🔍 โจทย์ 5.3: ตัดและต่อ String
 * - สร้าง String ที่เก็บข้อความยาว
 * - ใช้ .substring() เพื่อตัดเอาเฉพาะบางส่วน
 * - ใช้ .trim() เพื่อลบช่องว่างที่ต้นและท้าย
 * - ใช้ .concat() เพื่อต่อกับ String อื่น
 */

// เขียนโค้ดตรงนี้
// let text = "   Hello, welcome to the JavaScript course!   ";
//
// // ตัดข้อความเฉพาะคำว่า "welcome to"
// let substring = text.substring(9, 20);
// console.log(`Substring: "${substring}"`);
//
// // ลบช่องว่างที่ต้นและท้าย
// let trimmed = text.trim();
// console.log(`Trimmed: "${trimmed}"`);
//
// // ต่อ String
// let additionalText = " Hope you enjoy it!";
// let concatenated = trimmed.concat(additionalText);
// console.log(`Concatenated: "${concatenated}"`);

// ============================================
// 📚 SECTION 6: ARRAYS
// ============================================

/**
 * 🔍 โจทย์ 6.1: การจัดการกับ Array
 * - สร้าง array numbers ที่มีตัวเลข 5 ตัว
 * - เพิ่มตัวเลขใหม่ไปต่อท้าย array โดยใช้ .push()
 * - ลบตัวเลขตัวสุดท้ายออกโดยใช้ .pop()
 * - เพิ่มตัวเลขใหม่ไปที่ต้น array โดยใช้ .unshift()
 * - ลบตัวเลขตัวแรกออกโดยใช้ .shift()
 */

// เขียนโค้ดตรงนี้
// let numbers = [10, 20, 30, 40, 50];
// console.log("Original array:", numbers);
//
// // เพิ่มตัวเลขไปต่อท้าย
// numbers.push(60);
// console.log("After push:", numbers);
//
// // ลบตัวเลขตัวสุดท้าย
// let popped = numbers.pop();
// console.log(`Popped: ${popped}, After pop:`, numbers);
//
// // เพิ่มตัวเลขไปที่ต้น array
// numbers.unshift(5);
// console.log("After unshift:", numbers);
//
// // ลบตัวเลขตัวแรก
// let shifted = numbers.shift();
// console.log(`Shifted: ${shifted}, After shift:`, numbers);

/**
 * 🔍 โจทย์ 6.2: การวนลูป Array ด้วย .forEach() และ .map()
 * - สร้าง array numbers ที่มีตัวเลข 5 ตัว
 * - ใช้ .forEach() เพื่อแสดงตัวเลขแต่ละตัว
 * - ใช้ .map() เพื่อสร้าง array ใหม่ที่มีค่าเป็น 2 เท่าของตัวเลขใน array เดิม
 */

// เขียนโค้ดตรงนี้
// let numbers = [1, 2, 3, 4, 5];
//
// // ใช้ forEach แสดงค่าแต่ละตัว
// console.log("Using forEach:");
// numbers.forEach(function(number, index) {
//   console.log(`Item at index ${index}: ${number}`);
// });
//
// // ใช้ map สร้าง array ที่มีค่าเป็น 2 เท่า
// let doubled = numbers.map(function(number) {
//   return number * 2;
// });
//
// console.log("Original array:", numbers);
// console.log("Doubled array:", doubled);

/**
 * 🔍 โจทย์ 6.3: การกรอง Array ด้วย .filter() และรวมค่าด้วย .reduce()
 * - สร้าง array numbers ที่มีตัวเลขหลายตัว
 * - ใช้ .filter() เพื่อกรองเอาเฉพาะตัวเลขที่มากกว่า 10
 * - ใช้ .reduce() เพื่อหาผลรวมของตัวเลขที่เหลือ
 */

// เขียนโค้ดตรงนี้
// let numbers = [5, 12, 8, 21, 16, 4, 15, 25];
//
// // กรองเฉพาะตัวเลขที่มากกว่า 10
// let filtered = numbers.filter(function(number) {
//   return number > 10;
// });
//
// console.log("Original array:", numbers);
// console.log("Filtered array (> 10):", filtered);
//
// // หาผลรวมของตัวเลขที่เหลือ
// let sum = filtered.reduce(function(accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0);
//
// console.log("Sum of filtered numbers:", sum);

/**
 * 🔍 โจทย์ 6.4: การเรียงลำดับและค้นหาใน Array
 * - สร้าง array names ที่มีชื่อคนหลายคน
 * - เรียงลำดับชื่อตามตัวอักษรโดยใช้ .sort()
 * - ค้นหาตำแหน่ง index ของชื่อที่ต้องการโดยใช้ .indexOf()
 * - ตรวจสอบว่ามีชื่อที่ต้องการอยู่ใน array หรือไม่โดยใช้ .includes()
 */

// เขียนโค้ดตรงนี้
// let names = ["Lisa", "John", "Amy", "David", "Michael"];
// console.log("Original names:", names);
//
// // เรียงลำดับชื่อตามตัวอักษร
// let sortedNames = [...names].sort();  // ใช้ [...names] เพื่อไม่เปลี่ยนแปลง array ต้นฉบับ
// console.log("Sorted names:", sortedNames);
//
// // ค้นหาตำแหน่งของชื่อ
// let johnIndex = names.indexOf("John");
// console.log(`Index of "John": ${johnIndex}`);
//
// // ตรวจสอบว่ามีชื่อที่ต้องการหรือไม่
// let hasSarah = names.includes("Sarah");
// let hasAmy = names.includes("Amy");
// console.log(`Has "Sarah": ${hasSarah}`);
// console.log(`Has "Amy": ${hasAmy}`);

// ============================================
// 📚 SECTION 7: OBJECTS
// ============================================

/**
 * 🔍 โจทย์ 7.1: การสร้างและเข้าถึง Object
 * - สร้าง object student ที่มี properties ต่าง ๆ เช่น name, age, grades, และ address
 * - เข้าถึงค่า properties แต่ละตัวโดยใช้ dot notation และ bracket notation
 * - เพิ่ม property ใหม่
 * - ลบ property บางตัวออก
 */

// เขียนโค้ดตรงนี้
// let student = {
//   name: "Jane Smith",
//   age: 20,
//   grades: {
//     math: 85,
//     science: 92,
//     english: 88
//   },
//   address: {
//     street: "123 Main St",
//     city: "Bangkok",
//     zipCode: "10330"
//   }
// };
//
// // เข้าถึงด้วย dot notation
// console.log(`Name: ${student.name}`);
// console.log(`Math grade: ${student.grades.math}`);
//
// // เข้าถึงด้วย bracket notation
// console.log(`Age: ${student["age"]}`);
// console.log(`City: ${student["address"]["city"]}`);
//
// // เพิ่ม property ใหม่
// student.email = "jane.smith@example.com";
// student.phoneNumber = "123-456-7890";
// console.log("After adding properties:", student);
//
// // ลบ property
// delete student.phoneNumber;
// console.log("After deleting property:", student);

/**
 * 🔍 โจทย์ 7.2: การวนลูป Object ด้วย for...in และ Object methods
 * - สร้าง object product ที่มี properties ต่าง ๆ
 * - ใช้ for...in loop เพื่อแสดง properties และ values ทั้งหมด
 * - ใช้ Object.keys() เพื่อแสดงชื่อ properties ทั้งหมด
 * - ใช้ Object.values() เพื่อแสดง values ทั้งหมด
 * - ใช้ Object.entries() เพื่อแสดงคู่ key-value ทั้งหมด
 */

// เขียนโค้ดตรงนี้
// let product = {
//   id: "P001",
//   name: "Smartphone",
//   price: 15000,
//   inStock: true,
//   specs: {
//     screen: "6.5 inch",
//     camera: "12MP",
//     memory: "128GB"
//   }
// };
//
// // ใช้ for...in loop
// console.log("Using for...in loop:");
// for (let key in product) {
//   if (typeof product[key] !== 'object') {
//     console.log(`${key}: ${product[key]}`);
//   } else {
//     console.log(`${key}: [Object]`);
//   }
// }
//
// // ใช้ Object.keys()
// console.log("\nUsing Object.keys():");
// const keys = Object.keys(product);
// console.log(keys);
//
// // ใช้ Object.values()
// console.log("\nUsing Object.values():");
// const values = Object.values(product);
// console.log(values);
//
// // ใช้ Object.entries()
// console.log("\nUsing Object.entries():");
// const entries = Object.entries(product);
// console.log(entries);

/**
 * 🔍 โจทย์ 7.3: การ Destructuring Object
 * - สร้าง object user ที่มี properties ต่าง ๆ
 * - ใช้ Object Destructuring เพื่อแยกค่า properties ออกมาเป็นตัวแปรต่าง ๆ
 * - ใช้ default values ใน Destructuring
 * - ใช้ renamed variables ใน Destructuring
 */

// เขียนโค้ดตรงนี้
// let user = {
//   id: 101,
//   username: "johnsmith",
//   email: "john@example.com",
//   premium: true,
//   address: {
//     city: "Bangkok",
//     country: "Thailand"
//   }
// };
//
// // Destructuring พื้นฐาน
// let { username, email } = user;
// console.log(`Username: ${username}, Email: ${email}`);
//
// // Destructuring พร้อม default values
// let { premium, level = "beginner" } = user;
// console.log(`Premium: ${premium}, Level: ${level}`);
//
//
