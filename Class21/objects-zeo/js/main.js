//Create a stopwatch object that has four properties and three methods

let stopwatch = {}
stopwatch.currentTime = 12
stopwatch.time = 24
stopwatch.brans = 'Nike'
stopwatch.color = 'blue'

stopwatch.tellTime = function(time){
    console.log(`current time is ${time}`)
}

stopwatch.bip = function(){
    console.log('BIIIIIIP')
}

stopwatch.sayBrand = function(){
    console.log(stopwatch.brans)
}