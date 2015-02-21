import mori from 'mori'

const _ = mori
const inc = (x) => x+1

_.map(inc, _.vector(1,2,3,4,5)).toString()
