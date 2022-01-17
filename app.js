const express = require("express")
const multer = require('multer')
const path = require('path')
const bodyParser = require("body-parser")
const fs = require('fs').promises
const { request } = require("http")
const { response } = require("express")
let tasks = require("./data/tasks.json")
const cors = require("cors")

const hostname = "0.0.0.0"
const port =  process.env.PORT || 3000



const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

app.get("/", (request, response) => {
    
    let filteredTasks = tasks.filter((taskObject) => {
        return !taskObject.complete
    })
    console.log("######resquested")
    response.json(filteredTasks)
})

app.post("/addTask", (request, response) => {

   
    let newTask = request.body
    newTask.id = tasks.length + 1
    newTask.complete = false

    tasks.push(newTask)
    fs.writeFile("./data/tasks.json", JSON.stringify(tasks))
    response.json(tasks)

})

app.post("/updateTasks", (request, response) => {

   
    let newTask = request.body
    newTask.id = tasks.length + 1
    newTask.complete = false

    tasks.push(newTask)
    fs.writeFile("./data/tasks.json", JSON.stringify(tasks))
    response.json(tasks)

})



module.exports = {app: app, port: port, hostname: hostname}
