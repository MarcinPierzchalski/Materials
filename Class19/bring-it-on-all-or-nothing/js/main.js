// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let haveADuck = true
alert(haveADuck)

// Declare a variable, reassign it to your favorite color, and console log the value
let favColor = 'blue'
console.log(favColor)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function F1(a,b,c,d){
    return (a+b+c)/d
}
F1(1,2,3,4)

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.

function F2(a,b){
    console.log(Math.pow(a,b))
}
F2(4,2)

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function alertOrLog(b,str){
    if(b){
        alert(str)
    }
    else{
        console.log(str)
        // to jest to samo turnary
        b ? alert(str) : console.log(str)
    } 
}
// lub zapisane jako one liner
const alertOrLog2 = (b,str) => b ? alert(str) : console.log(str)

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

function fizzBuzz (num1){
     for(let i=1; i<=num1; i++){
         if ((i%3==0) && (i%5==0)){
             console.log('fizz')
         }
         else if(i%5 ==0){
             console.log('buzz')
         }
         else if(i%3==0){
             console.log('fizzbuzz')
         }
     }
}