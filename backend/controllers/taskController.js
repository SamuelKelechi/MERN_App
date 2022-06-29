const asyncHandler = require('express-async-handler')

// Get Tasks
// GET /api/tasks
// Access Private
const getTasks = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Got all tasks'})
})

// Set Task
// POST /api/tasks
// Access Private
const setTask = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text')
    }

    res.status(200).json({message: 'Set tasks'})
})

// update Task
// PUT /api/tasks/:id
// Access Private
const updateTask = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Updated task ${req.params.id}`})
})

// delete Task
// DELETE /api/tasks/:id
// Access Private
const deleteTask = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Deleted task ${req.params.id}`})
})

module.exports = {
    getTasks,
    setTask,
    updateTask,
    deleteTask
}