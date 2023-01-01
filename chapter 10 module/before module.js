+ function () {

    if (window.myModule) {
        return;
    }

    // private not to add window object
    function privateFunction() {
        console.log("This is private function");
    }

    console.log("This is module .js .");

    // two functions to add into the window object with object
    function one() {
        console.log("Function one");
    }

    function two() {
        console.log("function two");
    }

    // add to the window object
    window.myModule = window.myModule || {
        one,
        two
    }


}()