
//  Symbols are fundamental building blocks in functional languages like Lisp.
//  Deriving an identity with a Symbol is more precise than, say, a String. Symbols
//  are a great fit for keys in maps, Enum-style constaints, meta-level keys in objects */

// Enums
const COLOR_RED = Symbol()
const COLOR_ORANGE = Symbol()

// Obj Keys
const obj = {}
obj[COLOR_RED] = 'reddish'
obj[COLOR_ORANGE] = 'orange-blue'
console.log(obj[COLOR_RED])

// Map keys
console.log("Symbols in Map")
const m = new Map()
m.set(COLOR_RED, ['dn', 'ja', 'ph'])
console.log(m.get(COLOR_RED))
