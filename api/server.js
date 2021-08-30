// BUILD YOUR SERVER HERE
const express = require('express')
const server = express()
const User = require('./users/model')
server.use(express.json())

server.post('/api/users', (req, res) => {
    const user = req.body;
    if (!user.name || !user.bio) {
        res.status(400).json({
            message: "Please provide name and bio for the user"
        })
    } else {
        User.insert(user)
        .then(newUser => {
            res.status(201).json(newUser)
        })
        .catch(err => {
            res.status(500).json({
                message: "There was an error while saving the user to the database",
                err: err.message,
                stack: err.stack
            })
        })
    }
})

server.get('/api/users', (req, res) => {
    User.find()
        .then(users => {
            res.json(users)
        })
        .catch(err => {
            res.status(500).json({
                message: "The users information could not be retrieved",
                err: err.message,
                stack: err.stack
            })
        })
})


server.put('/api/users/:id', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json({
            message: 'error updating user',
            err: err.message,
            stack: err.stack,
        })
    }
})


module.exports = server; // EXPORT YOUR SERVER instead of {}
