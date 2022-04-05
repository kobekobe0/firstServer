let data = require('./data')

const getAll = (req, res) => {
    console.log('Hello World')
    res.json(data)
}

const getById = (req, res) => {
    const number = Number(req.params.number) //always a string
    if (!number) {
        res.sta
    }
    const result = data.find((item) => item.number == number)
    res.json(result)
}

const createPerson = (req, res) => {
    const newData = req.body
    data.push(newData)
    res.json(data)
}

const updatePerson = (req, res) => {
    const number = Number(req.params.number)
    const newData = req.body
    const index = data.findIndex((item) => item.number == number)
    data[index] = newData
    res.json(data)
}

const deletePerson = (req, res) => {
    const number = Number(req.params.number)
    const index = data.findIndex((item) => item.number == number)
    data.splice(index, 1)
    res.json(data)
}

module.exports = { getAll, getById, createPerson, updatePerson, deletePerson }
