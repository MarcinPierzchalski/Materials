const { response } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000
app.use(cors())

const rappers = {
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



app.get('/api/:rapperName', (request, response) =>{
    const rappersName=request.params.rapperName
    if(rappers[rappersName]){
        response.json(rappers[rappersName])
    }
    else response.json(rappers.Dylan)
})

app.listen(PORT, () =>{
    console.log(`The server is runninng on ${PORT}.`)
})