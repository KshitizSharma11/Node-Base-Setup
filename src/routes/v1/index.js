const express = require('express');
const controllers = require('../../controllers');
const router = express.Router();
const {InfoController} = require('../../controllers');
router.get('/info',InfoController.info);
module.exports=router;