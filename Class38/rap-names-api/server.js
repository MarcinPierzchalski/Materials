const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const savage = {
    '21 savage':{
        'age': 29,
        'birthName': 'Bin cos tam',
        'birthLocation':'London, England'},

    'Chance the rapper':{
        'age': 29,
        'birthName': 'Bennet',
        'birthLocation':'Chicago'},
    'Dylan':{
        'age': 29,
        'birthName': 'dylan',
        'birthLocation':'dylan'},

}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response) =>{
    response.json(savage)
})

app.listen(PORT, () =>{
    console.log(`The server is runninng on ${PORT}.`)
})