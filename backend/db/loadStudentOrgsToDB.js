const mongoose = require('./db');
const fetch = require('node-fetch');
const cheerio = require('cheerio');

const WebScraper = require('../models/webScraper');
const StudentOrg = require('../models/studentOrg');
const StudentOrgScraper = require('../models/studentOrgScraper');
const studentOrgSchema = require('./studentOrgSchema');

let loadStudentOrgsToDB = async () => {
    let studentOrgScraper = new StudentOrgScraper('https://studentorg.apps.uri.edu/');
    let studentOrgs = await studentOrgScraper.scrape();

    const StudentOrgModel = mongoose.model('StudentOrg', studentOrgSchema);

    for(let s of studentOrgs) { 
        const newStudentOrg = new StudentOrgModel({
            name: s.name,
            description: s.description,
            category: s.category
        });

        newStudentOrg.save();
    }
};

loadStudentOrgsToDB();
