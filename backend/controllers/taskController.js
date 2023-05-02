


const Task = require("../model/taskModel");


// create the tasks
// The word “async” before a function means one simple thing: a function always returns a promise. A promise is an asynchronous action that may complete at some point in the future and produce a value. 
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(200).json(task)
    } catch (error) {
        response.status(500).json({ msg: error.message })
    }
};




// get the tasks 
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
};




// get a single task
const getTask = async (req, res) => {
    try {
        const { id } = req.params
        const task = await Task.findById(id)
        if (!task) {
            return res.status(404).json(`No Task with id: ${id}`);
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}





// Delete a Task
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params
        const task = await Task.findByIdAndDelete(id)
        if (!task) {
            return res.status(404).json(`No Task Found with the id: ${id}`);
        }
        res.status(200).send("The Task has been delete");
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}







// updating the task
const updateTask = async (req, res) => {
    try {
        const { id } = req.params
        const task = await Task.findByIdAndUpdate(
            { _id: id }, req.body, { new: true, runValidators: true }
        )
        if (!task) {
            return res.status(404).json(`No Task Found with the id: ${id}`);
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }

}






module.exports = {
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask
}
