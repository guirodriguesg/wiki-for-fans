const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

const charactersRouter = require('./api/routes/characters-router');


app.use(express.json());
app.use(cors());
app.use('/api/v1/characters', charactersRouter);

app.listen(3000, () => console.log('server starting...'));
