import * as call from './functions'
import * as sym from './symbols'
import * as data from './data'
import * as gen from './generators'
import * as itr from './iterators'

call.greeting()

data.save({data: [1, 2, 3], others: {} })
data.dump()

gen.generate()

for (const n of itr.fibonacci) {
  if (n > 1000)
    break;
  console.log(n);
}

export default {}
