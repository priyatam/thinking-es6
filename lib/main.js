import * as hello from './hello'
import * as sym from './symbols'
import * as data from './data'
import * as gen from './generators'
import * as api from './api'

hello.greeting()

data.save({data: [1, 2, 3], others: {} })
data.dump()

gen.generate()

api.load()
   .then(api.extractGifs)
   .then(api.displayGifs)

export default {}
