const express = require('express')
const controller = require('../controllers/user') 

const router = express.Router();
router.post('/user',controller)


module.exports = router