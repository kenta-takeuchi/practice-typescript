interface Human {
    name: string;
    age: number;
    greeting(message: string): void;
}

const human: Human = {
    name: 'test',
    age: 30,
    greeting(message: string) {
        console.log(message)
    }
}

class Developer implements Human {
    constructor(public name: string, public age: number) {}
    greeting(message: string) {
        console.log('test')
    }
}