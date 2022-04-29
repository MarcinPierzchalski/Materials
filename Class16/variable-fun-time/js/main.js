//--- Easy
//create a variable and assign it a number
let a = 20
//minus 10 from that number
let b = a-10
//print that number to the console
console.log(b)
//--- Medium
//create a variable that holds a value from the input
let inputed = document.querySelector('#danceDanceRevolution').value
//add 25 to that number
inputed +=25
//alert that number
alert(inputed)
//--- Hard
//create a variable that holds the h1
let hold = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables
hold.addEventListener('click', sum)

function sum(){
    console.log(inputed + Number(b))
}