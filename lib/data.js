import mori from 'mori'
import Immutable from 'immutable'

// Using Mori

const _ = mori
const inc = (x) => x+1

console.log('From Mori - ' + _.map(inc, _.vector(1,2,3,4,5)).toString())

// Using ImmutableJs

const map1 = Immutable.Map({a:1, b:2, c:3})
const map2 = map1.set('b', 50)
console.log('From ImmutableJs - ' + map1.get('b'))
console.log('From ImmutableJs - ' + map2.get('b'))
