const express = require('express');
const Recipes = require('./recipe-model');
const router = express.Router();

//tests passed
router.get('/', (req, res) => {
  Recipes.getRecipes()
  .then(recipes => {res.status(200).json(recipes)})
  .catch(err => {res.status(500).json(err)})
});


//tests passed
router.post('/', (req, res) => {
  const addRecipe = req.body
  Recipes.addRecipe(addRecipe)
  .then(recipe => {res.status(200).json(recipe)})
  .catch(err => {res.status(500).json(err)})
})
  

router.put('/:id', (req, res) => {
  const changes = req.body
  const {id} = req.params
  Recipes.updateRecipe(changes, id)
  .then(recipe => {res.status(200).json(recipe)})
  .catch(err => {res.status(500).json(err)})
})


router.delete('/:id', (req, res) => {
const { id } = req.params;
Recipes.deleteRecipe(id)
  .then(recipe => {res.status(200).json(recipe)})
  .catch(err => {res.status(500).json(err)})
})

router.get('/:id/shoppinglist', (req, res) => {  
  const { id } = req.params; 
  Recipes.getShoppingList(id)  
    .then(recipe => {res.status(200).json(recipe)})  
    .catch(err => {res.status(500).json({message: "Big ole error"})  
  })
})

router.get("/:id/steps", (req, res) => {
  const { id } = req.params;
  Recipes.getInstructions(id)
  .then(recipe => {
    res.status(200).json(recipe)
  })
  .catch(err => {
    res.status(500).json({message: "Big ole error"})
  })
})


module.exports = router