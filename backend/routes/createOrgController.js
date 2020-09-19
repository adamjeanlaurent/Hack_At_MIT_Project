const express = require('express');
const router = express.Router();
const mongoose = require('../db/db');
require('dotenv').config({ path: '../../.env' })
const StudentOrg = require('../models/studentOrg');
const studentOrgSchema = require('../db/studentOrgSchema');

// @route GET api/createOrg
// @desc Creates document for a University of Rhode Island Student Org in MongoDB database.
router.get('/', async(req, res) => {
    console.log(req.body);

    const name = req.body.name;
    const desc = req.body.description;
    const category = req.body.category;

    const StudentOrgModel = mongoose.model('StudentOrg', studentOrgSchema);
    
    const newStudentOrg = new StudentOrgModel({
        name: name,
        description: desc,
        category: category
    });

    newStudentOrg.save(function(err, data) {
        if(err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});

module.exports = router;