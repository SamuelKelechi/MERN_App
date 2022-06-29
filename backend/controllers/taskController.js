const asyncHandler = require('express-async-handler')

const Task = require('../models/taskModel')

// Get Tasks
// GET /api/tasks
// Access Private
const getTasks = asyncHandler(async (req, res) => {
    const tasks = await Task.find()
    res.status(200).json(tasks)
})

// Set Task
// POST /api/tasks
// Access Private
const setTask = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text')
    }

    const task = await Task.create({
        text: req.body.text,
    })

    res.status(200).json(task)
})

// update Task
// PUT /api/tasks/:id
// Access Private
const updateTask = asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id)

    if(!task) {
        res.status(400)
        throw new Error('Task not found')
    }

    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedTask)
})

// delete Task
// DELETE /api/tasks/:id
// Access Private
const deleteTask = asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id)

    if(!task) {
        res.status(400)
        throw new Error('Task not found')
    }

    await task.remove()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getTasks,
    setTask,
    updateTask,
    deleteTask
}