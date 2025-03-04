// String Method
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let txt2 = "1234567890";
let txt3 = "      Hello World!      ";
console.log(txt.length);
console.log(txt.charAt(0));
console.log(txt.at(0));//allow to negative index
console.log(txt[0]);
console.log(txt.charCodeAt(0));//utf-16 code
console.log(txt.concat(" and ",txt2));
console.log(txt.includes("A"));// A!=a
console.log(txt.slice(1,3));
console.log(txt.substring(1,3));
console.log(txt.indexOf("A"));
console.log(txt.toLowerCase());
console.log(txt.toUpperCase());

console.log(txt3.trim());
