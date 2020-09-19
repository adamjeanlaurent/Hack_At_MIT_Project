const fetch = require('node-fetch');
const cheerio = require('cheerio');

class WebScraper {
    constructor(url) {
        this.url = url;
    }

    async getHTML() {
        let response = await fetch(this.url);
        let data = await response.text();

        return data;
    }
}

module.exports = WebScraper;