const express = require('express');
const helmet = require('helmet');
const db = require('./data/db-config.js');
const server = express();

const RecipeRouter = require('./recipes/recipe-router')
const IngredientsRouter = require('./ingredients/ingredients-router')

server.use(helmet());
server.use(express.json());

server.use ('/api/recipes', RecipeRouter)
server.use ('/api/ingredients', IngredientsRouter)















////////////////////recipes//////////////////////

// get all recipes from the database
server.get('/api/recipes', async (req, res) => {
  try {
    const recipes = await db('recipes'); 
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json(error);
  }
});

// create recipe
server.post('/api/recipes', async (req, res) => {
  try {
    const [id] = await db('recipes').insert(req.body);

    const recipe = await db('recipes')
      .where({ id })
      .first();
    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json(error);
  }
});

// remove recipes
server.delete('/api/recipes/:id', async (req, res) => {
  try {
    const count = await db('recipes')
      .where({ id: req.params.id })
      .del();

    if (count > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Recipe not found' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

////////////////////////////recipes////////////////////////


//////////////////////////Ingredients//////////////////////

  // get all ingredients from the database
server.get('/api/ingredients', async (req, res) => {
  try {

    const ingredients = await db('ingredients') 
    res.status(200).json(ingredients);
  } catch (error) {
    res.status(500).json(error);
  }
});

// create ingredient
server.post('/api/ingredients', async (req, res) => {
  try {
    const [id] = await db('ingredients').insert(req.body);

    const ingredient = await db('ingredients')
      .where({ id })
      .first();
    res.status(201).json(ingredient);
  } catch (error) {
    res.status(500).json(error);
  }
});

// remove ingredient
server.delete('/api/ingredients/:id', async (req, res) => {
  try {
    const count = await db('ingredients')
      .where({ id: req.params.id })
      .del();

    if (count > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Ingredient not found' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
//////////////////////////Ingredients//////////////////////


module.exports = server;
