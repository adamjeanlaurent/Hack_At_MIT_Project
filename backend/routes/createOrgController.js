const express = require('express');
const router = express.Router();
const mongoose = require('../db/db');
require('dotenv').config({ path: '../../.env' })
const StudentOrg = require('../models/studentOrg');
const studentOrgSchema = require('../db/studentOrgSchema');

// @route POST api/createOrg
// @desc Creates document for a University of Rhode Island Student Org in MongoDB database.
router.get('/', async(req, res) => {
    
});

module.exports = router;