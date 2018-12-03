const mongoose = require('mongoose')
const idvalidator = require('mongoose-id-validator');
const Schema = mongoose.Schema

const companySchema = mongoose.Schema({
  name: { 
    type: String, 
    require: ['true', 'enter your company\'s name'] },
  email : { 
    type: String, 
    unique: true, 
    require: ['true', 'enter your email '] },
  profile :  { type: String },
  logo: { type: String },
  nameUser: { type: String },
  telp: { type: String },
  address :  { type: String  },
  city :  { type: String },
  website : { type: String },
  industry : { type: String },
  totalEmployees : { type : Number },
  joblist: [{ 
      jobId:{ type: Schema.Types.ObjectId, ref: 'Job' } 
    }],
}, {
  timestamps: true
})
companySchema.plugin(idvalidator);
let Company = mongoose.model('Company', companySchema)

module.exports = Company
