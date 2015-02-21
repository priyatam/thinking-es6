
/* 
  Maps: Use maps over objects when keys are unknown until run time, and when all keys 
  are the same type and all values are the same type. */

const database = new Map()

export function save({data: x}) {
    console.log(x)
    database.set(x)
}

export function dump() {
    for (var key of database.keys()) {
        console.log ('item - ' + key)
    }
}

/* 
  Symbols are fundamental building blocks in functional languages like Lisp.
  Deriving an identity with a Symbol is more precise than, say, a String. Symbols
  are a great fit for keys in maps, Enum-style constaints, meta-level keys in objects */

// as Enums
const COLOR_RED    = Symbol();
const COLOR_ORANGE = Symbol();

// in Obj Keys
const KEY = Symbol();
let obj = {};
obj[KEY] = 123;
console.log(obj[KEY]);

// in Maps 

let m = new Map()
m.set(COLOR_RED, ['dn', 'ja', 'ph'])
m.set(KEY, {items: 4, next: 3})

console.log(m.get(KEY))
