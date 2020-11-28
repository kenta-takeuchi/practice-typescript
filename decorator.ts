function Logging(message: string) {
    return function (constructor: Function) {
        console.log(message);
        console.log(constructor)
    }
}

function Component(template: string, selector: string) {
    return function<T extends { new(...args: any[]): {name: string} }> (constructor: T) {
        const mountedElement = document.querySelector(selector);
        const instance = new constructor();
        if (mountedElement) {
            mountedElement.innerHTML = template;
            mountedElement.querySelector('h1')!.textContent = instance.name;
        }
    }
}

@Component('<h1>{{ name }}</h1>', '#app')
@Logging('Logging User')
class User {
    name = 'Quill';
    constructor() {
        console.log('User was created')
    }
}

const user1 = new User()
