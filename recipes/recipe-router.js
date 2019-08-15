const express = require('express');
const Recipes = require('./recipe-modal');
const router = express.Router();

router.get('/', (req, res) => {
  Recipes.getRecipes()
  .then(recipes => {res.status(200).json(recipes)})
  .catch(err => {res.status(500).json(err)})
});


router.post('/', (req, res) => {
  const addRecipe = req.body
  Recipes.postRecipe(addRecipe)
  .then(recipe => {res.status(200).json(recipe)})
  .catch(err => {res.status(500).json(err)})
})
  
router.update(
  
)
    
router.delete(
  
)
      


module.exports = router