// Libraries
const express = require('express');
const cors = require('cors');

require('dotenv').config({ path: '../.env' })

// DB Connection
const studentOrgsController = require('./routes/studentOrgsController');

const app = express();

app.use(cors());

app.use('/api/studentOrgs', studentOrgsController);

app.listen(3000, () => {
    console.log('server running on port 3000!');
});