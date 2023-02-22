const mongoose = require("mongoose");



const MasterSchema = mongoose.Schema({
    addNew:{type:String,required:true},
    CompanyName:{type:String,required:true},
    WebsiteURL:{type:String,required:true},
    MobileNumber:{type:String,required:true},
    LinkedInURL:{type:String,required:true},
    PointofContact:{type:String,required:true},
    Location:{type:String,required:true},
    email:{type:String,required:true},
    District:{type:String,required:true},
    State:{type:String,required:true},
    City:{type:String,required:true},
    SkillSet:{type:String,required:true}
},
{timestamps:true},


);

module.exports = mongoose.model("Master_Schema", MasterSchema);