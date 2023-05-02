const express = require("express")
const Task = require("../model/taskModel");
const { createTask, getTasks,getTask,deleteTask,updateTask } = require("../controllers/taskController");
const router = express.Router()
// this router is just an mini app we created to manage all of our router


// ALL ROUTES

// CREATE A TASK
router.post("/api/tasks",createTask);
// GET/READ TASKS
router.get("/api/tasks", getTasks);
// GET ONE PARTICULAR TASK
router.get("/api/tasks/:id", getTask);
// DELETE A TASK
router.delete("/api/tasks/:id", deleteTask);
// UPDATING THE TASK
router.put("/api/tasks/:id", updateTask);
// we can use the patch method instead of put method, to update a task. The main diffence between put and patch is, put is used to update all the entries in a model, whereas patch can update only one entry of a specific task






module.exports = router
