"use strict";
const addFunc = (n1, n2) => {
    return n1 + n2;
};
const human = {
    name: 'test',
    age: 30,
    greeting(message) {
        console.log(message);
    }
};
class Developer {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting(message) {
        console.log('test');
    }
}
const user = new Developer('Quill', 38);
