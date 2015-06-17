import * as poly from 'babel/polyfill'
import * as call from './functions'
import * as sym from './symbols'
import * as data from './data'
import * as gen from './generators'
import * as itr from './iterators'
import * as p from './promises'
import * as api from './api'
import * as destruct from './destructuring'

//console.log('From ImmutableJs - ' + data.imm_map.get('b'))
//console.log('From ImmutableJs - ' + data.imm_oddSquares.get(1))

//call.greeting()
//data.save({data: [1, 2, 3], others: {} })
//data.dump()

//gen.generate()

//itr.print_fibonacci(itr.fibonacci)

p.timeout(1000).then(() => {
    return p.timeout(2000);
}).then(() => {
    throw new Error("hmm");
}).catch(err => {
    return Promise.all([p.timeout(100), p.timeout(200)]);
})

/*
 api.load()
 .then(api.extractGifs)
 .then(api.displayGifs)
 */

export default {}
