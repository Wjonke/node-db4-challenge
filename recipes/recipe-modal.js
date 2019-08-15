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

function deleteRecipe(){
  return db('recipes')

}
function addRecipe(){
  return db('recipes')

}
function updateRecipe(){
  return db('recipes')
    .update(changes)
    .where({ id })
}





function getShoppingList(){
  return db('')

}

function getInstructions(){
  return db('')

}
