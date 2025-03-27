// TypeScript are interface base (Interface)

interface User {
    id : number;
    name  : string;
    email : string;
    password : string;
    role : string;
    imageUrl? : string // dont require (optional field)
}

//Generic type ก็คือ มันยังตรวจสอบอยู่เเหละ เเต่มันรองรับได้หลายค่า เเต่มันจะไม่ใช่dynamic เเค่เปลี่ยนรูปเเบบได้
interface Item<T> {
    id : number;
    product : T;
    quantity : number;
}
//เมื่อเรามี interface แล้ว เราสามารถใช้มันกำหนดโครงสร้างของ object ได้
const user : User = {
    id :  2,
    name : "pk",
    email : "baba@gmail.com",
    password : "123",
    role : "Frontend",
    imageUrl : "http://"
}

//or statement
const users:Array<User>= []
const usersmap : Map<number,User> = new Map();
console.log(usersmap);

//implement in function
function getUser(count:number): User[] {
    return users.slice(0,count)
}