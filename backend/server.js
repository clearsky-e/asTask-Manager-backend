const dotenv = require("dotenv").config()
const express= require ("express");
const connectDB = require("./config/connectDB");
const Task = require("./model/taskModel");
const taskRoutes = require("./routes/taskRoute")
const cors = require("cors")



const app = express();
// calling the express app to run



// MIDDLEWARES
app.use(express.json());
// this middleware is a custome middleware provided by the express, to recieve the upcoming data in the json format
app.use(express.urlencoded({extended:false}));
// the cors is used to connect the backend and frontend, since both are running on the differnt ports, it helps to manage that
app.use(cors({
    origin: ["http://localhost:/3000", "https://asTask-Manager.onrender.com"]
}));
// this is also a custom middleware. The express.urlencoded() function is a built-in middleware function in Express. It parses incoming requests 
app.use(taskRoutes)
// app.use("/api/tasks", taskRoutes)    -- use this if the above wont work


// ROUTES
app.get("/", (req,res)=>{
    res.send("Home Page");
});







const PORT = process.env.PORT || 5000;
const starServer= async () => {
    try {
        await connectDB();
        app.listen(PORT,()=>{
            console.log(`Server running on the port ${PORT}`)
        });

    } catch (error) {
        console.log(error)
    }
};

starServer();