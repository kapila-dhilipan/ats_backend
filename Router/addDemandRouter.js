//import module
const express   = require('express');
const addDemandSchema= require('../Schema/addDemandSchema')

//assign express router as router
const router = express.Router();
var currentDate = new Date();

var date = currentDate.getDate();
var year = currentDate.getFullYear();
var result =String(year)
var yearInc = result.slice(2,4)
// var zero = parseInt(0000);

if([date].length==1){
  var dateInc = '0'+date

}
const DemandId = () => {
  let s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(10)
        .substring(1);
}

  return 'C'+dateInc+yearInc+ '_' +s4();
}

let id=DemandId()


 
// if([year].length==4){
//   var yearInc = 
// }
    

//post method for Demand Page
router.post('/addDemandCreate',(req,res)=>{
    var user = new addDemandSchema({ 
          DemandId:id,
        jobtitle                        : req.body.jobtitle,
        assigned                        : req.body.assigned,
        Status                          : req.body.Status,
        Priority                        : req.body.Priority,
        Clients                         : req.body.Clients,
        NoticePeriod                    : req.body.NoticePeriod,
        MaximumExperienceMonths         : req.body.MaximumExperienceMonths,
        MaximumExperienceYears          : req.body.MaximumExperienceYears,
        MinimumExperienceMonths         : req.body.MinimumExperienceMonths,
        MinimumExperienceYears          : req.body.MinimumExperienceYears,
        ModeOfHire                      : req.body.ModeOfHire,
        SkillSet                        : req.body.SkillSet,
        //vendor information
        pointOfContact                  : req.body.pointOfContact,
        NoOfOptions                     : req.body.NoOfOptions,
        DueDate                         : req.body.DueDate,
        subvendor                       : req.body.subvendor,
        //jobDescription
        jobDescription                  : req.body.jobDescription,
        JobRRID                         : req.body.JobRRID,
        // additionalInformation
        additionalInformation           : req.body.additionalInformation,
    
    }).save().then(data=>{
     res.json('Success')
    }).catch(err=>{
       console.log(err)
    })
})

//get method

router.get('/addDemandGet',async(req,res)=>{
    const getAllData = await addDemandSchema.find()
    res.send(getAllData)
})
 router.put("/addDemandUpdate/:id", async (req, res) => {
    let upDatebyId = await addDemandSchema
      .findByIdAndUpdate(    
        { _id: req.params.id },
        {
          $set: {
            jobtitle                        : req.body.jobtitle,
            assigned                      : req.body.unassigned,
            Status                          : req.body.Status,
            Priority                        : req.body.Priority,
            Clients                         : req.body.Clients,
            NoticePeriod                    : req.body.NoticePeriod,
            MaximumExperienceMonths         : req.body.MaximumExperienceMonths,
            MaximumExperienceYears          : req.body.MaximumExperienceYears,
            MinimumExperienceMonths         : req.body.MinimumExperienceMonths,
            MinimumExperienceYears          : req.body.MinimumExperienceYears,
            ModeOfHire                      : req.body.ModeOfHire,
            PrimarySkillSet                 : req.body.PrimarySkillSet,
            PrimarySkillExperienceMonths    : req.body.PrimarySkillExperienceMonths,
            PrimarySkillExperienceYears     : req.body.PrimarySkillExperienceYears,
            SecondarySkillExperienceMonths  : req.body.SecondarySkillExperienceMonths,
            SecondarySkillExperienceYears   : req.body.SecondarySkillExperienceYears,
            SecondarySkillSet               : req.body.SecondarySkillSet,
            //vendor information
            pointOfContact                  : req.body.pointOfContact,
            NoOfOptions                     : req.body.NoOfOptions,
            DueDate                         : req.body.DueDate,
            subvendor                       : req.body.subvendor,

            //jobDescription
            jobDescription                  : req.body.jobDescription,
            JobRRID                         : req.body.JobRRID,
            // additionalInformation
            additionalInformation           : req.body.additionalInformation,
          
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
  router.delete("/addDemandDelete/:id", async (req, res) => {
    let deleteData = await addDemandSchema
      .findByIdAndDelete(req.params.id)
      .then((data) => {
        res.json("Deleted");
      })
      .catch((err) => {
        res.json(err);
      });
  });


//



module.exports = router