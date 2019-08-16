const express = require('express');
const Ingredients = require('./ingredients-model');
const router = express.Router();

router.get('/', (req, res) => {
  Ingredients.getIngredients()
  .then(ingredients => {res.status(200).json(ingredients)})
  .catch(err => {res.status(500).json(err)})
});


router.post('/', (req, res) => {
  const addIngredient = req.body
  Ingredients.addIngredient(ingredient)
  .then(ingredient => {res.status(200).json(ingredient)})
  .catch(err => {res.status(500).json(err)})
})
  

router.put('/:id', (req, res) => {
  const changes = req.body
  const {id} = req.params
  Ingredients.updateIngredient(changes, id)
  .then(ingredient => {res.status(200).json(ingredient)})
  .catch(err => {res.status(500).json(err)})
})


router.delete('/:id', (req, res) => {
const { id } = req.params;
Ingredients.deleteIngredient(id)
  .then(ingredient => {res.status(200).json(ingredient)})
  .catch(err => {res.status(500).json(err)})
})



module.exports = router