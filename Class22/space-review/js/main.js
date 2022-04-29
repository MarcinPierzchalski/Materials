//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [1,2,3,4,5]
let sum = 0
arr.forEach(element => sum+=element)
console.log(sum)

//inaczej z reduce, accumulator, curent value. Accumulation starts at 0
let sums = arr.reduce( (acc, c) => acc+c, 0)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function one(arr){
    let result = []
    arr.forEach((element, idx) => result.push(Math.pow(element,2)))
    return result
}
console.log(one([1,2,3,4,5]))

    //using map
let nums = [40,20,40]
let numsquared = nums.map(n => n*n)
let numsquared2 = nums.map(n => n**2)
console.log(numsquared)

//Create a function that takes string
//Print the reverse of that string to the console
function two(tempstr){
    console.log(tempstr.split('').reverse().join(''))
}
two('abcdefghij')

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function three(tempstring){
    if(tempstring === tempstring.split('').reverse().join('')){
        console.log('PALINDROME')
    }
    else console.log('NON-PALINDROME')
}
three('abcdef')
three('abcdcba')

    //inaczej
const isPalindrome = s => s === s.split('').reverse().join('') ? alert('yes') : alert('no')