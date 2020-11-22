function copy<T extends {name: string}, U extends keyof T>(value: T, key: U): T{
    const name = value[key];
    console.log(name);
    return value
}

console.log(copy({name: 'test'}, 'name'))

class LightDatabase<T extends string | number | boolean> {
    private data: T[] = [];
    add(item: T) {
        this.data.push(item)
    }
    remove(item: T) {
        this.data.splice(this.data.indexOf(item),1);
    }
    get() {
        return this.data;
    }
}
const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add('apple')
stringLightDatabase.add('banana')
stringLightDatabase.add('grape')
stringLightDatabase.remove('banana')
console.log(stringLightDatabase.get())

type mappedType = {
    [P in 'tomato' | 'pumpkin']: string
}