const express   = require('express');
const SchemaData= require('../Schema/addSubmissionSchema')

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
console.log(id)

//post method
router.post('/addSubmissionCreate',(req,res)=>{
        new SchemaData({
        demandId         :req.body.demandId,
        candidateId      :req.body.candidateId,
        file             :req.files,
        submissionId     : id,
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
        res.json("Operation Success")
    }).catch(err=>{
        res.json(err)

    })
})

//get method

router.get('/addSubmissionGet',async(req,res)=>{
    let getAllData=await SchemaData.find()
    res.send(getAllData)
})

router.put("/addSubmissionUpdate/:id", async (req, res) => {
  let upDatebyId = await SchemaData
    .findByIdAndUpdate(    
      { _id: req.params.id },
      {
        $set: {
          submissionId     : id,
          ExpectedCTC      : req.body.ExpectedCTC,
          NoticePeriod     : req.body.NoticePeriod,
          Status           : req.body.Status,
          preffedModeofHire: req.body.preffedModeofHire,
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
          PreferedModeOfHire:req.body.PreferedModeOfHire,
          PreferredLocation :req.body.PreferredLocation ,
          EmployeeDetails   : req.body.EmployeeDetails,
          Year              :req.body.Year,
        
        },
      }
    )
    .then(data => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
  //ADDSubmission Delete Method
  router.delete("/addSubmissionDelete/:id", async (req, res) => {
    let deleteData = await SchemaData
      .findByIdAndDelete(req.params.id)
      .then((data) => {
        res.json("Deleted");
      })
      .catch((err) => {
        res.json(err);
      });
  });

module.exports = router

