const express = require('express');
const StudentOrgScraper = require('../models/studentOrgScraper');
const router = express.Router();

// @route GET api/studentOrgs
// @desc Gets all University Of Rhode Island Student Org Titles And Descriptions
router.get('/', async (req, res) => {
    let x = new StudentOrgScraper('https://studentorg.apps.uri.edu');
    let z = await x.getNamesAndDescriptions();
    res.send('hi');
});

module.exports = router;