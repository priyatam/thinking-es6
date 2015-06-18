import mori from 'mori'
import Immutable from 'immutable'

// Sets
console.log("Basic SET")
export const s = new Set()
s.add("hello")
 .add("goodbye")
 .add("hello")
 console.log(s)

// Weak Sets: object has no other refs, and will not be held in Set
let ws = new WeakSet()
ws.add({ data: 42 })

console.log("Basic Maps")
let m = new Map()
m.set("hello", 42)
m.set(s, 34)
m.get(s) == 34
console.log(m)


m.has('foo')
m.delete('hello')
m.has('foo')
console.log(m)

m.size
m.clear()
console.log(m.size)

// Maps, with an iterable
console.log("Iterating over a Map")
let itr_map = new Map([[1, 'one'],
                       [2, 'two'],
                       [3, 'three']])

for (let key of itr_map.keys()) {
    console.log(key)
}
for (let value of itr_map.values()) {
    console.log(value)
}

for (let [key, val] of itr_map.entries()) {
    console.log(key, val)
}

// Weak Maps
let wm = new WeakMap()
wm.set(s, {extra: 42})
wm.size === undefined

//  In general, use maps over objects when keys are unknown until run time, and
//  when all keys and values are the same type.

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

// Using Mori

const _ = mori
const inc = (x) => x+1
console.log('From Mori - ' +
            _.map(inc, _.vector(1,2,3,4,5)).toString())

// Using ImmutableJs

export const imm_map = Immutable.Map({a:1, b:2, c:3})

export const imm_oddSquares =
    Immutable.Seq.of(1,2,3,4,5,6,7,8)
    .filter(x => x % 2)
    .map(x => x * x)
