const express = require('express')
const router = express.Router()
const { getResume, setResume, updateResume, deleteResume } = require('../controllers/resume')

router.route('/').get(getResume).post(setResume)
router.route('/:id').put(updateResume).delete(deleteResume)

module.exports = router