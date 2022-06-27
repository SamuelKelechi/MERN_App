// Get Tasks
// GET /api/tasks
// Access Private
const getTasks = (req, res) => {
    res.status(200).json({message: 'Got all tasks'})
}

// Set Task
// POST /api/tasks
// Access Private
const setTask = (req, res) => {
    res.status(200).json({message: 'Set tasks'})
}

// update Task
// PUT /api/tasks/:id
// Access Private
const updateTask = (req, res) => {
    res.status(200).json({message: `Updated task ${req.params.id}`})
}

// delete Task
// DELETE /api/tasks/:id
// Access Private
const deleteTask = (req, res) => {
    res.status(200).json({message: `Deleted task ${req.params.id}`})
}

module.exports = {
    getTasks,
    setTask,
    updateTask,
    deleteTask
}