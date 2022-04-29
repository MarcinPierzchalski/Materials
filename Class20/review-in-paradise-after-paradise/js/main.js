// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
function tern(arr1){
    if(arr1[0] < arr1[arr1.length-1]){
        console.log("Hi")
    }
    else if(arr1[0] > arr1[arr1.length-1]){
        console.log('Bye')
    }
    else if(arr1[0] == arr1[arr1.length-1]){
        console.log('We close in an hour')
    }

}