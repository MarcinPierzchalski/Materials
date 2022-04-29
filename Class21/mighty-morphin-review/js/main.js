// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let b = 'sunday'
b1 = b.toUpperCase(b)
console.log(b1)
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let c = 'somthing'
alert(c.slice(-2))
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function d(n1,n2,n3,n4,n5){
    return Math.abs(100-(n1+n2+n3+n4+n5))
}
d(20,30,50,10,20)
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function e(n1,n2,n3){
    let min = (Math.min(n1,n2,n3))
    let max = (Math.max(n1,n2,n3)) 
    console.log(`The lowest value is ${min} and the highest value is ${max}`)
}
e(10,20,30)
 
// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headTail(){
    console.log(Math.floor(Math.random()*2))
}
headTail()

const headsOrTails = _ => Math.random() < .5 ? 'heads' : 'tails' //implicite return

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function f(num){
    for(i=0;i<num;i++){
        headTail()
    }
}