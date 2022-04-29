//Create an array of movie titles. Loop through the array and each element to the h2.
let arr1 = ['mov', 'mov2', 'mov3']

for(let i=0; i< arr1.length; i++){
    document.querySelector('h2').innerText += arr1[i]
}

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let nums = [10,20,30]
nums.forEach((item, idx) => {
    nums[idx] = item+3
})

//Find the average of all the numbers from question three
let sum = 0

nums.forEach((num) => sum += sum)

for(let i=0; i<nums.length; i++){
    sum = sum + nums[i]
}

console.log(sum/nums.length)