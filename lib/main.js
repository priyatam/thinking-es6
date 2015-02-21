import * as hello from './hello'
import * as api from './api'
import * as db from './db'
import * as data from './data'

hello.greeting()

api.load()
   .then(api.extractGifs)
   .then(api.displayGifs)

db.save({data: [1, 2, 3], others: {} })

db.dump()

export default {}
