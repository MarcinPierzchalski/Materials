//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too
// if(age < 16){
//     console.log("can not drive")
// }
// else if(age < 18){
//     console.log("can't hate from outside the club, because they can't even get in")
// }
// else if(age < 21){
//     console.log('cannot drink')
// }
// else if(age < 25){
//     console.log('tell them they can not rent cars affordably')
// }
// else if(age < 30){
//     console.log('they can not rent fancy cars affordably')
// }
// else{
//     console.log('nothing left to look forward too')
// }
//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph


document.querySelector('h1').addEventListener('click', run)


function run(){
    let inputed = document.querySelector('#danceDanceRevolution').value
    document.querySelector('p').innerText = `${inputed}`

}