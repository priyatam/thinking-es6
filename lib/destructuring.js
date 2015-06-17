/*
 ES6 introduces a new syntax for destructuring an array or object,
 eliminating the need for temp variables. Destructuring is a general
 assignment operation, not just a declaration
 */

function foo() {
    return [1,2,3]
}

function bar() {
    return { x: 4, y: 5, z: 6 }
}

console.log("Destructuring an array")
var [a, b, c] = foo()
console.log(a, b, c)

console.log("destructuring an object")
var {x: x1, y: y1, z: z1} = bar()
console.log(x1, y1, z1)

console.log("Testing object destructuring")
function boo({x, y}) {
    console.log(x, y)
}

boo({ z: 3, y: 2, x: 1 } )
boo({ y: 2, x: 1 } )
boo({})

console.log("Testing array destructuring")
function moo([x, y]) {
    console.log(x, y)
}

moo([1, 2, 3])
moo([1])
moo([])

console.log("destructuring defaults + object params")
function loo({x = 1} = {}, {y} = {y: 2}) {
    console.log(x, y)
}

loo()
loo(undefined, undefined)
loo({}, undefined)
loo(undefined, {});
loo({}, {})
