//ข้อ 1
function reverseWords(sentence) {
    return sentence.split(" ").map(word => word.split("").reverse().join("")).join(" ");
}
console.log(reverseWords("Hello World"));

//ข้อ 2
function isAnagram(str1, str2) {
    return str1.toLowerCase().split("").sort().join("") === str2.toLowerCase().split("").sort().join("");
}
console.log(isAnagram("listen", "silent")); 
console.log(isAnagram("hello", "world")); 

//ข้อ 3
function mostFrequentChar(str) {
    let freq = {};
    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }
    return Object.keys(freq).reduce((a, b) => (freq[a] > freq[b] ? a : b));
}
console.log(mostFrequentChar("banana")); 

//ข้อ 4
function isRotation(str1, str2) {
    return str1.length === str2.length && (str1 + str1).includes(str2);
}
console.log(isRotation("abcd", "dabc")); 
console.log(isRotation("abcd", "dbac")); 

//ข้อ 5
function toCamelCase(sentence) {
    return sentence.split(" ").map((word, i) => 
        i === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1).toLowerCase()
    ).join("");
}
console.log(toCamelCase("hello world example")); 

//ข้อ 6
function longestPalindrome(str) {
    let longest = "";
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            let sub = str.slice(i, j + 1);
            if (sub === sub.split("").reverse().join("") && sub.length > longest.length) {
                longest = sub;
            }
        }
    }
    return longest;
}
console.log(longestPalindrome("babad")); 

//ข้อ 7
function countOccurrences(str, sub) {
    let count = 0, pos = 0;
    while ((pos = str.indexOf(sub, pos)) !== -1) {
        count++;
        pos += sub.length;
    }
    return count;
}
console.log(countOccurrences("banana", "ana"));

//ข้อ 8
function removeNonAlphaNumeric(str) {
    return str.replace(/[^a-zA-Z0-9]/g, "");
}
console.log(removeNonAlphaNumeric("Hello, World! 123"));

//ข้อ 9
function shortestUniquePrefixes(words) {
    let prefixes = {};
    words.forEach(word => {
        for (let i = 1; i <= word.length; i++) {
            let prefix = word.slice(0, i);
            if (!prefixes[prefix]) prefixes[prefix] = word;
            else prefixes[prefix] = null;
        }
    });
    return words.map(word => Object.keys(prefixes).find(p => prefixes[p] === word));
}
console.log(shortestUniquePrefixes(["dog", "dove", "duck"]));

//ข้อ 10
function runLengthEncoding(str) {
    return str.replace(/(.)\1*/g, (match, char) => char + match.length);
}
console.log(runLengthEncoding("aaabbcddd"));
