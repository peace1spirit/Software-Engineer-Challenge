const CompanyModel= require('../models/Company')
const JobModel=require('../models/Job')

class JobController {
    static showAll(req,res){
        JobModel
        .find({})
        .populate( { path :'companyid', select:'name industry'} ).limit(10) 
        .select('name location')
        .then((result) => {
            res.status(200).json({ message:`Get data Jobs successfully`, data:result });
        })
        .catch((err) => {
            res.status(500).json({ message: `Get data Jobs failed` });
        })
    }
    static showGiveAll(req,res){
        JobModel
        .find({})
        .populate('companyid').limit(10) 
        .then((result) => {
            res.status(200).json({ message:`Get data Jobs successfully`, data:result });
        })
        .catch((err) => {
            res.status(500).json({ message: `Get data Jobs failed` });
        })
    }
    static showDetail(req,res){
        JobModel
        .findOne({ _id: req.params.id })
        .populate( { path :'companyid'} ) 
        .then((result) => {
            res.status(200).json({ message:`Get data Job detail successfully`, data:result });
        })
        .catch((err) => {
            res.status(500).json({ message: `Get data Job failed` });
        })
    }
    static showByFilter(req,res){
        let filterValue=[]
         
        req.body.name && filterValue.push( { name: new RegExp(req.body.name, 'i') } ) 
        req.body.function && filterValue.push( { function: new RegExp(req.body.function, 'i') } )
        req.body.description &&  filterValue.push( { description: new RegExp(req.body.description, 'i') } ) 
        req.body.education &&  filterValue.push( { education: new RegExp( req.body.education, 'i') } ) 
        req.body.qualification && filterValue.push( { qualification: new RegExp( req.body.qualification, 'i')}  ) 
        req.body.location && filterValue.push( { location: new RegExp( req.body.location, 'i') } ) 
        req.body.minSalary && filterValue.push({ minSalary: {$gte: Number(req.body.minSalary) } }) 
        req.body.maxSalary && filterValue.push({ maxSalary: {$lte: Number(req.body.maxSalary) } }) 
        req.body.minAge && filterValue.push({ minAge: {$gte: Number(req.body.minAge) } }) 
        req.body.maxAge && filterValue.push({ maxAge : {$lte: Number(req.body.maxAge) } }) 
        req.body.gender && filterValue.push({ gender: req.body.gender.toLowerCase() })
        req.body.companyName && filterValue.push({ "Company.name": new RegExp(req.body.companyName, 'i') }) 
        req.body.companyCity && filterValue.push({ "Company.city": new RegExp(req.body.companyCity, 'i') }) 
        req.body.companyTotalemployees && filterValue.push({ "Company.totalEmployees": {$gte: req.body.companyTotalemployees} }) 

        //console.log(filterValue)
        if(filterValue.length==0){
            JobModel.aggregate([
                { "$unwind": "$companyid" },
                {
                    "$lookup": {
                        "from": "companies",
                        "localField": "companyid",
                        "foreignField": "_id",
                        "as": "Company"
                    }
                },
                { "$project" : { _id:1, name:1, location:1, 'Company._id':1 ,'Company.name':1, 'Company.industry':1 } }         
             ])
            .then((result) => {
                res.status(200).json({ data:result });
            })
            .catch((err) => {
                res.status(500).json({ message: `Get data Jobs failed, ${err.message}` });
            })
        }else{
            JobModel.aggregate([
                { "$unwind": "$companyid" },
                {
                    "$lookup": {
                        "from": "companies",
                        "localField": "companyid",
                        "foreignField": "_id",
                        "as": "Company"
                    }
                },            
                { "$match": { $or: filterValue } },      
                { "$project" : { _id:1, name:1, location:1, 'Company._id':1 ,'Company.name':1, 'Company.industry':1 } }
             ])
            .then((result) => {
                res.status(200).json({ message: 'Get data Jobs successfully', data:result });
            })
            .catch((err) => {
                res.status(500).json({ message: `Get data Jobs failed, ${err.message}` });
            })
        }
        
    }
    static showByFilterName(req,res){
        JobModel
        .find({ name : new RegExp(req.body.name, 'i') })
        .select('name location')
        .populate( { path :'companyid', select:'name industry'} ).limit(10)   
        .then((result) => {
            res.status(200).json({ message: 'Get data Jobs successfully', data:result });
        })
        .catch((err) => {
            res.status(500).json({ message: `Get data Jobs failed` });
        })
    }
    static createJob(req,res){   
        JobModel.create({
            name: req.body.name,
            function : req.body.function, 
            description : req.body.description, 
            education : req.body.education, 
            qualification : req.body.qualification, 
            location : req.body.location ,
            minSalary : req.body.minSalary , 
            maxSalary : req.body.maxSalary ,
            minAge : req.body.minAge ,
            maxAge : req.body.maxAge ,
            gender : req.body.gender,
            companyid: req.body.companyid
        })
        .then(result=>{
            if(result){
                CompanyModel.findOneAndUpdate({
                    _id: req.body.companyid,
                }, {
                    $push: {
                        joblist: { jobId:result._id },                                            
                    }
                })
                .then((DataCompany) => { 
                    res.status(201).json({
                        message: "Create Job successfully",
                        data:result,
                        dataCompany:DataCompany
                    })
                }).catch((err) => {
                    res.status(500).json({ message: 'Create Job failed' });
                });
            }
        })      
        .catch(err=>{
            res.status(500).json({ message: 'Create Job failed' })
        })          
    }
    static updateJob(req,res){
        let updateValue={};
        Object.assign(updateValue, 
            req.body.name ? { name:req.body.name} : null,
            req.body.function ? { function:req.body.function} : null,
            req.body.description ? { description:req.body.description} : null,
            req.body.education ? { education:req.body.education} : null,
            req.body.qualification ? { qualification:req.body.qualification} : null,
            req.body.location ? { location:req.body.location} : null,
            req.body.minSalary ? { minSalary:req.body.minSalary} : null,
            req.body.maxSalary ? { maxSalary:req.body.maxSalary} : null,
            req.body.minAge ? { age:req.body.minAge} : null,
            req.body.maxAge ? { age:req.body.maxAge} : null,
            req.body.gender ? { gender:req.body.gender} : null,
        );
        JobModel
        .findOneAndUpdate(
            {
                _id: req.params.id,       
            },
            updateValue  
        )
        .then((result) => {
            if (result) {
                res.status(201).json({
                    message: "Update Job successfully",
                    data: result
                })
            } else {
                res.status(500).json({ message: "Update Job failed" })
            }
        })
        .catch((err) => {
            res.status(500).json({ message: "Update Job failed" })
        })
    }
    static deleteJob(req,res){
        JobModel.findOneAndDelete( { _id: req.params.id} ) 
        .then(result=>{
            CompanyModel.findOneAndUpdate({
                _id: result.companyid,
            }, {
                $pull: {
                    joblist: { jobId:req.params.id },                                            
                }
            })
            .then((DataCompany) => { 
                res.status(201).json({
                    message: "Delete Job successfully",
                    data:result,
                    dataCompany:DataCompany
                })
            }).catch((err) => {
                res.status(500).json({  message: 'Delete Job failed' });
            });           
        }) 
        .catch(err=>{
            res.status(500).json( { message: 'Delete Job failed'} )
        })  
    }
    // static TestData(req,res){
       
    // }

}

module.exports= JobController;