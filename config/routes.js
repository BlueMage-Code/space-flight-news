const express = require('express')
const routes = express.Router()


let db = [
    { 1 : {nome:'Alan', idade: "20"}},
    { 2 : {nome:'Eniu', idade: "22"}},
    { 3 : {nome:'Disc', idade: "15"}} 
]
// Buscar dados
routes.get('/', (req,res) => {
    return res.json(db)
})
// Adicionar dados
routes.post('/add', (req,res) => {
    const body = req.body
    
    if(!body)
    return res.status(400).end()
    
    db.push(body)
    return res.json(body)
    
})

routes.delete('/:id', (req,res) => {
    const id = req.params.id

    let newDB = db.filter(item => {
        if(!item[id])
            return item
    })

    db = newDB

    return res.send(newDB)
})

module.exports = routes