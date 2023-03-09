// number 
let userAge:number = 21;

// string 
let userName: string = "Alphar";

// boolean 
let condi:boolean = true;

// array of some type 
let marks :Array<number> = [20,30,40,50];

console.log("mark - 2", marks[0]);

// any
let asYouLike: any = 40;
asYouLike = "String";


// function 
function display(msg:string):string{
    console.log("This is message",msg);
    return "return";
    
}
// function invokation 
display("20");


// object 
// automatically know type of object 
let personOne ={
    name :"Swam Htet",
    age: 20,
}

// with type variable declarationg 
let student :{
    name:string;
    age:number;
    grade: string;
} ;

// assigning 
student = {
    name:"Someone",
    age:20,
    grade: "Grade-1"

}


//union type 
let unionValue : 30 | "hello" | 12;
unionValue = 12 ;

// Type Aliases
type Point2D = {
    x : number;
    y : number;
}

let pointOne:Point2D={
    x: 20, y: 30
}
console.log("2D point >> ", pointOne);

// interface 
interface Person{
    name:string;
    age:number;
}

// interface extends 
interface Worker extends Person{
    job :string;
}

// person 
let _personOne:Person = {
    name:"Swam Htet",
    age : 21
}

// interface နဲ့ variable decleare ရင် _ဘာလို့ လိုနေတာလဲ ဆရာ 

// // worker 
// let _workerOne :Worker = {
//     name:"Swam Htet",
//     age:21,
//     job:"Developer"
// }

// enum 
enum UserResponse {
  No = 0,
  Yes = 1,
}

let res : UserResponse = UserResponse.Yes;
console.log("This is enum res >> ", res);




