const fs = require("fs");

class IO {
    constructor(fn) {
        this.fn = fn;
    }
    run() {
        return this.fn();
    }

    map(fn) {
        return new IO(() => fn(this.run()))
    }

    bind(fn) {
        return new IO(() => fn(this.run()).run())
    }
}



function ioLog(message) {
    return new IO(() => console.log(message));
}
console.log("IO log output => " , ioLog("Hello world"));

function ioPure(value) {
    return new IO(() => value);
}
console.log("IO pure output => " , ioPure("This is IO pure"));

function ioPrompt(question) {
    return new IO(() => prompt(question))
}

let result = ioPure(5).map(x => x * 2).map(x => x + 1);
// .bind(x => ioPure(100).map(y => x + y)).bind(x => ioLog(x));
console.log("not run yet");
result.run();

// const readFile = (fileName) =>
//     new IO(() => fs.readFileSync(fileName))


// const program = readFile('meta.txt').bind(fileName => readFile(fileName)).map(content => content.toString().toUpperCase()).bind(ioLog);

// program.run();