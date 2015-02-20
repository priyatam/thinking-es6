let greetings = ['hello es6', 'goodbye coffeescript']

export function bootstrap() {
    return greetings.map(greet => console.log(greet))
}
