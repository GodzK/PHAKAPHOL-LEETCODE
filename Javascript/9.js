// 9. Palindrome Number
// Given an integer x, return true if x is a palindrome, and false otherwise.
var isPalindrome = function(x) {
    txtstr = x.toString();
    contxt = '';
    num = txtstr.length;
    for(let i = num - 1  ; i >= 0; i--){
        contxt += txtstr[i];
    }
    if(contxt == txtstr){
        return true;
    }
    else{
        return false;
    }
};

// console.log(isPalindrome(121));