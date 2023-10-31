const express = require('express');
require('dotenv').config();

const app = express();

const personRouter = require('./api/routes/person-api');


app.use(express.json());
app.use('/api/v1/person', personRouter);

app.listen(3000, () => console.log('server starting...'));
