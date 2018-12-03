const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const should = chai.should();
const Job = require('../models/Job')
const Company = require('../models/Company')
const server = require('../app')

describe('Job GET', function () {
  var id_job = ''
  var id_company = ''
  beforeEach(function (done) {
    const company = new Company({
        name: 'PT Hebat Citrapasific',
        email : 'email@majuterus.com',
        profile : 'PT. Hebat Citrapasific berdiri sejak tahun 1988 dan berdedikasi untuk meningkatkan kualitas hidup masyarakat dengan menyediakan produk-produk suplemen kesehatan dan personal care.',
        logo: 'https://source.unsplash.com/random/300x200' ,
        nameUser: 'Ratih',
        telp:  '081221133777444',
        address : 'Kompleks Perkantoran Taman Meruya Blok N21-26',
        city :  'Jakarta, DKI Jakarta',
        website :  'www.HebatCitra.com',
        industry :  'personal care',
        totalEmployees :  100,
    })
    company.save((err,res) => {     
      id_company = res._id
      done()
    })
  })

  beforeEach(function (done) {
    Job.create({
        name: 'IT Programmer',
        function : 'Programmer', 
        description : 'Memastikan pengembangan Sistem Informasi yang matang melalui perancangan work flow system.', 
        education : 'Pendidikan Teknik Informatika dari universitas terkemuka.', 
        qualification : 'Pengalaman sebagai programmer atau web programmer; atau terbuka bagi Fresh Graduates.', 
        location : 'Jakarta Selatan' ,
        minSalary : '12000000' , 
        maxSalary : '15000000' ,
        minAge : 28 ,
        maxAge : 35 ,
        gender : 'pria/wanita',
        companyid: id_company 
    })
    .then((result) => {
        id_job = result._id
      done()
    }).catch((err) => {
        console.log(err)
    });
  })

  it('/GET /Job it should get all Jobs data ', function (done) {
    chai.request(server)
    .get('/job')
    .end(function(err, res) {
      res.body.should.be.an('object').to.have.property('message')
      res.body.should.be.an('object').to.have.property('data').with.lengthOf(1).should.be.an('object')
      res.body.data[0].should.have.property('name')
      res.body.data[0].should.have.property('location')
      res.body.data[0].companyid.should.have.property('name')
      res.body.data[0].companyid.should.have.property('industry')
      res.body.message.should.equal('Get data Jobs successfully')
      res.should.have.status(200)
      done()
    })
  })

  it('/GET /job/detail it should get one job detail data ', function (done) {
    chai.request(server)
    .get('/job/detail/'+id_job)
    .end(function(err, res) {
      res.body.should.be.an('object').to.have.property('message')
      res.body.should.be.an('object').to.have.property('data')
      res.body.data.should.have.property('name')
      res.body.data.should.have.property('location')
      res.body.data.companyid.should.have.property('name')
      res.body.data.companyid.should.have.property('industry')
      res.body.message.should.equal('Get data Job detail successfully')
      res.should.have.status(200)
      done()
    })
  })

  it('/GET /job/detail it should give error message when get one job data ', function (done) {
    chai.request(server)
    .get('/job/detail/'+'AAA')
    .end(function(err, res) {
      res.body.should.be.an('object').to.have.property('message')
      res.body.message.should.equal('Get data Job failed')
      res.should.have.status(500)
      done()
    })
  })
  it('POST /job post one job data ', function (done) {
    chai.request(server)
    .post('/job')
    .send({
        name: 'MARKETING EXECUTIVE',
        function : 'MARKETING', 
        description : 'Business development', 
        education : 'SMA/SMK', 
        qualification : 'Min. Nilai Rata-Rata 6', 
        location : 'Jakarta Utara' ,
        minSalary : '11000000' , 
        maxSalary : '12000000' ,
        minAge : 20 ,
        maxAge : 35 ,
        gender : 'wanita',
        companyid: id_company 
    })
    .end(function(err, res) {
      res.body.should.be.an('object').to.have.property('message')
      res.body.should.be.an('object').to.have.property('data')
      res.body.should.be.an('object').to.have.property('dataCompany')
      res.body.data.should.have.property('_id')
      res.body.data.should.have.property('name')
      res.body.data.should.have.property('location')
      res.body.data.should.have.property('function')
      res.body.data.should.have.property('description')
      res.body.data.should.have.property('qualification')
      res.body.data.should.have.property('minSalary')
      res.body.data.should.have.property('maxSalary')
      res.body.data.should.have.property('minAge')
      res.body.data.should.have.property('maxAge')
      res.body.data.should.have.property('gender')
      res.body.data.should.have.property('companyid')
      res.body.data.should.have.property('createdAt')
      res.body.data.should.have.property('updatedAt')
      res.body.dataCompany.should.have.property('name')
      res.body.dataCompany.should.have.property('industry')
      res.body.message.should.equal('Create Job successfully')
      res.should.have.status(201)
      done()
    })
  })

  it('POST /job it should give error message when create Job ', function (done) {
    chai.request(server)
    .post('/job')
    .send({
        companyid : 'AA'
    })
    .end(function(err, res) {
        res.body.should.be.an('object').to.have.property('message')
        res.body.message.should.equal('Create Job failed')
        res.should.have.status(500)
        done()
    })
  })  

  it('POST /job/searchbyName it should give jobs by name ', function (done) {
    chai.request(server)
    .post('/job/searchbyName')
    .send({
        name : 'IT Programmer'
    })
    .end(function(err, res) {
        res.body.should.be.an('object').to.have.property('message')
        res.body.should.be.an('object').to.have.property('data').with.lengthOf(1).should.be.an('object')
        res.body.data[0].should.have.property('name')
        res.body.data[0].should.have.property('location')
        res.body.data[0].companyid.should.have.property('name')
        res.body.data[0].companyid.should.have.property('industry')
        res.body.message.should.equal('Get data Jobs successfully')
        done()
    })
  }) 


  it('POST /job/search it should give jobs', function (done) {
    chai.request(server)
    .post('/job/search')
    .send({
        name : 'IT Programmer',
        function : 'Programm', 
        description : 'flow', 
        education : 'Teknik Informatika', 
        qualification : 'web', 
        location : 'Jakarta Selatan',
        companyName : 'Hebat'
    })
    .end(function(err, res) {
        res.body.should.be.an('object').to.have.property('message')
        res.body.should.be.an('object').to.have.property('data').with.lengthOf(1).should.be.an('object')
        res.body.data[0].should.have.property('name')
        res.body.data[0].should.have.property('location')
        res.body.data[0].Company[0].should.have.property('name')
        res.body.data[0].Company[0].should.have.property('industry')
        res.body.message.should.equal('Get data Jobs successfully')
        done()
    })
  }) 
  

  it('PUT /job it should update one job data', function (done) {
    chai.request(server)
    .put('/job/'+id_job )
    .send({
        maxSalary : 50000000,
    })
    .end(function(err, res) {
        res.body.should.be.an('object').to.have.property('message')
        res.body.should.be.an('object').to.have.property('data')
        res.body.data.should.have.property('_id')
        res.body.data.should.have.property('name')
        res.body.data.should.have.property('location')
        res.body.data.should.have.property('function')
        res.body.data.should.have.property('description')
        res.body.data.should.have.property('qualification')
        res.body.data.should.have.property('minSalary')
        res.body.data.should.have.property('maxSalary')
        res.body.data.should.have.property('minAge')
        res.body.data.should.have.property('maxAge')
        res.body.data.should.have.property('gender')
        res.body.data.should.have.property('companyid')
        res.body.data.should.have.property('createdAt')
        res.body.data.should.have.property('updatedAt')
        res.body.message.should.equal('Update Job successfully')
        res.should.have.status(201)
        done()
    })
  }) 

  it('PUT /job it should give error message when update one job data', function (done) {
    chai.request(server)
    .put('/job/'+ '5504757329a5662965045555')
    .send({
        maxSalary : 50000000,
    })
    .end(function(err, res) {
        res.body.should.be.an('object').to.have.property('message')
        res.should.have.status(500)
        done()
    })
  }) 
  it('PUT /job it should give error message when update wrong id', function (done) {
    chai.request(server)
    .put('/job/'+ 'AA')
    .send({
        maxSalary : 50000000,
    })
    .end(function(err, res) {
        res.body.should.be.an('object').to.have.property('message')
        res.should.have.status(500)
        done()
    })
  }) 

  it('DELETE /job it should delete one job data', function (done) {
    chai.request(server)
    .delete('/job/'+id_job )
    .end(function(err, res) {
        res.body.should.be.an('object').to.have.property('message')
        res.body.should.be.an('object').to.have.property('data')
        res.body.data.should.have.property('_id')
        res.body.data.should.have.property('name')
        res.body.data.should.have.property('location')
        res.body.data.should.have.property('function')
        res.body.data.should.have.property('description')
        res.body.data.should.have.property('qualification')
        res.body.data.should.have.property('minSalary')
        res.body.data.should.have.property('maxSalary')
        res.body.data.should.have.property('minAge')
        res.body.data.should.have.property('maxAge')
        res.body.data.should.have.property('gender')
        res.body.data.should.have.property('companyid')
        res.body.data.should.have.property('createdAt')
        res.body.data.should.have.property('updatedAt')
        res.body.message.should.equal('Delete Job successfully')
        res.should.have.status(201)
        done()
    })
  }) 
  it('DELETE /job it should give error message when invalid id', function (done) {
    chai.request(server)
    .delete('/job/'+'5504757329a5662965045555' )
    .end(function(err, res) {
        res.body.should.be.an('object').to.have.property('message')
        res.body.message.should.equal('Delete Job failed')
        res.should.have.status(500)
        done()
    })
  }) 
 

  afterEach(function (done) {
    Company.remove({}, function (err) {
    })
    Job.remove({}, function (err) {
        done()
    })
  })

  
 })
