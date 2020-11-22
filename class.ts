class Person {
    constructor(
        private name: string,
        private age: number
    ) {}

    incrementAge() {
        this.age += 1;
    }

    greeting(this: Person) {
        console.log(`Hello My name is ${this.name}. I am ${this.age} years old`)
    }
}

const quill = new Person('Quill', 30)
quill.greeting();
quill.incrementAge()
console.log(quill)
