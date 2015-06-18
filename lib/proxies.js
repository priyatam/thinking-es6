let obj = { a: 1 },
    handlers = {
        get(target,key,context) {
            // note: target === obj, context === pobj
            console.log( "accessing: ", key );
            return Reflect.get(
                target, key, context
            )
        }
    },
    pobj = new Proxy( obj, handlers )

obj.a

pobj.a
