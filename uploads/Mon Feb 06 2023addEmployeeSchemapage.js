const mongoose = require('mongoose')
var autoIncrement = require('mongoose-auto-increment'); // 2. require mongoose-auto-increment


//1.Basic Information Schema
const BasicInformation_schema = mongoose.Schema({

    //topfield
    empId            : {type:String,require:true},
    role             : {type:String,require:true},
    teamLead         : {type:String},
    status           : {type:String,require:true},
    reportingManager : {type:String},
    location         : {type:String,require:true},
    //Basic information
    firstName   : {type:String,require:true,trim:true},
    lastName    : {type:String,require:true,trim:true},
    email       : {type:String,trim: true,lowercase: true,unique: true,require:true},
    mobile      : {type:Number,trim:true,unique:true},
    dateOfHire  : {type:Date,require:true},
    dateOfJoin  : {type:Date,require:true},

    //Personal Details
    dateOfBirth   : {type:Date,require:true},
    maritalStatus : {type:String,require:true},
    gender        : {type:String,require:true},
    address1      : {type:String,require:true},
    address2      : {type:String,require:true},
    city          : {type:String,require:true},
    pincode       : {type:Number,require:true},
    //indentity Information
    panNumber     : {type:String,require:true},
    adhaarNumber  : {type:Number,require:true},
})



// autoIncrement.initialize(mongoose.connection);

// BasicInformation_schema.plugin(autoIncrement.plugin,{
          
//         model:'post',
//         field:'empId',
//         startAt:'1',
//         incrementBy:1,
// })

module.exports = mongoose.model('add_Employee_Schemas',BasicInformation_schema)
