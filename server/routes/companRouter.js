const express = require('express');
const router = express.Router();
const CompanyController = require('../controllers/companyController');

router.get('/',  CompanyController.showAll)
router.post('/',  CompanyController.createCompany)
router.put('/:id',  CompanyController.updateCompany)
router.delete('/:id',  CompanyController.deleteCompany)

module.exports = router;