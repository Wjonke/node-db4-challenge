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


function addRecipe(){
  return db('recipes')
  .insert(newRecipe, 'id')
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



function getShoppingList(){
  return db('')

}

function getInstructions(){
  return db('')

}
