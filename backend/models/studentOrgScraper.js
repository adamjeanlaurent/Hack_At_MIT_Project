const fetch = require('node-fetch');
const cheerio = require('cheerio');

const WebScraper = require('./webScraper');

class StudentOrgScraper extends WebScraper {
    async getNamesAndDescriptions() {
        let html = await this.getHTML();
        const $ = cheerio.load(html);
        $('.AccordionPanelContent').each((i ,el) => {
            let table = $(el).find('table');
            let orgName = $(table).find('td').next().html(); // idk why this works
            // let orgDescription = $(table).children().children().next().next().next().next().next();
            let orgDescription = $(table).children().children();

            $(orgDescription).each((i, el) => {
                if($(el).html().includes('Description')) console.log($(el).text());
            });
        });
    }
}

module.exports = StudentOrgScraper;