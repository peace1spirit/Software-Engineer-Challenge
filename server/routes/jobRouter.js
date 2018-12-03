const express = require('express');
const router = express.Router();
const JobController = require('../controllers/jobController');

router.get('/',  JobController.showAll)
router.get('/all',  JobController.showGiveAll)
router.get('/detail/:id',  JobController.showDetail)

router.post('/',  JobController.createJob)
router.post('/search',  JobController.showByFilter)
router.post('/searchbyName',  JobController.showByFilterName)

router.put('/:id',  JobController.updateJob)
router.delete('/:id',  JobController.deleteJob)

module.exports = router;