// Master KK String Manipulations

function misc(){
    let str = "This is my String"
    let st2 = "This is another String"
    str += st2
    // console.log(str.at(0));
    // console.log(str);
}
misc()

function manipulate(){
    console.log(`----------String Manipulate----------`);
    let str = "Phakaphol Teerachaisuphakij"
    console.log("String Extract");
    console.log(`str at 0 3 100 -2 is :  ${str[0]} , ${str[3]} , ${str[100]} , ${str[-2]}  ,`) //เกินหรือไม่ตรง บอก undefine
    console.log(`str at 0 3 100 -2 is :  ${str.charAt(0)} , ${str.charAt(3)} , ${str.charAt(100)} , ${str.charAt(-2)}`) // ไม่โง่ เเค่ไม่รู้ (ไม่ยอมรับว่าไม่เห็น)
    console.log(`str at 0 3 100 -2 is :  ${str.at(0)} , ${str.at(3)} , ${str.at(100)} , ${str.at(-2)}`) // ถ้าเกินบอกundefine เเต่ถ้ายังลบ เเล้วตรง บอกค่าได้
   
    console.log("--------Substring------------");
    console.log(`str[2,5] ${str[2]} , ${str[6]}`);
    console.log(`Want three Charactor  Name : ${str.substring(0,3)}`);//Three Charactor
}

manipulate();

function trim(){
    console.log(`--------------Trim------------`);
     let str = "    Phakaphol Teerachaisuphakij   "
    console.log(`Trim : ${str.trim(" ")}`);
}
trim();

function search() {
    console.log(`--------------Search-------------`);
    let str = "Phakaphol Teerachaisuphakij"
    console.log(`startwith : ${str.startsWith("Phak")}`);
    console.log(`end with : ${str.endsWith("kij")}`);//ตัวท้าย
    console.log(`include : ${str.includes("Tee")}`);
    console.log(`indexof : ${str.indexOf("P")}`);//Case Sensitive
}
search()