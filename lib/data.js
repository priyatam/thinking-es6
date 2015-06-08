import mori from 'mori'

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
