//c10_object.js

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);
let nestedArray = [1, [2, 3], [4, [5, 6]]];
let flatArray = nestedArray.flat();
console.log(flatArray);  // [1, 2, 3, 4, [5, 6]]

let text = "The rain in SPAIN stays mainly in the plain";
let result = text.match("ain");

console.log(result);  // ["rain", "ain", "SPAIN", "plain"]
