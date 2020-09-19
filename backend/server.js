// Libraries
const express = require('express');
const cors = require('cors');

// DB Connection
const db = require("./db/db");
const collection = "orgs";

const studentOrgsController = require('./routes/studentOrgsController');

const app = express();

app.use(cors());

app.use('/api/studentOrgs', studentOrgsController);

app.listen(3000, () => {
    console.log('server running on port 3000!');
});