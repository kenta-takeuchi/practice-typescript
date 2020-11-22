interface addFunc {
    (num1: number, num2: number): number;
}

const addFunc:addFunc = (n1: number, n2:number): number => {
    return n1 + n2
}

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

const user: Human = new Developer('Quill', 38)
