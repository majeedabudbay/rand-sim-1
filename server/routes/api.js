const express = require('express')
const router = express.Router()

const todos = []
let id = 1

router.get('/todos', function (req, res) {
    res.send(todos)
})

router.post('/todo', function (req, res) {
    const text = req.body.text
    
    const newTodo = { id: id++, text: text, complete: false }

    todos.push(newTodo)
    res.send(todos)
})

router.put('/todo/:todoID', function (req, res) {
    const todoID = req.params.todoID
    
    todos.find(t => t.id == todoID).complete = true
    res.send(todos)
})

router.delete('/todo/:todoID', function (req, res) {
    const todoID = req.params.todoID
    let todoIndex = 0
    for(let i in todos){
        if(todos[i].id == todoID){
            todoIndex = i
        }
    }
    
    todos.splice(todoIndex, 1)
    res.send(todos)
})

module.exports = router