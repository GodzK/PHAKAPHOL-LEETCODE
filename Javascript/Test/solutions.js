// test.js - JavaScript Practice Test for Year 1 Students 🎉
// Date: April 03, 2025
// Total: 60 Problems | Time: 3 Hours | Focus: Logic & Problem Solving 🧠
// No Functional Programming Allowed (map, filter, reduce, forEach) 🚫
// Use Loops, Conditionals, and Basic Constructs Only 🔄
// Let's get started! 💪

/* --------------------------------------- */
/* Category 1: Types, Variables, Operators, Expressions (10 Problems) 🌟 */
/* --------------------------------------- */

// 1. 🎲 Calculate the average of three numbers stored in variables
// Example: num1 = 5, num2 = 10, num3 = 15 → Output: 10

function calc(...numbers) {
    let sum = 0
    console.log(numbers);
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }return sum
}
console.log(calc(4,5,6));
// 2. 🔢 Swap two variables without using a third variable (use operators!)
// Example: a = 3, b = 7 → Output: a = 7, b = 3
function swap(a1,a2) {
    temp = a2
    a2 = a1
    a1 = temp
    return `a = ${a1} b = ${a2}`
}
console.log(swap(7,3));

// 3. ➕ Add two numbers and check if the result is even or odd
// Example: 4 + 5 → Output: "9 is odd"
function Checktwo(a,b) {
    sum = a+b
    if (sum % 2 == 0) {
    return `${sum} is Even`
    }
    else{
       return `${sum} is odd`
    }
}
console.log(Checktwo(4,5));
// 4. 📏 Convert centimeters to meters and store the result in a variable
// Example: 250 cm → Output: 2.5 meters
function cmTotm(cm) {
    return `${cm / 100} meters` 
}
console.log(cmTotm(450));

// 5. ⚖️ Compare two numbers and print the larger one
// Example: x = 8, y = 12 → Output: 12
function larger(a1,a2) {
    return a1 > a2 ? a1 : a2
}
console.log(larger(7,12));
// 6. 🧮 Multiply three numbers and divide by 2, then round to the nearest integer
// Example: 3 * 4 * 5 / 2 → Output: 30


// 7. ⏳ Calculate total seconds from hours, minutes, and seconds
// Example: 1 hour, 2 minutes, 30 seconds → Output: 3750 seconds
function CalculateTime(hour,minutes,seconds) {
    let totalTime = 0
    totalTime += seconds
    totalTime += minutes * 60
    totalTime += hour * 3600
    return totalTime
}
console.log(CalculateTime(1,2,30));
// 8. 💰 Calculate total price with tax (tax rate = 7%)
// Example: price = 100 → Output: 107
function CalculateTax(price) {
    let tax_rate = price * 7/100
    return price + tax_rate
}
console.log(CalculateTax(100));

// 9. 🎯 Check if a number is divisible by both 3 and 5
// Example: 15 → Output: "Yes"
function checkboth(num) {
    return num%3 == 0 && num % 5 == 0 ? "Yes" : "No"
}
console.log(checkboth(15));

// 10. 🔄 Reverse a three-digit number using arithmetic operators
// Example: 123 → Output: 321
function reverse(number) {
    let numtext = number.toString()
    ans = ""
    for(let i = numtext.length - 1 ; i >= 0 ; i--){
    ans += numtext[i]
    }
    return Number(ans)
}
console.log(reverse(123));
/* --------------------------------------- */
/* Category 2: Conditionals (10 Problems) 🎮 */
/* --------------------------------------- */

// 11. 🕹️ Rock, Paper, Scissors: Determine the winner based on two inputs
// Example: "rock" vs "scissors" → Output: "Player 1 wins"

// 12. 🌡️ Check if a temperature is "hot" (>30), "cool" (15-30), or "cold" (<15)
// Example: 25 → Output: "cool"

// 13. 📅 Determine if a year is a leap year
// Example: 2020 → Output: "Yes"

// 14. 🎓 Grade calculator: Convert score (0-100) to A, B, C, D, F
// Example: 85 → Output: "B"

// 15. 🚦 Traffic light: Given a color, print the action (red = stop, green = go, yellow = slow)
// Example: "red" → Output: "stop"

// 16. 🔍 Check if a number is positive, negative, or zero
// Example: -5 → Output: "negative"

// 17. 🍔 Fast food order: Calculate price based on item (burger = 5, fries = 2, drink = 1)
// Example: "burger" → Output: 5

// 18. 🧩 Guess the day: Given a number (1-7), print the day of the week (1 = Monday)
// Example: 3 → Output: "Wednesday"

// 19. ⚽ Soccer score: Given goals by two teams, determine the winner or tie
// Example: Team A = 2, Team B = 2 → Output: "Tie"

// 20. 🎲 Dice game: Roll two dice (1-6), check if sum is lucky (7 or 11)
// Example: 4 + 3 → Output: "Lucky"

// /* --------------------------------------- */
/* Category 3: Loops (Iterative Approach) 🔄 (10 Problems) */
/* --------------------------------------- */

// 21. 🔢 Print all even numbers from 1 to 20
// Output: 2, 4, 6, ..., 20

// 22. ➕ Sum all numbers from 1 to 100
// Output: 5050

// 23. 🌟 Print a pattern: 5 rows of increasing stars (1, 2, 3, 4, 5)
// Output: *, **, ***, ****, *****

// 24. 🎯 Count how many times 7 appears in numbers 1 to 50
// Example: 7, 17, 27, ... → Output: 5

// 25. 🔍 Find the first number divisible by both 4 and 6 after 10
// Output: 12

// 26. ⏳ Calculate factorial of a number using a loop
// Example: 5 → Output: 120

// 27. 🧮 Print multiplication table of 5 (up to 10)
// Output: 5, 10, 15, ..., 50

// 28. 🎲 Simulate rolling a die until you get a 6, count the rolls
// Example: (random rolls) → Output: "Took 4 rolls"

// 29. 🔢 Sum all odd numbers between 1 and 30
// Output: 225

// 30. 🏃‍♂️ Countdown from 10 to 1, then print "Blast off!"
// Output: 10, 9, ..., 1, Blast off!

/* --------------------------------------- */
/* Category 4: Strings (10 Problems) 📝 */
/* --------------------------------------- */

// 31. 🔠 Count the number of vowels in a word
// Example: "hello" → Output: 2

// 32. 🔄 Reverse a string using a loop
// Example: "cat" → Output: "tac"

// 33. 🎤 Capitalize the first letter of a word
// Example: "dog" → Output: "Dog"

// 34. 🔍 Check if a string contains the letter "x"
// Example: "box" → Output: "Yes"

// 35. ✂️ Extract the first 3 characters of a string
// Example: "javascript" → Output: "jav"

// 36. 🔢 Count how many spaces are in a sentence
// Example: "I am happy" → Output: 2

// 37. 🎯 Replace all "a" with "o" in a string
// Example: "cat" → Output: "cot"

// 38. 📏 Measure the length of a string without using .length
// Example: "hi" → Output: 2

// 39. 🧩 Combine two strings alternately (e.g., "abc" + "123" = "a1b2c3")
// Example: "hi" + "go" → Output: "higo"

// 40. 🔠 Check if a word is a palindrome
// Example: "racecar" → Output: "Yes"

/* --------------------------------------- */
/* Category 5: Arrays (10 Problems) 📚 */
/* --------------------------------------- */

// 41. ➕ Find the sum of all elements in an array
// Example: [1, 2, 3] → Output: 6

// 42. 🔍 Find the largest number in an array
// Example: [5, 2, 9, 1] → Output: 9

// 43. 🔢 Count how many numbers are greater than 10 in an array
// Example: [5, 15, 3, 12] → Output: 2

// 44. 🔄 Reverse an array using a loop
// Example: [1, 2, 3] → Output: [3, 2, 1]

// 45. 🎯 Find the first even number in an array
// Example: [1, 3, 4, 5] → Output: 4

// 46. ✂️ Create a new array with only odd numbers
// Example: [1, 2, 3, 4] → Output: [1, 3]

// 47. 🔠 Sort an array of numbers in ascending order (use loops, no sort method)
// Example: [3, 1, 4, 2] → Output: [1, 2, 3, 4]

// 48. ➕ Double each element in an array
// Example: [1, 2, 3] → Output: [2, 4, 6]

// 49. 🔢 Find the average of an array of numbers
// Example: [10, 20, 30] → Output: 20

// 50. 🎲 Simulate a lottery: Check if a number exists in an array
// Example: [3, 7, 12], check 7 → Output: "Yes"

/* --------------------------------------- */
/* Category 6: Objects (10 Problems) 🗂️ */
/* --------------------------------------- */

// 51. 🧑‍🎓 Create a student object and print their full name
// Example: {first: "John", last: "Doe"} → Output: "John Doe"

// 52. 💰 Calculate total cost from an object of item prices
// Example: {apple: 2, banana: 1} → Output: 3

// 53. 🔍 Check if an object has a specific property
// Example: {name: "Alice", age: 20}, check "age" → Output: "Yes"

// 54. 🔢 Count how many properties an object has
// Example: {a: 1, b: 2, c: 3} → Output: 3

// 55. 🎯 Update a property value in an object
// Example: {score: 10}, change to 15 → Output: {score: 15}

// 56. 📋 Combine two objects into one
// Example: {a: 1} + {b: 2} → Output: {a: 1, b: 2}

// 57. 🔠 Find the longest property name in an object
// Example: {cat: 1, elephant: 2} → Output: "elephant"

// 58. ➕ Sum all numeric values in an object
// Example: {x: 5, y: 10} → Output: 15

// 59. 🎮 Game score: Update player object with points based on action
// Example: {points: 0}, "win" (+5) → Output: {points: 5}

// 60. 🧩 Convert object properties to a string
// Example: {name: "Bob", age: 25} → Output: "name:Bob,age:25"

