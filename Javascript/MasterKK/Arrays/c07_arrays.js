//Array Week 7 & Week 8
//Array ถ้าตาม Fundamental Array คือ พื้นที่ในmemoryที่มีขนาด คงที่ เเละ ตายตัว
//Array ในJS มันคือ List ใน Python
//1. Homogeneous   หมายถึง ชุดข้อมูล ที่มี ประเภทเดียวกัน  อาร์เรย์ของจำนวนเต็มเช่น ([1, 2, 3, 4])
//2. Heterogeneous หมายถึง ชุดข้อมูล ที่มี ประเภทหรือชนิดข้อมูลต่างกัน การใช้ลิสต์ที่มีทั้ง ตัวเลข และ สตริง เช่น  ([1, "hello", 3.14, True])
let txt = "Hello";
console.log(txt.indexOf("ello")); // 1 เพราะ นับจาก ตัวเเรกของมัน
function create() {
  console.log("---- Create ----");
  let arr1 = [10, "two", false, null, "two"]; // literal
  console.log(arr1);
  let arr2 = new Array(5, 6, 7); // initialization ใส่ตัวเดียวเป็นempty
  let arr3 = new Array(3); //มีตัวเดียวจะกำหนด ขนาดเเทน
  console.log(
    `new ใน Array มีหลายตัวจะมีค่า [${arr2}] เเละ arr ตัวเดียว [${arr3}]`
  );
  console.log("--SIZE--");
  for (let i of arr3) {
    console.log(i);
  }
  console.log("--END SIZE--");
  console.log(typeof arr1); //เป็นobject
  console.log(Array.isArray(arr1)); //เเละก็เป็นArrayด้วย
  console.log(arr1.at(-4)); //Access ได้
  console.log(`arr1[-1] = ${arr1[-1]} # มันหาไม่เจอถ้าไม่ใช้at `); //ไม่เจอเพราะมันมีsize 5
}
create();

function asStackAndQueue() {
  let arr = [10, "two", false, null, "two"];
  let arr1 = [1, 2, 3];
  // ตัดออกมา เเต่ข้อมูลเดิมไม่เปลี่ยน
  let slice = arr.slice(2, 4);
  console.log("Slice ตัดออกมาข้อมูลเดิมไม่เปลี่ยน : ", slice);
  console.log(`arr before reverse : [${arr}]`);
  console.log(`arr after reverse : [${arr.reverse()}]`);
  console.log(`arr after sorted : [${arr.sort()}]`);
  a = "Final";
  arr.push(a); // add final
  console.log(arr, `${a} is added`);
  //ตัดออกมา ข้อมูลเดิมเปลี่ยน
  let tosplice = arr.toSpliced(2, 3, "Hello");
  console.log(`tosplice  [${tosplice}]`);
  let splice = arr.splice(2, 4);
  console.log("นี่คือ Array หลังโดน splice: ", arr, "เเละค่าตัวมันคือ", splice);
  //nested arrays
  let nested = [10, 20, [30, 40], 50, [60, [70, 80]], 90, 100];
  console.log(`nested :`, nested);
  console.log(`unnested(1) flatออก 1 ชั้น :`, nested.flat(1));
  let arr2 = [...arr1];
  console.log("spreading of arr1 : ", arr2);
  let word = "hello";
  let letters = [...word];
  console.log(letters); // ['h', 'e', 'l', 'l', 'o']
}
asStackAndQueue();




//Master KK notes
//c08_arrays_continued.js

function p(...a) { console.log(...a) }

function creating() {
    let ar1 = [10, "two", false, 20, null, "two"] // literal
    let ar2 = new Array("X", "y", undefined)      // object initialization
    let ar3 = Array(2)             // array of size 2
    let ar4 = Array.of(5)          // array containing 1 element (i.e., 5) 
    let ar5 = Array.of(7, "seven") // array containing 2 elements 
    let ar6 = Array.from("hello")  // can be from any iterable
    p(ar1)
    p(ar2)
    p("1---")
    for (const e of ar3) { p(e) }
    p("2---fill with 9")
    ar3.fill(9)
    for (const e of ar3) { p(e) }
    p("3---for of -> modified output")
    for (let e of ar3) { e++; p(e) }
    p("4---unchanged")
    for (const e of ar3) { p(e) } // unchanged
    p("5---for index -> modified content")
    for (let i = 0; i < ar3.length; i++) {  ar3[i]++; p(ar3[i]) } // changable
    p("6---changed")
    for (const e of ar3) { p(e) } // changed
    p("7---")
    p(ar4)
    p(ar5)
    p(ar6)
}

function typeChecking() {
    let ar = [10, undefined, null, Infinity, NaN, "", "last"]
    p(ar)
    p(typeof ar)
    p(Array.isArray(ar))
    p(ar instanceof Array)
    p(ar.constructor === Array)
}

function accessing() {
    let ar = [10, undefined, null, Infinity, NaN, "", "last"]
    p("ar:", ar)
    p("ar[0]:", ar[0])
    p("ar[-1]:", ar[-1]) // undefined
    p("ar[20]:", ar[20]) // undefined
    p("ar.at(0):", ar.at(0))
    p("ar.at(-1):", ar.at(-1)) // from the back
    p("ar.at(20):", ar.at(20)) // undefined
}

function asStackAndQueue() {
    let ar = [10, undefined, null, Infinity, NaN, "", "last"]
    p(`ar: [${ar}], length: ${ar.length}`)
    ar.push("final")
    p(`after push 'final', ar: [${ar}], length: ${ar.length}`)
    let popped = ar.pop()
    p(`after pop, ar: [${ar}], length: ${ar.length}, popped: ${popped}`)

    ar.unshift("front")
    p(`after unshift 'front', ar: [${ar}], length: ${ar.length}`)
    let front = ar.shift()
    p(`after shift, ar: [${ar}], length: ${ar.length}, shifted: ${front}`)

    // stack --- push(item) and pop() -or- unshift(item) and shift()
    // queue --- push(item) and shift() -or- unshift(item) and pop()
}

function maniputing() {
    let ar = [10, 9, 100, -Infinity, 50, Infinity, NaN, 80]
    p(`ar: [${ar}], length: ${ar.length}`)
    p()
    let toSpliced = ar.toSpliced(2,3,"FIRST","SECOND")
    p(`after toSplicing(2,3,"1st","2nd"), ar: [${ar}] (unchanged), length: ${ar.length}`)
    p(`toSpliced: [${toSpliced}]`)
    p()
    let spliced = ar.splice(2,3,"FIRST","SECOND")
    p(`after splicing(2,3,"1st","2nd"), ar: [${ar}], length: ${ar.length}`)
    p(`spliced: [${spliced}]`)
    p()
    let sliced = ar.slice(2,-2)
    p(`after slicing(2,-2), ar: [${ar}] (unchanged), length: ${ar.length}`)
    p(`sliced: [${sliced}]`)
    p()
    ar.reverse()
    p(`after reversing, ar: [${ar}], length: ${ar.length}`)
    p()
    let sorted = ar.toSorted()
    p(`after toSorting, ar: [${ar}] (unchanged), length: ${ar.length}`)
    p(`toSorted: [${sorted}]`)
    p()
    ar.sort()
    p(`after sorting, ar: [${ar}], length: ${ar.length}`)
    p()
    let nested = [10, 20, [30, 40], 50, [60, [70, 80], 90], 100]
    p("nested:", nested)
    p("unnested:", nested.flat(1))
    p("nested (unchanged):", nested)
    p()
    let a1 = [10,20,30]
    let a2 = ["x","y","z"]
    p("a1:", a1, ", a2:", a2)

    let a3 = a1.concat(a2)
    p("after a1.concat(a2)")
    p("a1:", a1, ", a2:", a2, ", a3:", a3)

    let a4 = [a1, a2]
    p("a4 = [a1,a2]")
    p("a4:", a4)

    let a5 =[...a1,...a2] // ... spreading
    p("a5 = [...a1,...a2]")
    p("a5:", a5)

    let [a6, a7, ...a8] = a5 // ... the rest // destructure
    p("[a6, a7, ...a8] = a5")
    p("a6:", a6, ", a7:", a7, ", a8:", a8)

    let [a9, a10] = a8 // destructure
    p("[a9, a10] = a8")
    p("a9:", a9, ", a10:", a10)

    p("a1:",a1, ", a4:", a4, ",a5:", a5)
    a1[0] = 1000
    p("a1[0] = 1000")
    p("a1:",a1, ", a4:", a4, ",a5:", a5)
}

function searching() {
    //includes,indexOf,lastIndexOf
}

creating()
//typeChecking()
//accessing()
//asStackAndQueue()
//maniputing()
//searching()
//functional()
//converting()

/*
//6 searching
p(ar1.includes("two"))
p(ar1.indexOf("two"))
p(ar1.lastIndexOf("two"))

//7 functional
p(ar1.find(x => x > 2))
p(ar1.findIndex(x => x > 2))
ar1.forEach((v, i) => p(i, v))
let mapped = ar1.map(x => x * 2)
let filtered = ar1.filter(x => x > 2)
let reduced = ar1.reduce((sum, x) => sum + x, 0)

//9 converting arrays
p(ar1.join("-"))
p(ar1.toString())
*/
 