// test.spec.js - Unit Tests for 60 JavaScript Problems
// Date: April 03, 2025
// Tests all 60 functions from test.js
// Run with: node test.spec.js

const solutions = require('./solutions.js');

let passed = 0;
let total = 0;

function runTest(testName, condition) {
    total++;
    if (condition) {
        passed++;
        console.log(`${testName}: Passed`);
    } else {
        console.log(`${testName}: Failed`);
    }
}

function showResults() {
    console.log(`Results: ${passed}/${total} passed`);
}

// Category 1: Types, Variables, Operators, Expressions
runTest("1. Average of 5, 10, 15", solutions.averageThree(5, 10, 15) === 10);
runTest("2. Swap 3 and 7", solutions.swapNumbers(3, 7)[0] === 7 && solutions.swapNumbers(3, 7)[1] === 3);
runTest("3. 4 + 5 is odd", solutions.checkSumParity(4, 5) === "9 is odd");
runTest("4. 250 cm to meters", solutions.cmToMeters(250) === 2.5);
runTest("5. Larger of 8 and 12", solutions.findLarger(8, 12) === 12);
runTest("6. Multiply 3, 4, 5 and halve", solutions.multiplyAndHalve(3, 4, 5) === 30);
runTest("7. 1h 2m 30s to seconds", solutions.timeToSeconds(1, 2, 30) === 3750);
runTest("8. Price 100 with 7% tax", solutions.addTax(100) === 107);
runTest("9. 15 divisible by 3 and 5", solutions.divisibleBy3And5(15) === "Yes");
runTest("10. Reverse 123", solutions.reverseNumber(123) === 321);

// Category 2: Conditionals
runTest("11. Rock vs Scissors", solutions.rockPaperScissors("rock", "scissors") === "Player 1 wins");
runTest("12. Temp 25 is cool", solutions.checkTemperature(25) === "cool");
runTest("13. 2020 is leap year", solutions.isLeapYear(2020) === "Yes");
runTest("14. Score 85 is B", solutions.getGrade(85) === "B");
runTest("15. Red light is stop", solutions.trafficLight("red") === "stop");
runTest("16. -5 is negative", solutions.checkSign(-5) === "negative");
runTest("17. Burger price is 5", solutions.fastFoodPrice("burger") === 5);
runTest("18. Day 3 is Wednesday", solutions.getDay(3) === "Wednesday");
runTest("19. 2 vs 2 is tie", solutions.soccerScore(2, 2) === "Tie");
runTest("20. Dice 4 + 3 is lucky", solutions.diceGame(4, 3) === "Lucky");

// Category 3: Loops
runTest("21. Even numbers 1 to 20", solutions.evenNumbersTo20().join(",") === "2,4,6,8,10,12,14,16,18,20");
runTest("22. Sum 1 to 100", solutions.sumTo100() === 5050);
runTest("23. Star pattern 5 rows", solutions.starPattern(5).join(",") === "*,**,***,****,*****");
runTest("24. Count 7s in 1 to 50", solutions.countSevens(50) === 5);
runTest("25. First divisible by 4 and 6 after 10", solutions.firstDivisibleBy4And6(10) === 12);
runTest("26. Factorial of 5", solutions.factorial(5) === 120);
runTest("27. Multiplication table of 5", solutions.multiplicationTable(5).join(",") === "5,10,15,20,25,30,35,40,45,50");
runTest("28. Rolls until 6 (mocked)", solutions.rollsUntilSix(6) === 1); // Mocked for simplicity
runTest("29. Sum odd numbers 1 to 30", solutions.sumOddTo30() === 225);
runTest("30. Countdown 10 to 1", solutions.countdown(10).slice(-1)[0] === "Blast off!");

// Category 4: Strings
runTest("31. Vowels in hello", solutions.countVowels("hello") === 2);
runTest("32. Reverse cat", solutions.reverseString("cat") === "tac");
runTest("33. Capitalize dog", solutions.capitalizeFirst("dog") === "Dog");
runTest("34. X in box", solutions.hasX("box") === "Yes");
runTest("35. First 3 of javascript", solutions.firstThree("javascript") === "jav");
runTest("36. Spaces in I am happy", solutions.countSpaces("I am happy") === 2);
runTest("37. Replace a with o in cat", solutions.replaceAWithO("cat") === "cot");
runTest("38. Length of hi without .length", solutions.stringLength("hi") === 2);
runTest("39. Combine hi and go", solutions.combineAlternately("hi", "go") === "higo");
runTest("40. Palindrome racecar", solutions.isPalindrome("racecar") === "Yes");

// Category 5: Arrays
runTest("41. Sum of [1, 2, 3]", solutions.sumArray([1, 2, 3]) === 6);
runTest("42. Largest in [5, 2, 9, 1]", solutions.findLargest([5, 2, 9, 1]) === 9);
runTest("43. Count >10 in [5, 15, 3, 12]", solutions.countGreaterThan10([5, 15, 3, 12]) === 2);
runTest("44. Reverse [1, 2, 3]", solutions.reverseArray([1, 2, 3]).join(",") === "3,2,1");
runTest("45. First even in [1, 3, 4, 5]", solutions.firstEven([1, 3, 4, 5]) === 4);
runTest("46. Odd numbers from [1, 2, 3, 4]", solutions.filterOdd([1, 2, 3, 4]).join(",") === "1,3");
runTest("47. Sort [3, 1, 4, 2]", solutions.sortArray([3, 1, 4, 2]).join(",") === "1,2,3,4");
runTest("48. Double [1, 2, 3]", solutions.doubleArray([1, 2, 3]).join(",") === "2,4,6");
runTest("49. Average of [10, 20, 30]", solutions.averageArray([10, 20, 30]) === 20);
runTest("50. 7 in [3, 7, 12]", solutions.hasNumber([3, 7, 12], 7) === "Yes");

// Category 6: Objects
runTest("51. Full name John Doe", solutions.fullName({first: "John", last: "Doe"}) === "John Doe");
runTest("52. Total cost apple:2 banana:1", solutions.totalCost({apple: 2, banana: 1}) === 3);
runTest("53. Has age property", solutions.hasProperty({name: "Alice", age: 20}, "age") === "Yes");
runTest("54. Count properties a:1 b:2 c:3", solutions.countProperties({a: 1, b: 2, c: 3}) === 3);
runTest("55. Update score to 15", solutions.updateScore({score: 10}, 15).score === 15);
runTest("56. Combine {a:1} and {b:2}", solutions.combineObjects({a: 1}, {b: 2}).b === 2);
runTest("57. Longest name in {cat:1, elephant:2}", solutions.longestProperty({cat: 1, elephant: 2}) === "elephant");
runTest("58. Sum values in {x:5, y:10}", solutions.sumObjectValues({x: 5, y: 10}) === 15);
runTest("59. Add 5 points for win", solutions.updatePoints({points: 0}, "win").points === 5);
runTest("60. Object to string", solutions.objectToString({name: "Bob", age: 25}) === "name:Bob,age:25");

showResults();