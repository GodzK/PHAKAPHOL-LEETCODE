function fnc1(word){
    word = word.toLowerCase();
    vw = ['a','e','i','o','u'];
    count = 0;
    for(let i = 0; i < (word.length) ; i++){
        //ไม่ include ไม่ใช่ in
        if(vw.includes(word[i])){
            count++;
        }
        }
    return count;
}

function fnc2(word){
    keeper = "";
    for(let i = 0; i < word.length; i++){
        if(keeper.includes(word[i]) == false){
            keeper+= word[i];
        }
        
    }
    return keeper;
}
console.log(fnc2("hello"));