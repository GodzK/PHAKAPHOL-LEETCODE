// Regular Expression สำหรับการ Process Text

function rest(p, a) {
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];
  let word = "WORLD"
  // . . . เก็บใน rest
  let [first , ...rest] = [10,20,30,40]
  console.log("-----START SPREAD------");
  console.log("The combination of arr1 and arr2 : ",[...arr1, ...arr2]);
  console.log("SPREAD THE WORLD : " , ...word);
  console.log(`This is the first data ${first} this is the rest ${rest}`);
}

function regex() {
  let t = "Hello World aeiou";
  let pattern = /World/gi;
  let aeioupat = /[aeiou]/g;
  let existword = /(head|shoulder|knee)/g
  /* Trick การใช้ /pattern/flags
  /* Flag  
    g	ค้นหาทุกที่ (global search)
    i	ไม่สนตัวพิมพ์เล็ก-ใหญ่ (case insensitive)
    m	ค้นหาหลายบรรทัด (multi-line)
    s	ทำให้ . ตรงกับ newline (\n) ได้
    u	รองรับ Unicode
    y	ค้นหาแบบ sticky (เริ่มจากตำแหน่งปัจจุบัน)*/
  console.log("-----START REGEX------");
  console.log("Find Matching Word : ", t.match(/world/gi)); //word/condition
  //test ว่ามี "check" ใน regexมั้ย
  console.log(".test() regex : ", pattern.test("World")); //true
  console.log("Finding [A,E,I,O,U] pattern : ", t.match(aeioupat));
  console.log("คำต้องห้าม  : " , existword.test("head"));
}

/*  ^ Start of the string.  */
function isValidEmail(email) {
    // ถ้าไม่มีการกำหนดlength ก็ใช้ + ได้หลังจาก [a-z] \. = ต้องเป็นจุดจริงๆ  $ = ต้องไม่มีตัวต่อท้าย
    let emailPattern = /^[a-zA-Z0-9]{6,}@gmail\.com$/;
        console.log("valid Email : ", emailPattern.test(email) );   
}
function isValidPassword(password) {
    let passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    console.log("This Pass world is Strong ? : " , passwordPattern.test(password)); 
}
rest();
regex();
//valid email
isValidEmail("phakaphol@gmail.com")
isValidPassword("StrongP@ss1"); 
const arr = ["hello",1,2]
const obj = {
    name : "phakaphol",
    age : 20,
    role : "Frontend"
}

console.log("Type of",arr, typeof ["hello"]);
console.log("is",arr, " is Array ?",Array.isArray(arr));
console.log("Type of",obj, typeof ["hello"]);
console.log("is",obj, " is Array ?",Array.isArray(arr));

