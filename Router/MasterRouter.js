//import module
const express   = require('express');
const masterSchema= require('../Schema/MasterPageSchema')

//assign express router as router
const router = express.Router();
var currentDate = new Date();
var date = currentDate.getDate();
var year = currentDate.getFullYear();
var result =String(year)





//post method
router.post('/post',(req,res)=>{
        new masterSchema({
            addNew:req.body.addNew,
            CompanyName:req.body.CompanyName,
            WebsiteURL:req.body.WebsiteURL,
            MobileNumber:req.body.MobileNumber,
            LinkedInURL:req.body.LinkedInURL,
            PointofContact:req.body.PointofContact,
            Location:req.body.Location,
            email:req.body.email,
            District:req.body.District,
            State:req.body.State,
            City:req.body.City,
            SkillSet:req.body.SkillSet
 }).save().then(data=>{
        res.json("operation success")
    }).catch(err=>{
        res.json(err)

    })
})

//get method

router.get('/get',async(req,res)=>{
    let getAllData=await  masterSchema.find()
    res.send(getAllData)
})
router.get('/get/:id',async(req,res)=>{
    let getAllData=await  masterSchema.findById(req.params.id)
    res.send(getAllData)
})

  //ADDSubmission Delete Method
  router.delete("/Delete/:id", async (req, res) => {
    let deleteData = await masterSchema
      .findByIdAndDelete(req.params.id)
      .then((data) => {
        res.json("Deleted");
      })
      .catch((err) => {
        res.json(err);
      });
  });

 
 
  router.put("/Update/:id", async (req, res) => {
    let upDatebyId = await masterSchema
      .findByIdAndUpdate(    
        { _id: req.params.id },
        {
          $set: {
          //Fields
          addNew:req.body.addNew,
          CompanyName:req.body.CompanyName,
          WebsiteURL:req.body.WebsiteURL,
          MobileNumber:req.body.MobileNumber,
          LinkedInURL:req.body.LinkedInURL,
          PointofContact:req.body.PointofContact,
          Location:req.body.Location,
          email:req.body.email,
          District:req.body.District,
          State:req.body.State,
          City:req.body.City,
          SkillSet:req.body.SkillSet

      
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

