const express = require('express');
const helmet = require('helmet');

const server = express();

const RecipeRouter = require('./recipes/recipe-router')
const IngredientsRouter = require('./ingredients/ingredients-router')

server.use(helmet());
server.use(express.json());

server.use ('/api/recipes', RecipeRouter)
server.use ('/api/ingredients', IngredientsRouter)


module.exports = server;
