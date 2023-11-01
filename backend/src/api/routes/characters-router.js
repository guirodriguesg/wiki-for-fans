const express = require('express');
const charactersVikings = require('../data/characters-vikings');
const charactersAPIRouter = express.Router();

charactersAPIRouter.get('/', (req, res) => {
  console.log(charactersVikings);
   res.status(200).send(JSON.stringify(charactersVikings));
});

module.exports = charactersAPIRouter;