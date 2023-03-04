function adding(a, b) {
  return a + b;
}

// exports function
exports.adding = adding;

// function api() {
//     console.log('Api');
// }
// exports.api = api;

// exports object
let personOne = {
  name: "Swam Htet",
  age: 21,
  job: "Developer",
  work() {
    console.log(`Name : ${this.name}, age ${this.age}, job :${this.job}`);
  },
};

exports.personOne = personOne;
