const express    = require('express')
const mongoose   = require('mongoose')
const cors       = require('cors')
const bodyParser = require('body-parser')
// const addEmployeeRouter= require('./Router/addEmployeeRouter')
const addSubmissionRouter=require('./Router/addSubmissionRouter')
const addDemandRouter =require('./Router/addDemandRouter')
const candidate = require('./Router/addCandiateRouter')
const Master= require('./Router/MasterRouter')


//existing data migration
const Employee = require('./Existing_operation/AddEmployee')

//convert express naming into app
const app = express();

//app.use methods
app.use(cors());
app.use(bodyParser.json());

//Router Path
// app.use('/addEmployeeRouter',addEmployeeRouter)
app.use('/addSubmissionRouter',addSubmissionRouter)
app.use('/addDemandRouter',addDemandRouter)
app.use('/candidate',candidate)
app.use('/master',Master)

app.use('/Employee',Employee)

//set listen port (what we want ?)
app.listen(5000,()=>{
    console.log('Server Started Port in 5000')
})


//Database connection
mongoose.connect('mongodb://localhost:27017/ATS_BackEnd',()=>{
    console.log('Database connected successfully')
})