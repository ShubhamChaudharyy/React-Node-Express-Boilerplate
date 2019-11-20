const express = require('express')
const router=express.Router();
const sendfileController=require('../controllers/file')

router.get('/',sendfileController.getfile);
module.exports =router