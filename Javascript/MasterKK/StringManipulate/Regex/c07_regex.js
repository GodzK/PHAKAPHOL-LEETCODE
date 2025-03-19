// Regular Expression สำหรับการ Process Text

function create() {
  let t = "Hello World";
  let pattern = /World/gi
  /* การใช้ /pattern/flags (Literal Notation) */
  /* Flag  
    g	ค้นหาทุกที่ (global search)
    i	ไม่สนตัวพิมพ์เล็ก-ใหญ่ (case insensitive)
    m	ค้นหาหลายบรรทัด (multi-line)
    s	ทำให้ . ตรงกับ newline (\n) ได้
    u	รองรับ Unicode
    y	ค้นหาแบบ sticky (เริ่มจากตำแหน่งปัจจุบัน)*/
    console.log("-----START FUNCTION------");
  console.log("Find Matching Word : ",t.match(/World/g));//word/condition
  //test ว่ามี "check" ใน regexมั้ย
  console.log(".test() regex : ",pattern.test("World"));//true
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
}

create();
