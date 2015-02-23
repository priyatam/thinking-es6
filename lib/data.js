import mori from 'mori'
import Immutable from 'immutable'

//  Maps: Use maps over objects when keys are unknown until run time, and when all keys
//  are the same type and all values are the same type.

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

console.log('From Mori - ' + _.map(inc, _.vector(1,2,3,4,5)).toString())

// Using ImmutableJs

const map1 = Immutable.Map({a:1, b:2, c:3})
const map2 = map1.set('b', 50)
console.log('From ImmutableJs - ' + map1.get('b'))

const oddSquares =
          Immutable.Seq.of(1,2,3,4,5,6,7,8)
          .filter(x => x % 2)
          .map(x => x * x)
console.log(oddSquares.get(1))