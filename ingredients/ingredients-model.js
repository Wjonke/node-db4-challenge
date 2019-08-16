const db = require('../data/db-config')

module.exports = {
  getIngredients,
  updateIngredient,
  deleteIngredient,
  addIngredient,
  
}


function getIngredients(){
  return db('ingredients')
}

function addIngredient(){
  return db('ingredients')
  .insert(ingredient, 'id')
}

function updateIngredient(){
  return db('ingredients')
    .update(changes)
    .where({ id })
}

function deleteIngredient(){
  return db('ingredients')
  .where({ id })
  .del();
}




