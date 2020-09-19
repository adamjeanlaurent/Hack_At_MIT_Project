const express = require('express');
const router = express.Router();
const mongoose = require('../db/db');

require('dotenv').config({ path: '../../.env' })

const StudentOrg = require('../models/studentOrg');

const studentOrgSchema = require('../db/studentOrgSchema');


// @route GET api/studentOrgs
// @desc Gets all University Of Rhode Island Student Org Titles And Descriptions
router.get('/', async (req, res) => {
    await console.log("Route started.");
    let StudentOrgModel = mongoose.model('StudentOrg', studentOrgSchema);
    await console.log("Model created.");

    await StudentOrgModel.find(function(err, data){
        if(err){
            console.log(err);
        } else {
            console.log(data);
            res.send(data);
        }
    });
});

router.get('/:category', async (req, res) => {
    const selectedCategory = req.params.category;
    await console.log("Route started.");
    let StudentOrgModel = mongoose.model('StudentOrg', studentOrgSchema);
    await console.log("Model created.");

    await StudentOrgModel.find({category:selectedCategory},function(err, data){
        if(err){
            console.log(err);
            res.send("Category not found.");
        } else {
            console.log(data);
            res.send(data);
        }
    });
});

module.exports = router;