//Arrays

//Create and array of tv shows. Loop through and print each show to the console
arr1 = ['show1', 'show2', 'show3', 'show4']
for(i=0; i<=arr1.length -1; i++){
    console.log(arr1[i])
}
//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
arr2 = [1,2,3,4,5,6,7,8,9,10]
result = []
arr2.forEach((element, idx) => {
    if(element % 2 == 0){
        result.push(element)
    }
    
})
console.log(result);
//different way
let onlyEvens = arr => arr.filter(n => n%2 ===0)

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function f1(arr){
    temp = []
    firstMax = Math.max(...arr)
    firstMin = Math.min(...arr)
    arr.forEach(element => {
        if(element === firstMax){}
        else if(element === firstMin){}
        else{
            temp.push(element)
        }
    })
    // console.log(firstMax)
    // console.log(firstMin)
    // console.log(temp)
    console.log(secMax = Math.max(...temp)) //spread operator
    console.log(secMin = Math.min(...temp))
}
f1([10,20,30,100,5,60])

//different way

function sumSecondLowAndHigh(arr){
    let sorted = arr.sort((a,b) => a-b)
    alert(sorted[1] + sorted[sorted.length -2])

}