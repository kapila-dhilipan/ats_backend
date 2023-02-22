const mongoose = require('mongoose')
// var autoIncrement = require('mongoose-auto-increment'); // 2. require mongoose-auto-increment
const Schema = mongoose.Schema



//1.Basic Information Schema
const AddEmployee1 = new Schema({
    first_name      :   { type: String, trim: true },
    last_name       :   { type: String, trim: true },
    email           :   { type: String },
    mobile_number   :   { type: String },
    date_of_hire    :   { type: String },
    date_of_joining :   { type: String },
    date_of_birth   :   { type: String },
    marital_Status  :   { type: String },
    gender          :   { type: String },
    address_line_1  :   { type: String },
    address_line_2  :   { type: String },
    city            :   { type: String },
    pincode         :   { type: String },
    pan_number      :   { type: String },
    aadhaar_number  :   { type: String },
    password_hash   :   { type: String },
    role            :   { type: String },
    reports_to      :   {type: Schema.Types.ObjectId, ref: 'employee'},
    status          :   { type: String },
    job_role        :   { type: String },
    location        :   { type: String },
    is_deleted      :   { type: Boolean, default: false }
},
{timestamps: true}
);


module.exports = AddEmployee1;


// autoIncrement.initialize(mongoose.connection);

// AddEmployee1.plugin(autoIncrement.plugin,{
          
//         model:'post',
//         field:'empId',
//         startAt:'1',
//         incrementBy:1,
// })

module.exports = mongoose.model('AddEmployee1',AddEmployee1)
