function receivesAFunction(callback) {
    callback()
}
function returnsANamedFunction() {
    return function haveAName() {

    }
}
function returnsAnAnonymousFunction() {
    return function() {
        
    }
}