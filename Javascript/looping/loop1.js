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

console.log(captalizefirst("hEllo world"));