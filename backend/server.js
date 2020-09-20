// Libraries
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config({ path: '../.env' });

console.log(process.env.DB_HOST);

// DB Connection
const studentOrgsController = require('./routes/studentOrgsController');
const createOrgController = require('./routes/createOrgController');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/studentOrgs', studentOrgsController);
app.use('/api/createOrg', createOrgController);

app.listen(3000, () => {
    console.log('server running on port 3000!');
});