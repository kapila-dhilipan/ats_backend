//import module
const express   = require('express');
const basicinfo = require('../Schema/addEmployeeSchemapage')

//assign express router as router
const router = express.Router();

var currentDate = new Date();
var date = currentDate.getDate();
var year = currentDate.getFullYear();
var result =String(year)
var yearInc = result.slice(2,4)

if([date].length==1){
  var dateInc = '0'+date

}

var num = '0001';
const submissionIdGenerator = () => {
  let s4 = () => {
    return parseInt(num)+1
    
        
}
return `S${dateInc}${yearInc}_${s4()}`
  // return 'S'+dateInc+yearInc+ '_' +s4();
}

let id=submissionIdGenerator()


//post method for AddEmployee
router.post('/post',(req,res)=>{
    var user = new basicinfo({
        empId            : id,
        role             : req.body.role,
        teamLead         : req.body.teamLead,
        status           : req.body.status,
        reportingManager : req.body.reportingManager,
        location         : req.body.location,
        firstName        : req.body.firstName,
        lastName         : req.body.lastName,
        email            : req.body.email,
        mobile           : req.body.mobile,
         dateOfHire      : req.body.dateOfHire,
        dateOfJoin       : req.body.dateOfJoin,
        dateOfBirth      : req.body.dateOfBirth,
        maritalStatus    : req.body.maritalStatus,
        gender           : req.body.gender,
        address1         : req.body.address1,
        address2         : req.body.address2,
        city             : req.body.city,
        pincode          : req.body.pincode,
        panNumber        : req.body.panNumber,
        adhaarNumber     : req.body.adhaarNumber,

    }).save().then(data=>{
        res.json("Operation Success")
    }).catch(err=>{
        res.json(err)

    })
})

//get method for addEmployee

router.get('/get',async(req,res)=>{
    let getAllData=await basicinfo.find()
    res.send(getAllData)
})




         



module.exports = router