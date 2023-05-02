// in this model file we define the structure of the data, Simply it is the skelton structure, before data got stored in the databae it is collected in the following formate

const mongoose = require("mongoose")

const TaskSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true, "PLEASE ADD A TASK"]
        },
        completed:{
            type: Boolean,
            required: true,
            default: false
        },
    },
    {
        timestamps: true
    }
)

// here we are creating the model for the schema we created
const Task = mongoose.model("Task", TaskSchema)
module.exports = Task

