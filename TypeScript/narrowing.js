// what is narrowing 
function display(value) {
    // this is narrowing or type guest 
    if (typeof (value) == "string") {
        console.log("This is string");
    }
    else {
        console.log("This is number");
    }
}
display(300);
