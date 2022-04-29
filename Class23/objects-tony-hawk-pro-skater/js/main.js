//Create a Tony Hawk Pro Skater constructor that makes skating game characters with 4 properties and 3 methods

// function ProSkater(sex, board, trick, speed){
//     this.sec = sex
//     this.board = board
//     this.trick = trick
//     this.speed = speed

//     this.doTrick = function(){
//         console.log(`I'm doing ${this.trick}!`)
//     }
//     this.increaseSpeed = function(increase){
//         console.log(`Increase ${this.speed} by ${increase}. Now I am at ${this.speed + increase} kmh`)
//     }
//     this.changeBoard = function(){
//         console.log(`Changing board to ${this.board}`)
//     }
// };

//class
class ProSkater{
    constructor(sex, board, trick, speed){
    this.sec = sex
    this.board = board
    this.trick = trick
    this.speed = speed
    }
    doTrick = function(){
        console.log(`I'm doing ${this.trick}!`)
    }
    increaseSpeed = function(increase){
        console.log(`Increase ${this.speed} by ${increase}. Now I am at ${this.speed + increase} kmh`)
    }
    changeBoard = function(){
        console.log(`Changing board to ${this.board}`)
    }
};

let tonyHawk = new ProSkater('male','best', 'ollie', 15)
tonyHawk.increaseSpeed(20)

ProSkater.prototype.helmet = true

console.log(tonyHawk.helmet)