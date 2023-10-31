const express = require('express');
const axios = require('axios');
const personAPIRouter = express.Router();

const url = 'https://api.themoviedb.org/3/person/popular?language=en-US&page=1';

const config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.BEARER_TOKEN}`
  }
};

personAPIRouter.get('/', (req, res) => {
    axios.get(url, config)
        .then(response => {
            res.status(200).send(response.data);
        })
        .catch(error => {
            console.error('Ocorreu um erro ao fazer a solicitação:', error);
        });
});

  module.exports = personAPIRouter;