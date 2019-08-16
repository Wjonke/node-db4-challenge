const db = require('../data/db-config')

module.exports = {
  getRecipes,
  updateRecipe,
  deleteRecipe,
  addRecipe,
  getInstructions, 
  getShoppingList
}


function getRecipes(){
  return db('recipes')
}


function addRecipe(recipes){
  return db('recipes')
  .insert(recipes, 'id')
}

function updateRecipe(){
  return db('recipes')
    .update(changes)
    .where({ id })
}

function deleteRecipe(){
  return db('recipes')
  .where({ id })
  .del();
}

function getShoppingList(id) {
  return db("recipes as r")
  .innerJoin("recipes_ingredients as ri", "r.id", "=", "ri.recipe_id")
  .innerJoin("ingredients as i", "i.id", "=", "ri.ingredients_id")
  .select("r.name", "i.name", "ri.quantity")
  .where({ "r.id" : id })
}


function getInstructions(id) {
  return db("recipes")
  .select("recipes.steps")
  .where({ id })
}

