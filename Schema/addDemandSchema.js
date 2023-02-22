const mongoose = require('mongoose')

const DemandSchema = mongoose.Schema({
        DemandId:{type:String,require:true},
        jobtitle                        : {type:String,require:true},
        assigned                        : {type:String,require:true},
        Status                          : {type:String,require:true},
        Priority                        : {type:String,require:true},
        Clients                         : {type:String,require:true},
        NoticePeriod                    : {type:String,require:true},
        MaximumExperienceMonths         : {type:Number,require:true},
        MaximumExperienceYears          : {type:Number,require:true},
        MinimumExperienceMonths         : {type:Number,require:true},
        MinimumExperienceYears          : {type:Number,require:true},
        ModeOfHire                      : {type:String,require:true},
        SkillSet                        : {type:Array,require:true},
        //vendor information
        pointOfContact                  : {type:String,require:true},
        NoOfOptions                     : {type:String,require:true},
        DueDate                         : {type:Date  ,require:true},
        subvendor                       : {type:String,require:true},
        //jobDescription
        jobDescription                  : {type:String,require:true},
        PointOfContact                  : {type:String,require:true},
        JobRRID                         : {type:String,require:true},
        // additionalInformation
        additionalInformation           : {type:String,require:true},
        
},
{timestamps:true},

);
module.exports = mongoose.model('add_Demand_Schema',DemandSchema)