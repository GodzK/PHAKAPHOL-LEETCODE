// Regular Expression

function create(){
    let t = "this is String from checking regular expression"
    let r = /expression/i //มันมีinมั้ย ไม่สนใจตัวใหญ่ตัวเล็ก
    console.log("text : " , t);
    console.log("regex.source: " , r.source);
    console.log("regex.flags" , r.flags);
    console.log(`Type of Regex r : `, typeof(r));
    console.log(`test : `, r.test(t));

}

create()


