"use strict";
function copy(value, key) {
    const name = value[key];
    console.log(name);
    return value;
}
console.log(copy({ name: 'test' }, 'name'));
