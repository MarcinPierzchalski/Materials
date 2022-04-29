// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let a = 'Jager Meister'
console.log(a.split(' ').join(''))
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let b = "This is a apple test string"
tempArr = b.split(' ')
tempArr.forEach(element => {if(element === 'apple') console.log('apple inside')} );

//metoda str.search
if(str.search('apple') !==-1){
    console.log('yes')}
else console.log('no')          //znajduje index gdzie sie slowo zaczyna, jesli nie ma to jest -1


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
    let result = (Math.ceil(Math.random()*3))
    if(result == 1) return('paper')
    else if(result == 2) return ('rock')
    else return('scissors')

}
console.log(rockPaperScissors())
console.log(rockPaperScissors())
console.log(rockPaperScissors())
console.log(rockPaperScissors())
console.log(rockPaperScissors())


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function play(input){
    let cpu = rockPaperScissors()
    //pomyslowy warunek
    if( input === cpu){
        console.log(`You: ${input}, computer: ${cpu} - TIE`)
    }
    else if( ((input == 'paper') && (cpu == 'rock')) || ((input == 'rock') && (cpu == 'scissors')) || ((input == 'scissors') && (cpu == 'paper')) ){
        console.log(`You: ${input}, computer: ${cpu} - Player Win!!`)
    }
    else console.log(`You: ${input}, computer: ${cpu} - Computer Win!!`)
}

 b 

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function result(arrOfChoices){
    for(i=0; i<arrOfChoices.length; i++){
        play(arrOfChoices[i])
    }
}

result(['paper', 'paper', 'scissors', 'rock', 'rock'])