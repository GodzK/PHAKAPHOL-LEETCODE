// Advanced JavaScript Learning File for Midterm Exam Preparation
// Focus: Diverse Problem-Solving Techniques, Thinking, Analyzing, Processing
// Topics: Types, Variables, Operators, Expressions, Conditionals, Loops, Strings, Arrays, Objects
// No functional approaches (map, filter, reduce, forEach) as per exam rules

// 1. TYPES AND VARIABLES
// Multiple ways to handle types and variables
let num = 42;
let str = "Test";
let bool = false;
let arr = [1, 2, 3];
let obj = { key: "value" };

// Type checking with multiple conditions
let value = "123";
if (typeof value === "string") {
    let converted = Number(value); // Convert string to number
    if (!isNaN(converted)) {
        console.log("Converted to number:", converted);
    }
}

// Practice: Swap two variables without a temporary variable
let x = 5, y = 10;
x = x + y; // 15
y = x - y; // 5
x = x - y; // 10
console.log("Swapped: x =", x, "y =", y);

// 2. OPERATORS AND EXPRESSIONS
// Combining operators for complex expressions
let p = 8, q = 3;
let result = (p * q + p - q) / 2; // (24 + 8 - 3) / 2 = 14.5

// Bitwise trick: Check if a number is even or odd
let n = 7;
let isEven = (n & 1) === 0; // Bitwise AND with 1
console.log(n, "is even?", isEven); // false

// Practice: Calculate power without Math.pow
let base = 2, exp = 3, power = 1;
for (let i = 0; i < exp; i++) {
    power = power * base;
}
console.log(base, "to the power", exp, "is", power); // 8

// 3. CONDITIONALS
// Nested conditionals for complex decision-making
let temperature = 25;
let weather = "rainy";
let activity;

if (temperature > 30) {
    if (weather === "sunny") {
        activity = "swimming";
    } else {
        activity = "stay inside";
    }
} else if (temperature > 20) {
    activity = "walking";
} else {
    activity = "reading";
}
console.log("Activity:", activity); // "walking"

// Practice: Determine grade with multiple criteria
let examScore = 75, attendance = 90;
let finalGrade;
if (examScore >= 80 && attendance >= 85) {
    finalGrade = "A";
} else if (examScore >= 70 || attendance >= 90) {
    finalGrade = "B";
} else {
    finalGrade = "C";
}
console.log("Final Grade:", finalGrade); // "B"

// 4. LOOPS (Iterative Approach)
// Multiple loop techniques
let i = 0;
while (i < 5) {
    if (i === 3) {
        break; // Exit loop early
    }
    console.log("While loop:", i);
    i++;
}

// Nested loops for 2D processing
for (let row = 1; row <= 3; row++) {
    let line = "";
    for (let col = 1; col <= row; col++) {
        line = line + "* ";
    }
    console.log(line);
}
// Output:
// * 
// * * 
// * * *

// Practice: Find all factors of a number
let numToFactor = 12;
for (let i = 1; i <= numToFactor; i++) {
    if (numToFactor % i === 0) {
        console.log(i, "is a factor of", numToFactor);
    }
}

// 5. STRINGS
// Advanced string processing
let sentence = "Learning JavaScript is fun";
let words = "";
let wordCount = 1;

// Manual split into words using loop
for (let i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i) === " ") {
        wordCount++;
    }
}
console.log("Word count:", wordCount); // 5

// Practice: Reverse a string
let original = "hello";
let reversed = "";
for (let i = original.length - 1; i >= 0; i--) {
    reversed = reversed + original.charAt(i);
}
console.log("Reversed:", reversed); // "olleh"

// Alternative: Check if string is palindrome
let test = "radar";
let isPalindrome = true;
for (let i = 0; i < test.length / 2; i++) {
    if (test.charAt(i) !== test.charAt(test.length - 1 - i)) {
        isPalindrome = false;
        break;
    }
}
console.log(test, "is palindrome?", isPalindrome); // true

// 6. ARRAYS
// Multiple array processing techniques
let scores = [85, 92, 78, 95, 88];

// Find min and max together
let min = scores[0], max = scores[0];
for (let i = 1; i < scores.length; i++) {
    if (scores[i] < min) min = scores[i];
    if (scores[i] > max) max = scores[i];
}
console.log("Min:", min, "Max:", max); // Min: 78 Max: 95

// Practice: Remove duplicates from array
let dupes = [1, 2, 2, 3, 3, 4];
let unique = [];
let found;
for (let i = 0; i < dupes.length; i++) {
    found = false;
    for (let j = 0; j < unique.length; j++) {
        if (dupes[i] === unique[j]) {
            found = true;
            break;
        }
    }
    if (!found) {
        unique[unique.length] = dupes[i];
    }
}
console.log("Unique array:", unique); // [1, 2, 3, 4]

// 7. OBJECTS
// Advanced object manipulation
let person = {
    name: "Alice",
    age: 25,
    scores: [90, 85, 88]
};

// Add property dynamically
person.city = "Bangkok";

// Practice: Find average of scores in object
let sumScores = 0;
for (let i = 0; i < person.scores.length; i++) {
    sumScores = sumScores + person.scores[i];
}
let average = sumScores / person.scores.length;
console.log("Average score:", average); // 87.666...

// Complex Problem: Merge two objects manually
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
let merged = {};
for (let key in obj1) {
    merged[key] = obj1[key];
}
for (let key in obj2) {
    merged[key] = obj2[key]; // Overwrites if key exists
}
console.log("Merged object:", merged); // { a: 1, b: 3, c: 4 }

// FINAL CHALLENGE PROBLEM
// Problem: Given an array of numbers, find pairs that sum to a target
let numbers = [2, 4, 3, 5, 7, 8];
let target = 7;
for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === target) {
            console.log("Pair found:", numbers[i], "+", numbers[j], "=", target);
        }
    }
}
// Output: Pair found: 2 + 5 = 7, Pair found: 4 + 3 = 7