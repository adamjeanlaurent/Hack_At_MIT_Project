const fetch = require('node-fetch');
const cheerio = require('cheerio');

const WebScraper = require('./webScraper');
const StudentOrg = require('./studentOrg');

class StudentOrgScraper extends WebScraper {
    async scrape() {
        let studentOrgs = [];
        let html = await this.getHTML();
        const $ = cheerio.load(html);
        $('.AccordionPanelContent').each((i ,el) => {
            let table = $(el).find('table');
            let orgName = $(table).find('td').next().html(); 
            let tableRows = $(table).children().children();

            let orgDescription = null; 
            let orgCategory = null;
            
            $(tableRows).each((i, tableRow) => {   
                if($(tableRow).html().includes('Description')) {
                    orgDescription = $(tableRow).text();
                    orgDescription = this.removeLineBreaksAndMultipleSpaces(orgDescription);
                    orgDescription = this.removeDescriptionLabel(orgDescription);
                }

                else if($(tableRow).html().includes('Category')) {
                    orgCategory = $(tableRow).text();
                    orgCategory = this.removeLineBreaksAndMultipleSpaces(orgCategory);
                    orgCategory = this.removeCategoryLabel(orgCategory);
                }

                if(orgName && orgCategory && orgDescription) {
                    studentOrgs.push(new StudentOrg(orgName, orgDescription, orgCategory));
                }
            });
        });
        return studentOrgs;
    }

    removeLineBreaksAndMultipleSpaces(badStr) {
        let cleanStr = badStr.replace(/(\r\n|\n|\r)/gm,""); // removes line breaks 
        cleanStr = cleanStr.replace(/\s\s+/g, ' '); // replaces multiple spaces with a single space
        return cleanStr;
    }

    removeDescriptionLabel(desc) {
        return desc.replace('Description:', '').trim();
    }

    removeCategoryLabel(categ) {
        return categ.replace('Category:', '').trim();
    }
}

module.exports = StudentOrgScraper;