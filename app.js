const express = require('express')
const app = express()
const {
    getAll,
    getById,
    createPerson,
    updatePerson,
    deletePerson,
} = require('./controller')

app.use(express.json())
//get // fetching
//put // updating
//post // creating
//delete // deleting

app.get('/', getAll)

app.get('/:number', getById)

app.post('/', createPerson)

app.put('/:number', updatePerson)

app.delete('/:number', deletePerson)

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

//function(){
//    axios.post('/:number', {message:'kajiosnoaNS'})
//}

//button => trigger(event) => function() => REQUEST => server => database => server => RESPONSE => Frontend
