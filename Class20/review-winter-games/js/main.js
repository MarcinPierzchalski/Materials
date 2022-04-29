//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function even(arr1){
    result = []
    arr1.forEach((item, idx) => {
        if(item %2 ==0){
        result.push(item)
        }         
    })
    console.log(result)
}