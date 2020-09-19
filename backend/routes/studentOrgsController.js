const express = require('express');
const router = express.Router();
const mongoose = require('../db/db');
const StudentOrg = require('../models/studentOrg');
const studentOrgSchema = require('../db/studentOrgSchema');

// @route GET api/studentOrgs
// @desc Gets all University Of Rhode Island Student Org Titles And Descriptions
router.get('/', async (req, res) => {
    console.log("Route started.");
    const StudentOrgModel = mongoose.model('StudentOrg', studentOrgSchema);
    console.log("Model created.");

    StudentOrgModel.find(function(err, data){
        if(err){
            console.log(err);
        } else {
            console.log(data);
            res.send(data);
        }
    });
});

module.exports = router;