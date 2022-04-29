// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let a = 'burger'
alert(a)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let b  = 'sample string'
alert(string[1])
alert(str.charAt(1))


// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function div(num1, num2, num3){
    
    let wynik =  (num1/num2)*num3
    return wynik
    alert(wynik)
}
div(10,20,30)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function one(num){
    console.log(Math.cbrt(num).toFixed(4))
}
one(3)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function summer(month){
    let month = month.toLowerCase()
    if(month == 'June' || month == 'July' || month == 'August' || month == 'September'){
        alert('yay')
    }
    else{
        alert('Booo')
    }
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function loop(num){
    for(let i=1; i<=num; i++){
        if(i%5 !== 0){
            console.log(i)
        }
        else{}
    }
}