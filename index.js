function spy(){
    console.log('You are going to be a Russian spy!')
}
function receivesAFunction(callback){
    return callback()
}
receivesAFunction(spy)

function returnsANamedFunction(){
    return spy
}

function returnsAnAnonymousFunction(){
    return (function(){return "Anonymous"})
}