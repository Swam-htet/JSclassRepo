// number 
var userAge = 21;
// string 
var userName = "Alphar";
// boolean 
var condi = true;
// array of some type 
var marks = [20, 30, 40, 50];
console.log("mark - 2", marks[0]);
// any
var asYouLike = 40;
asYouLike = "String";
// function 
function display(msg) {
    console.log("This is message", msg);
    return "return";
}
// function invokation 
display("20");
// object 
// automatically know type of object 
var personOne = {
    name: "Swam Htet",
    age: 20
};
// with type variable declarationg 
var student;
// assigning 
student = {
    name: "Someone",
    age: 20,
    grade: "Grade-1"
};
//union type 
var unionValue;
unionValue = 12;
var pointOne = {
    x: 20, y: 30
};
console.log("2D point >> ", pointOne);
// person 
var _personOne = {
    name: "Swam Htet",
    age: 21
};
// interface နဲ့ variable decleare ရင် _ဘာလို့ လိုနေတာလဲ ဆရာ 
// // worker 
// let _workerOne :Worker = {
//     name:"Swam Htet",
//     age:21,
//     job:"Developer"
// }
// enum 
var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["No"] = 0] = "No";
    UserResponse[UserResponse["Yes"] = 1] = "Yes";
})(UserResponse || (UserResponse = {}));
var res = UserResponse.Yes;
console.log("This is enum res >> ", res);
