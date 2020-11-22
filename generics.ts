function copy<T extends {name: string}, U extends keyof T>(value: T, key: U): T{
    const name = value[key];
    console.log(name);
    return value
}

console.log(copy({name: 'test'}, 'name'))
