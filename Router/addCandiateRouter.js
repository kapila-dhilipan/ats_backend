//import module
const express   = require('express');
const addCandidate= require('../Schema/addCandidateSchema')
const multer  = require('multer')
//assign express router as router
const router = express.Router();
var currentDate = new Date();
var date = currentDate.getDate();
var year = currentDate.getFullYear();
var result =String(year)
var yearInc = result.slice(2,4)


const Storage = multer.diskStorage({
  destination:(req,file,cb)=>{
  cb(null,'./uploads/')
  },
  filename:(req,file,cb)=>{
    cb(null,new Date().toDateString()+file.originalname)
  }
})

const upload=multer({storage:Storage})
if([date].length==1){
  var dateInc = '0'+date

}

var num = 1;

const CandidateId = () => {
  let s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(10)
        .substring(1);
}

  return 'C'+dateInc+yearInc+ '_' +s4();
}

let id=CandidateId()




//post method
router.post('/post',upload.single("file_path"),(req,res)=>{
  console.log(req.file)
        new addCandidate({
          candidateId      :id,
          file_path        :req.file,
          ExpectedCTC      : req.body.ExpectedCTC,
          NoticePeriod     : req.body.NoticePeriod,
          Status           : req.body.Status,
          firstName        : req.body.firstName,
          lastName         : req.body.lastName,
          emailId          : req.body.emailId,
          mobile           : req.body.mobile,
          Gender           : req.body.Gender,
          State            : req.body.State,
          City             : req.body.City,
          skillSet         : req.body.skillSet,
          CurrentLocation  : req.body.CurrentLocation,
          Pincode          : req.body.Pincode,
          PreferredModeOfHire:req.body.PreferredModeOfHire,
          PreferredLocation :req.body.PreferredLocation ,
          EmployeeDetails   : req.body.EmployeeDetails,
        
 }).save().then(data=>{
        res.json("operation success")
    }).catch(err=>{
       console.log(err)

    })
})

//get method

router.get('/get',async(req,res)=>{
  console.log(req.query)
    let getAllData=await  addCandidate.find()
    res.send(getAllData)
})
router.get('/get/:id',async(req,res)=>{
    let getAllData=await  addCandidate.findById(req.params.id)
    res.send(getAllData)
})

  //ADDSubmission Delete Method
  router.delete("/Delete/:id", async (req, res) => {
    let deleteData = await addCandidate
      .findByIdAndDelete(req.params.id)
      .then((data) => {
        res.json("Deleted");
      })
      .catch((err) => {
        res.json(err);
      });
  });

 
 
  router.put("/Update/:id", async (req, res) => {
    let upDatebyId = await addCandidate
      .findByIdAndUpdate(    
        { _id: req.params.id },
        {
          $set: {
          //Fields
          ExpectedCTC      : req.body.ExpectedCTC,
C2H              : req.body.C2H,
CTC              : req.body.CTC,
NoticePeriod     : req.body.NoticePeriod,
Status           : req.body.Status,
preffedModeofHire: req.body.preffedModeofHire,
firstName        : req.body.firstName,
lastName         : req.body.lastName,
emailId          : req.body.emailId,
mobile           : req.body.mobile,
Gender           : req.body.Gender,
startDate        : req.body.startDate,
EndDate          : req.body.EndDate,
State            : req.body.State,
city             : req.body.city,
pincode          : req.body.pincode,
skillSet         : req.body.skillSet,
Experience       : req.body.Experience,
totalExperience  : req.body.totalExperience,
CompanyName      : req.body.CompanyName,
CurrentLocation  : req.body.CurrentLocation,
EmployementType  : req.body.EmployementType,
IndustryType     : req.body.IndustryType,
JobRole          : req.body.JobRole,
JobSKills        : req.body.JobSKills,
Month            : req.body.Month,
Pincode          : req.body.Pincode,
PreferedModeOfHire:req.body.PreferedModeOfHire,
PreferredLocation :req.body.PreferredLocation ,
WorkModel         : req.body.WorkModel,
Year              :req.body.Year,

      
          },
        }
      )
      .then(data => {
        res.status(200).json("Update Data Successfull");
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });



module.exports = router

