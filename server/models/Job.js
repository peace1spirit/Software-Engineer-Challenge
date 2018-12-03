const mongoose = require('mongoose')
const idvalidator = require('mongoose-id-validator');
const Schema = mongoose.Schema

const jobSchema = mongoose.Schema({
  name: { type: String, require: ['true', 'enter the name'] },
  function :{ type: String }, 
  description : { type: String }, 
  education : { type: String }, 
  qualification : { type: String },
  location : { type: String },
  minSalary :{ type: Number }, 
  maxSalary :{ type: Number },
  minAge : { type: Number },
  maxAge : { type: Number },
  gender : { type : String , lowercase: true},
  companyid: { type: Schema.Types.ObjectId, ref: 'Company', required: true}
}, {
  timestamps: true
})
jobSchema.plugin(idvalidator);
let Job = mongoose.model('Job', jobSchema)

module.exports = Job
