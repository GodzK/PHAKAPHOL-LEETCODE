//Tutor  Int141 Quiz
//1. Even or Odd
function EvenOdd(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}
//2. Minimum of three number
function findmin(a, b, c) {
  if (a < b) {
    if (a < c) {
      return a;
    } else {
      return c;
    }
  } else if (a == b) {
    if (a > c) {
      return c;
    }
  } else {
    return b;
  }
}

//3. find the median
function findmedian(a, b, c) {
  if (a > b) {
    if (a < c) {
      return a;
    }
    if (a > c) {
      if (b > c) {
        return b;
      }
    }
    if (b == c) {
      return c;
    }
    if (b < c) {
      return c;
    }
  }
  if (a < b) {
    if (a < c) {
      if (c > b) {
        return b;
      }
      return c;
    }
  }
}

//4. Switch Case Exercise #Warm up
function Calculator(num1, num2, operator) {
  switch (operator) {
    // รับมาก็ใช้ไปเลย ไม่ต้องมีcondition
    case "plus":
      return num1 + num2;
    case " minus":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      return num1 / num2;
    default:
      console.log("No type found");
  }
}
// console.log(Calculator(3,2,"plus"));

//5. Switch Case Exercise #Exercise 1
function Season(month) {
  switch (month) {
    case 1:
        return "Winter";
    case 2:
        return "Summer"
    case 3:
        return "Spring"
    default:
        return "Not found"
  }
}
console.log(Season(1));

//6. Day of Week
function DayofWeek(num){
    switch (num){
        case 1 :
            return "Sunday"
        case 2:
            return "Monday"
        case 3:
            return "tuesday"
        case 4:
            return "Wednesday"
        case 5:
            return "Thursday"
        case 6:
            return "Friday"
        case 7:
            return "Saturday"
        default:
            return "Its only have 1-7 days"
    }
}

function fnc1(word) {
  word = word.toLowerCase();
  vw = ["a", "e", "i", "o", "u"];
  count = 0;
  for (let i = 0; i < word.length; i++) {
    //ไม่ include ไม่ใช่ in
    if (vw.includes(word[i])) {
      count++;
    }
  }
  return count;
}

function fnc2(word) {
  keeper = "";
  for (let i = 0; i < word.length; i++) {
    if (keeper.includes(word[i]) == false) {
      keeper += word[i];
    }
  }
  return keeper;
}
console.log(fnc2("hello"));
console.log(false ? "Hello Naja" : "Hoola");
//null coalescing
console.log(null ?? "Hoola");
