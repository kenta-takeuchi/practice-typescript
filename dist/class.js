"use strict";
class Person {
    constructor(initName, initAge) {
        this.name = initName;
        this.age = initAge;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`Hello My name is ${this.name}. I am ${this.age} years old`);
    }
}
const quill = new Person('Quill', 30);
quill.greeting();
quill.incrementAge();
console.log(quill);
