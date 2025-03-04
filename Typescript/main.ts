// 30 Days of TypeScript - A Journey to Mastery
// File: 30.ts
// Created with care for your growth in TypeScript programming

// Day 1: Hello TypeScript
// Description: Write a function that takes a string (name) and returns "Hello, [name]!"
// Example:
//   Input: "Alice" -> Output: "Hello, Alice!"
//   Input: "Bob"   -> Output: "Hello, Bob!"
// Requirements: Use explicit TypeScript types for parameters and return value

// Code right here🥪:c
function Hello(name: string): string {
  try {
    if (typeof name !== "string") {
      throw new Error("Invalid type: name must be a string");
    }
    return `Hello, ${name}!`;
  } catch (e) {
    return `Error: ${(e as Error).message}`;
  }
}
// -----------------------------------------------

// Day 2: Even or Odd
// Description: Write a function that takes a number and returns "Even" or "Odd"
// Example:
//   Input: 4  -> Output: "Even"
//   Input: 7  -> Output: "Odd"
// Requirements: Use conditionals and TypeScript types

// Code right here🥪:

function EvenOrOdd(num: number): string {
  try {
    if (typeof num !== "number") {
      throw new Error("Invalid type: num must be a number");
    }
    return num % 2 === 0 ? "Even" : "Odd";
  } catch (e) {
    return `Error: ${(e as Error).message}`;
  }
}

// -----------------------------------------------

// Day 3: Sum of Numbers
// Description: Write a function that takes an array of numbers and returns their sum
// Example:
//   Input: [1, 2, 3] -> Output: 6
//   Input: [5, -2, 1] -> Output: 4
// Requirements: Use a loop and TypeScript array type

// Code right here🥪:
function sum(arr: number[]): number {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// console.log(sum([1, 2, 3]));
// -----------------------------------------------

// Day 4: Reverse String
// Description: Write a function that takes a string and returns it reversed
// Example:
//   Input: "hello" -> Output: "olleh"
//   Input: "TypeScript" -> Output: "tpircSepyT"
// Requirements: Use loop or string methods

// Code right here🥪:

function reverse(word: string) {
  try {
    if (typeof word !== "string") {
      throw new Error("Your Type is wrong");
    }
    let reverse = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reverse += word[i];
    }
    return reverse;
  } catch (e) {
    console.log("Error occurs", e);
  }
}
// console.log(reverse("Hello"));
// -----------------------------------------------

// Day 5: Count Vowels
// Description: Write a function that counts vowels (a, e, i, o, u) in a string (case-insensitive)
// Example:
//   Input: "hello" -> Output: 2
//   Input: "WHY"   -> Output: 0
// Requirements: Use loop and conditionals

// Code right here🥪:
function Vowels(words: string): number {
  words = words.toLowerCase();
  let count = 0;
  const vowels: string[] = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < words.length; i++) {
    if (vowels.includes(words[i])) {
      count += 1;
    }
  }
  return count;
}

// console.log(Vowels("Hello"));

// -----------------------------------------------

// Day 6: Max Number
// Description: Write a function that takes an array of numbers and returns the maximum value
// Example:
//   Input: [1, 5, 3] -> Output: 5
//   Input: [-2, 0, 8] -> Output: 8
// Requirements: Use loop or array methods

// Code right here🥪:

function maxnums(nums: number[]) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  return max;
}
// console.log(maxnums([3,9,2]));

// -----------------------------------------------

// Day 7: FizzBuzz
// Description: Write a function that prints numbers 1 to n, replacing multiples of 3 with "Fizz", 5 with "Buzz", and both with "FizzBuzz"
// Example:
//   Input: 5  -> Output: "1 2 Fizz 4 Buzz" (or log each number)
//   Input: 15 -> Output includes "FizzBuzz" at 15
// Requirements: Use loop and conditionals

// Code right here🥪:

function fizzbuzz(times: number) {
  let text: string = "";
  for (let i = 1; i <= times; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      text += "FizzBuzz";
    } else if (i % 3 === 0) {
      text += "Fizz";
    } else if (i % 5 === 0) {
      text += "Buzz";
    } else {
      text += i;
    }
    text += " ";
  }
  return text;
}


console.log(fizzbuzz(5));

// -----------------------------------------------

// Day 8: Capitalize Words
// Description: Write a function that capitalizes the first letter of each word in a sentence
// Example:
//   Input: "hello world" -> Output: "Hello World"
//   Input: "i am coder"  -> Output: "I Am Coder"
// Requirements: Use string methods and loop

// Code right here🥪:

function Capitalize(word:string){
  let text = word.toLowerCase().split(" ")
  for (let i = 0; i < word.length ; i++) {
    
    
  }
}
console.log(Capitalize("hello world"));
// -----------------------------------------------

// Day 9: Remove Duplicates
// Description: Write a function that removes duplicate characters from a string, keeping first occurrence
// Example:
//   Input: "hello" -> Output: "helo"
//   Input: "aabbcc" -> Output: "abc"
// Requirements: Use loop or Set

// Code right here🥪:

// -----------------------------------------------

// Day 10: Array Filter
// Description: Write a function that takes an array of numbers and returns only even numbers
// Example:
//   Input: [1, 2, 3, 4] -> Output: [2, 4]
//   Input: [5, 7, 8]    -> Output: [8]
// Requirements: Use array methods or loop

// Code right here🥪:

// -----------------------------------------------

// Day 11: Palindrome Checker
// Description: Write a function that checks if a string is a palindrome (reads same forward and backward)
// Example:
//   Input: "radar" -> Output: true
//   Input: "hello" -> Output: false
// Requirements: Use loop or string methods

// Code right here🥪:

// -----------------------------------------------

// Day 12: Longest Word
// Description: Write a function that finds the longest word in a sentence
// Example:
//   Input: "I love TypeScript" -> Output: "TypeScript"
//   Input: "cat dog elephant"  -> Output: "elephant"
// Requirements: Use string split and loop

// Code right here🥪:

// -----------------------------------------------

// Day 13: Array Intersection
// Description: Write a function that finds common elements between two arrays
// Example:
//   Input: [1, 2, 3], [2, 3, 4] -> Output: [2, 3]
//   Input: [5, 6], [7, 8]       -> Output: []
// Requirements: Use loop or Set

// Code right here🥪:

// -----------------------------------------------

// Day 14: Rotate Array
// Description: Write a function that rotates an array to the right by n positions
// Example:
//   Input: [1, 2, 3, 4], 1 -> Output: [4, 1, 2, 3]
//   Input: [1, 2, 3], 2    -> Output: [2, 3, 1]
// Requirements: Use array manipulation

// Code right here🥪:

// -----------------------------------------------

// Day 15: Simple Calculator
// Description: Write a function that takes two numbers and an operation (+, -, *, /) and returns the result
// Example:
//   Input: 2, 3, "+" -> Output: 5
//   Input: 6, 2, "/" -> Output: 3
// Requirements: Use conditionals or switch

// Code right here🥪:

// -----------------------------------------------

// Day 16: Student Records
// Description: Create an interface for a student (name, age, grade) and a function to display student info
// Example:
//   Input: {name: "Alice", age: 20, grade: "A"} -> Output: "Alice, 20, Grade: A"
// Requirements: Use TypeScript interface

// Code right here🥪:

// -----------------------------------------------

// Day 17: Sum of Digits
// Description: Write a function that takes a number and returns the sum of its digits
// Example:
//   Input: 123 -> Output: 6
//   Input: 505 -> Output: 10
// Requirements: Convert to string or use math

// Code right here🥪:

// -----------------------------------------------

// Day 18: Type Guard
// Description: Write a function that checks if a value is string or number and returns a message
// Example:
//   Input: "hello" -> Output: "This is a string"
//   Input: 42      -> Output: "This is a number"
// Requirements: Use TypeScript type guard

// Code right here🥪:

// -----------------------------------------------

// Day 19: Merge Arrays
// Description: Write a function that merges two arrays into one, removing duplicates
// Example:
//   Input: [1, 2], [2, 3] -> Output: [1, 2, 3]
//   Input: [4], [4, 5]    -> Output: [4, 5]
// Requirements: Use array methods or Set

// Code right here🥪:

// -----------------------------------------------

// Day 20: Optional Chaining
// Description: Write a function that safely accesses a nested property with optional chaining
// Example:
//   Input: {user: {name: "Alice"}} -> Output: "Alice"
//   Input: {user: {}}             -> Output: "Unknown"
// Requirements: Use TypeScript optional chaining

// Code right here🥪:

// -----------------------------------------------

// Day 21: Binary Search
// Description: Write a function that performs binary search on a sorted array
// Example:
//   Input: [1, 2, 3, 4], 3 -> Output: 2 (index)
//   Input: [1, 5, 7], 6    -> Output: -1
// Requirements: Array must be sorted

// Code right here🥪:

// -----------------------------------------------

// Day 22: Two Sum
// Description: Write a function that finds two numbers in an array that add up to a target
// Example:
//   Input: [2, 7, 11, 15], 9 -> Output: [0, 1] (indices)
//   Input: [3, 2, 4], 6      -> Output: [1, 2]
// Requirements: Use loop or hash map

// Code right here🥪:

// -----------------------------------------------

// Day 23: Generic Function
// Description: Write a generic function that returns the last element of an array
// Example:
//   Input: [1, 2, 3]     -> Output: 3
//   Input: ["a", "b"]    -> Output: "b"
// Requirements: Use TypeScript generics

// Code right here🥪:

// -----------------------------------------------

// Day 24: Word Frequency
// Description: Write a function that counts the frequency of each word in a sentence
// Example:
//   Input: "the cat the dog" -> Output: {the: 2, cat: 1, dog: 1}
// Requirements: Use object to store counts

// Code right here🥪:

// -----------------------------------------------

// Day 25: Flatten Array
// Description: Write a function that flattens a nested array into a single array
// Example:
//   Input: [1, [2, 3], [4]] -> Output: [1, 2, 3, 4]
//   Input: [[1, 2], 3]      -> Output: [1, 2, 3]
// Requirements: Use recursion or array methods

// Code right here🥪:

// -----------------------------------------------

// Day 26: Caesar Cipher
// Description: Write a function that shifts each letter in a string by n positions
// Example:
//   Input: "abc", 1 -> Output: "bcd"
//   Input: "xyz", 2 -> Output: "zab"
// Requirements: Handle alphabet wrap-around

// Code right here🥪:

// -----------------------------------------------

// Day 27: Fibonacci Generator
// Description: Write a function that generates the first n Fibonacci numbers
// Example:
//   Input: 5 -> Output: [0, 1, 1, 2, 3]
//   Input: 7 -> Output: [0, 1, 1, 2, 3, 5, 8]
// Requirements: Use loop

// Code right here🥪:

// -----------------------------------------------

// Day 28: Queue Implementation
// Description: Implement a Queue class with enqueue, dequeue, and peek methods
// Example:
//   q.enqueue(1); q.enqueue(2); q.dequeue() -> Output: 1
// Requirements: Use TypeScript class and interface

// Code right here🥪:

// -----------------------------------------------

// Day 29: Matrix Spiral
// Description: Write a function that returns elements of a 2D array in spiral order
// Example:
//   Input: [[1, 2], [3, 4]] -> Output: [1, 2, 4, 3]
//   Input: [[1, 2, 3], [4, 5, 6]] -> Output: [1, 2, 3, 6, 5, 4]
// Requirements: Use loops

// Code right here🥪:

// -----------------------------------------------

// Day 30: Mini Project - Todo List
// Description: Create a Todo List system with add, remove, and display functions
// Example:
//   add("Study"); add("Code"); remove("Study"); display() -> Output: ["Code"]
// Requirements: Use class, interface, and array

// Code right here🥪:

// -----------------------------------------------
// End of 30 Days of TypeScript - Keep pushing forward!
