const CompanyModel= require('../models/Company')

class CompanyController {
    static showAll(req,res){  
        CompanyModel
        .find({}).populate('joblist').limit(10)
        .then((result) => {
            res.status(200).json({ 
                message: "Get Companies successfully",
                data:result 
            });
        })
        .catch((err) => {
            res.status(500).json({ message: `Get data Companies failed` });
        })
    }
    static createCompany(req,res){
        CompanyModel.create({ 
            name: req.body.name,
            email : req.body.email,
            profile :  req.body.profile,
            logo: req.body.logo ,
            nameUser: req.body.nameUser,
            telp:  req.body.telp,
            address :  req.body.address,
            city :  req.body.city,
            website :  req.body.website,
            industry :  req.body.industry,
            totalEmployees :  req.body.totalEmployees,
        })
        .then(result=>{
            res.status(201).json( { 
                message: "Create Company successfully",
                data:result
            }) 
        })      
        .catch(err=>{
            res.status(500).json({ message: 'Post data Companies failed'})
        })          
    }
    static updateCompany(req,res){
        let updateValue={};
        Object.assign(updateValue, 
            req.body.name ? { name:req.body.name} : null,
            req.body.email ? { email:req.body.email} : null,
            req.body.profile ? { profile : req.body.profile} : null,
            req.body.logo ? { logo:req.body.logo } : null ,
            req.body.nameUser ?  { nameUser:req.body.nameUser} : null,
            req.body.telp ?  { telp:req.body.telp} : null,
            req.body.address ?  { address:req.body.address} : null,
            req.body.city ?  { city:req.body.city} : null,
            req.body.website ?  { website:req.body.website} : null,
            req.body.industry ?  { industry:req.body.industry} : null,
            req.body.totalEmployees ?  { totalEmployees:req.body.totalEmployees} : null,
        );
        CompanyModel
        .findOneAndUpdate(
            {
                _id: req.params.id,       
            },
            updateValue  
        )
        .then((result) => {
            res.status(201).json({
                message: "Update company successfully",
                data: result
            })
        })
        .catch((err) => {
            res.status(500).json({ message: "Update company failed" })
        })
    }
    static deleteCompany(req,res){
        CompanyModel.findOneAndDelete( { _id: req.params.id} ) 
        .then(result=>{
            res.status(201).json( {
                message: "Delete Company successfully",
                data:result
            } ) 
        }) 
        .catch(err=>{
            res.status(500).json( { message: 'Delete company failed'} )
        })  
    }
    static TestData(req,res){
       
    }

}

module.exports= CompanyController;