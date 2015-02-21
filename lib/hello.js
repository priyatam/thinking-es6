
export function greeting() {
    const greetings = ['hello es6', 'goodbye coffeescript', 'welcome clojurescript']
    return greetings.map(greet => {
        console.log(greet)
    })
}
