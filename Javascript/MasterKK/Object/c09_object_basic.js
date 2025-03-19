// c09_object_basic.js

function creation(){
    let o = {}
    let profile = {
        name : 'phakaphol',
        lastname : "dherachaisuphakij",
        role : null,
    }

    let a = []
    console.log("-----Start Testing Object-----");
    console.log("Check type of {} : ", typeof o);
    console.log("Check type of [] : ", typeof a);
    console.log("สรุป : Array คือ Object ชนิดนึง");
    console.log("Profile Before Add and make a new Data : ",profile);
    profile.role = "Frontend"
    profile.gender = "male" // add โต้งๆ ไม่ต้องมีtemplate
    console.log(profile.notindata);//จะขึ้น null เพราะไม่มีข้อมูล
    console.log("Profile Added : ",profile);
    console.log("-----END Testing Object-----");
}

creation()