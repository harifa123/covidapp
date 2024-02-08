const express=require("express")
const cors=require("cors")
const mongoos=require("mongoose")
const patientRoute=require("./controller/patientRouter")
const { default: mongoose } = require("mongoose")

const app=express()

app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://harifa123:harifa123@cluster0.j6vqcp5.mongodb.net/covidDb?retryWrites=true&w=majority",{useNewUrlParser:true})
app.use("/api/patient",patientRoute)

app.listen(3001,()=>{
    console.log("server running")
})