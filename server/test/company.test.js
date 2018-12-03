const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const should = chai.should();
const Company = require('../models/Company')
const server = require('../app')

describe('Company GET', function () {
  var id_company = ''
  beforeEach(function (done) {
    const company = new Company({
        name: 'PT Indocare Citrapasific',
        email : 'email@indocare.com',
        profile : 'PT. Indocare Citrapasific berdiri sejak tahun 1988 dan berdedikasi untuk meningkatkan kualitas hidup masyarakat dengan menyediakan produk-produk suplemen kesehatan dan personal care.',
        logo: 'https://source.unsplash.com/random/300x200' ,
        nameUser: 'Ratih',
        telp:  '081221133777444',
        address : 'Kompleks Perkantoran Taman Meruya Blok N21-26',
        city :  'Jakarta, DKI Jakarta',
        website :  'www.indocare.com',
        industry :  'personal care',
        totalEmployees :  100,
    })
    company.save((err,res) => {
      id_company = res._id
      done()
    })
  })

  beforeEach(function (done) {
    Company.create({
        name: 'PT. Secret Recipe Indonesia',
        email : 'email@secret.com',
        profile : 'PT Secret Recipe Indonesia merupakan bagian dari Secret Recipe, internasional lifestyle cafe yang tersebar di berbagai negara dengan lebih dari 250 restauran. Secret recipe menawarkan lebih dari 20 jenis kue, 10 pastri, 50 makanan utama, dan 30 minuman untuk memenuhi kebutuhan setiap pelanggan. PT. Secret Recipe Indonesia sendiri telah bergerak dalam bidang makanan & minuman (restauran) selama 13 tahun dengan 13 cabang di Jakarta, Tangerang, Bekasi, dan Surabaya.',
        logo: 'https://source.unsplash.com/random/300x200' ,
        nameUser: 'Mas Secret',
        telp:  '0811333344477777',
        address : 'Business Park Kebun Jeruk Blok C2 No. 17-18',
        city :  'Jakarta Barat',
        website :  'www.secret.com',
        industry :  'food',
        totalEmployees :  50,
    })
    .then(function() {
      done()
    })
  })

  afterEach(function (done) {
    Company.remove({}, function (err) {
      done()
    })
  })

  it('/GET /company it should get all companies data ', function (done) {
    chai.request(server)
    .get('/company')
    .end(function(err, res) {
      res.body.should.be.an('object').to.have.property('message')
      res.body.should.be.an('object').to.have.property('data').with.lengthOf(2).should.be.an('object')
      res.body.data[0].should.have.property('name')
      res.body.data[0].should.have.property('email')
      res.body.data[0].should.have.property('profile')
      res.body.data[0].should.have.property('logo')
      res.body.data[0].should.have.property('telp')
      res.body.data[0].should.have.property('address')
      res.body.data[0].should.have.property('city')
      res.body.data[0].should.have.property('website')
      res.body.data[0].should.have.property('industry')
      res.body.data[0].should.have.property('createdAt')
      res.body.data[0].should.have.property('updatedAt')
      res.body.data[0].should.have.property('__v')
      res.body.message.should.equal('Get Companies successfully')
      res.should.have.status(200)
      done()
    })
  })

  it('POST /company post one Company data ', function (done) {
    chai.request(server)
    .post('/company')
    .send({
        name: 'PT. Maju Recipe Indonesia',
        email : 'email@maju.com',
        profile : 'PT Maju Recipe Indonesia merupakan bagian dari Secret Recipe, internasional lifestyle cafe yang tersebar di berbagai negara dengan lebih dari 250 restauran. Secret recipe menawarkan lebih dari 20 jenis kue, 10 pastri, 50 makanan utama, dan 30 minuman untuk memenuhi kebutuhan setiap pelanggan. PT. Secret Recipe Indonesia sendiri telah bergerak dalam bidang makanan & minuman (restauran) selama 13 tahun dengan 13 cabang di Jakarta, Tangerang, Bekasi, dan Surabaya.',
        logo: 'https://source.unsplash.com/random/300x200' ,
        nameUser: 'Mas Secret',
        telp:  '0811333344477777',
        address : 'Business Park Kebun Jeruk Blok C2 No. 17-18',
        city :  'Jakarta Barat',
        website :  'www.maju.com',
        industry :  'food',
        totalEmployees :  50,
    })
    .end(function(err, res) {
        res.body.should.be.an('object').to.have.property('message')
        res.body.should.be.an('object').to.have.property('data')
        res.body.data.should.have.property('name')
        res.body.data.should.have.property('email')
        res.body.data.should.have.property('profile')
        res.body.data.should.have.property('logo')
        res.body.data.should.have.property('telp')
        res.body.data.should.have.property('address')
        res.body.data.should.have.property('city')
        res.body.data.should.have.property('website')
        res.body.data.should.have.property('industry')
        res.body.data.should.have.property('createdAt')
        res.body.data.should.have.property('updatedAt')
        res.body.data.should.have.property('__v')
        res.body.message.should.equal('Create Company successfully')
        res.should.have.status(201)
        done()
    })
  })


  it('POST /company post should give error message when create company ', function (done) {
    chai.request(server)
    .post('/company')
    .send({
        email : 'email@indocare.com'
    })
    .end(function(err, res) {
        res.body.should.be.an('object').to.have.property('message')
        res.body.message.should.equal('Post data Companies failed')
        res.should.have.status(500)
        done()
    })
  })


  it('PUT /company/id should update one Company data ', function (done) {
    chai.request(server)
    .put('/company/'+id_company)
    .send({
        name: "PT Serba Bisa",
    })
    .end(function(err, res) {
        res.body.should.be.an('object').to.have.property('message')
        res.body.should.be.an('object').to.have.property('data')
        res.body.data.should.have.property('name')
        res.body.data.should.have.property('email')
        res.body.data.should.have.property('profile')
        res.body.data.should.have.property('logo')
        res.body.data.should.have.property('telp')
        res.body.data.should.have.property('address')
        res.body.data.should.have.property('city')
        res.body.data.should.have.property('website')
        res.body.data.should.have.property('industry')
        res.body.data.should.have.property('createdAt')
        res.body.data.should.have.property('updatedAt')
        res.body.data.should.have.property('__v')
        res.body.message.should.equal('Update company successfully')
        res.should.have.status(201)
        done()
    })
  })

  it('PUT /company/id should give error message when update one Company data ', function (done) {
    chai.request(server)
    .put('/company/'+id_company)
    .send({
        name: "PT Serba Bisa",
        email: "email@secret.com"
    })
    .end(function(err, res) {
        res.body.should.be.an('object').to.have.property('message')
        res.body.message.should.equal('Update company failed')
        res.should.have.status(500)
        done()
    })
  })

  it('PUT /company/id should give error message when update id company not found  ', function (done) {
    chai.request(server)
    .put('/company/'+'123456')
    .send({
        name: "PT Serba Bisa"
    })
    .end(function(err, res) {
        res.body.should.be.an('object').to.have.property('message')
        res.body.message.should.equal('Update company failed')
        res.should.have.status(500)
        done()
    })
  })
  it('it should delete one company data ', function (done) {
    chai.request(server)
    .delete('/company/'+id_company)
    .end(function(err, res) {
        res.body.should.be.an('object').to.have.property('message')
        res.body.should.be.an('object').to.have.property('data')
        res.body.data.should.have.property('name')
        res.body.data.should.have.property('email')
        res.body.data.should.have.property('profile')
        res.body.data.should.have.property('logo')
        res.body.data.should.have.property('telp')
        res.body.data.should.have.property('address')
        res.body.data.should.have.property('city')
        res.body.data.should.have.property('website')
        res.body.data.should.have.property('industry')
        res.body.data.should.have.property('createdAt')
        res.body.data.should.have.property('updatedAt')
        res.body.data.should.have.property('__v')   
        res.body.message.should.equal('Delete Company successfully')
        res.body.data.name.should.equal('PT Indocare Citrapasific')
        res.body.data.email.should.equal('email@indocare.com')
        res.body.data.profile.should.equal('PT. Indocare Citrapasific berdiri sejak tahun 1988 dan berdedikasi untuk meningkatkan kualitas hidup masyarakat dengan menyediakan produk-produk suplemen kesehatan dan personal care.')   
        res.should.have.status(201)
        done()      
    })
  })
  it('it should give error message when delete one company data ', function (done) {
    chai.request(server)
    .delete('/company/'+'AA')
    .end(function(err, res) {
        res.body.should.be.an('object').to.have.property('message')
        res.body.message.should.equal('Delete company failed')
        res.should.have.status(500)
        done()      
    })
  })
})
