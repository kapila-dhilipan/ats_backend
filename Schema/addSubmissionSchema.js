const mongoose = require("mongoose");

const addSubmissionSchema = mongoose.Schema({
  demandId          :{type:String},
  candidateId       :{type:String},
  files             :{type:String},
  submissionId     : { type: String },
  ExpectedCTC      : { type: Number, trim: true },
  NoticePeriod     : { type: String },
  Status           : { type: String },
  PreferredModeofHire: { type: String ,require:true},
  firstName        : { type: String, trim: true },
  lastName         : { type: String, trim: true },
  emailId          : { type: String,require: true,unique:true},
  mobile           : { type: Number, trim: true},
  Gender           : { type: String },
  State            : { type: String },
  City             : { type: String },
  skillSet         : { type: Array },
  CurrentLocation  : { type: String },
  Pincode          : { type: String },
  PreferredLocation: { type: String },
  EmployeeDetails: { type: Array },
},
{timestamps:true},


);

module.exports = mongoose.model("add_Submission_Schema", addSubmissionSchema);