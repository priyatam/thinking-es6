import * as call from './functions'
import * as sym from './symbols'
import * as data from './data'
import * as gen from './generators'

call.greeting()

data.save({data: [1, 2, 3], others: {} })
data.dump()

gen.generate()

export default {}
