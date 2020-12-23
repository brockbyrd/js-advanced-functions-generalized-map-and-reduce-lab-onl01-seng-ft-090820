// Add your functions here

function map(src, cb) {
    return src.map(cb)
}

function reduce(src, cb, startingPoint){
    if (!!startingPoint === false){
        startingPoint = src.shift()
    }
    return src.reduce(cb, startingPoint)
}