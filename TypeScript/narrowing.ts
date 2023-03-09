// what is narrowing 
function display(value:number|string){
    // this is narrowing or type guards 
    if(typeof(value) == "string"){
        console.log("This is string");
        
    }
    else{
        console.log("This is number");
        
    }
}

display(300);