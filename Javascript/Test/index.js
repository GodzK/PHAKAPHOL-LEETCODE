// โจทย์ 1: Reverse a String
function reverseString(str) {
    let ans = "";
    for(let i = str.length - 1 ; i >= 0 ; i--){
        ans += str[i];
    }
    return ans;
}
console.log(reverseString("hello"));

// โจทย์ 2: Capitalize First Letter of Each Word
function CapitalizeFirstLetter(word){
    let wordlowercase = word.toLowerCase()
    let wordsplit = wordlowercase.split(" ")
    for (let i = 0; i < wordsplit.length; i++) {
        wordsplit[i] = wordsplit[i][0].toUpperCase() + wordsplit[i].slice(1)
    }
    return wordsplit.join(" ")
}
console.log(CapitalizeFirstLetter("this Will Show upperCase"));

//โจทย์ 3: Find the Longest Word
function FindTheLongest(word){
    let wordsplit = word.split(" ")
    let longest = ""
    console.log(wordsplit[1].length);
    for (let i = 0; i < wordsplit.length; i++) {
        if(wordsplit[i].length > longest.length){
            longest = wordsplit[i]
        }
    }return longest
}
console.log(FindTheLongest("I love programming"));

//โจทย์ 4: Count Vowels in a String หา a e i o u 
function CountVovel(params) {
    let counter = 0
    const vovel = ["a" , "e" , "i" , "o" , "u"]
    for (let i = 0; i < params.length; i++) {
        if(vovel.includes(params[i])){
            counter += 1
        }
        
    }return counter
}
console.log(CountVovel("Hello"));

//โจทย์ 5: Remove Duplicates from a String

function removeDuplicate(word){
    let checker = ""
    for (let i = 0; i < word.length; i++) {
        if(checker.includes(word[i]) == false){
            checker += word[i]
        }  
    }return checker
}
console.log(removeDuplicate("aabbcc"));

//โจทย์ 6: Check for Palindrome
function palindrome(word) {
    word.toLowerCase()
    let palindrome = ""
    for (let i = word.length - 1; i >= 0; i--) {
        palindrome += word[i]
    }
    if (palindrome == word) {
        return true
    }
    return false
}
console.log(palindrome("racecar"));

//โจทย์ 7: Remove a Specific Character from a String
function removeSpecific(word , remove){
    return (word.replace(remove, ""))
}
console.log(removeSpecific("Hello World","e"));

//โจทย์ 8: Repeat a String n Times
function repeatStr(str,n) {
    ans = ""
    for (let i = 0; i < n; i++) {
        ans += str
    }
    return ans
}
console.log(repeatStr("Hel",3));

//โจทย์ 9: Replace Words in a Sentence
function replaceWord(sentence , word , changeword){
    splitsen = sentence.split(" ")
    for (let i = 0; i < splitsen.length; i++) {
        if(splitsen[i] == word){
            splitsen[i] = changeword
        }
        
    }return splitsen.join(" ")
}
console.log(replaceWord("I Love KriengKrai" , "Love" , "Hate"));

// โจทย์ 10: Remove Spaces from a String
function removespace(word){
    return word.split(" ").join("")
}
console.log(removespace("  JavaScript  is   fun "));


// Splice Slice Practice
//Slice
function ExtractSubstring(word,start,end) {
    return (word.slice(start,end))
}
console.log(ExtractSubstring("hello world", 6, 11));

//Splice
function spliceTest(arr,index,numToRemove,newElement) {
    console.log(`ค่าเก่า ${arr}`);
    const deletetext = arr.splice(index,numToRemove,newElement)
    console.log(`ค่าเก่า หลัง splice ${arr}`);
    console.log(`ค่าที่โดนลบ ${deletetext}`);
    return arr
}
console.log(spliceTest([1, 2, 3, 4, 5], 2, 1, 99));