//Tutor  Int141 Quiz

//1. Do-While loop
function GenerateRandom(nums){
    do{
       data = Math.floor(Math.random() * 10)
       //ทำก่อน ต่อให้มันตรงเเต่stateนั้นมันยังไม่ตรง
       console.log(`data ไม่ตรง ${data}`);
    }
    while(data !== nums);
    return `เจอเเล้ว ตรงจนได้ ${nums}`
}
//2. Factorial Number
function Factorial(nums){
    let val = 1

    for(i = nums ; i > 0 ; i--){
        val *= i
    }
    return val  
}

//3. isPrime number
function CheckPrime(nums){
    for(let i = 1 ; i < nums ; i++){
        if (nums % i == 0 && (i !== 1 && i !== nums)){
            return "not prime"
        }
        console.log(i);
    }
    return `${nums} is Prime Number`
}

function reverse(str){ 
    words = str.split(" ");
    ans = ""
    for(let i = words.length-1; i >= 0; i--){
        ans += words[i] + " ";
    }
    return ans
}
function captalizefirst(str){
   words = str.split(" ");
   for(i in words){
    words[i] = words[i].toLowerCase();
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
   }
   return words
}
