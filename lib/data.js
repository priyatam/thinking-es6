import mori from 'mori'
import Immutable from 'immutable'

// Sets
export const myset = new Set()
myset.add("hello")
    .add("goodbye")
    .add("hello")

// Weak Sets: object has no other refs, and will not be held in Set
let ws = new WeakSet()
ws.add({ data: 42 })

// Maps
let m = new Map()
m.set("hello", 42)
m.set(myset, 34)
m.get(myset) == 34

// Weak Maps
let wm = new WeakMap()
wm.set(myset, { extra: 42 })
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

const map1 = Immutable.Map({a:1, b:2, c:3})
console.log('From ImmutableJs - ' + map1.get('b'))

const oddSquares =
          Immutable.Seq.of(1,2,3,4,5,6,7,8)
          .filter(x => x % 2)
          .map(x => x * x)
console.log(oddSquares.get(1))
