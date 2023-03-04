const call = require("./2 : node js module");
console.log("this is module object >> ", call);

// function 
const value = call.adding(20, 60);
console.log("This is call usage testing => ", value);

// const our_module = require('./node_m.js');
// our_module.api();


// object 
let personOne = call.personOne;
console.log("This is personOne ", personOne);
