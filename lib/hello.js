import mori from 'mori'

const _ = mori
const inc = (x) => x+1

export function greeting() {
    const greetings = ['hello es6', 'goodbye coffeescript', 'welcome clojurescript']
    return greetings.map(greet => {
        console.log(greet + _.map(inc, _.vector(1,2,3,4,5)).toString())
    })
}
