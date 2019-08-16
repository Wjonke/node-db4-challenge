//make relevant to this seed
//recipe_id	integer	  
//ingredients_id	integer
//quantity       float(255)	  


exports.seed = function(knex, Promise) {
  return knex('recipes_ingredients').insert([
    { 'recipe_id': 1, 'ingredients_id': 1, quantity:1 },
    { 'recipe_id': 1, 'ingredients_id': 2, quantity:1 },
    { 'recipe_id': 1, 'ingredients_id': 3, quantity:1 },
    { 'recipe_id': 2, 'ingredients_id': 4, quantity:1 },
    { 'recipe_id': 2, 'ingredients_id': 5, quantity:1 },
    { 'recipe_id': 2, 'ingredients_id': 8, quantity:1 },
    { 'recipe_id': 3, 'ingredients_id': 3, quantity:1 },
    { 'recipe_id': 3, 'ingredients_id': 5, quantity:1 },
    { 'recipe_id': 4, 'ingredients_id': 6, quantity:1 },
    { 'recipe_id': 4, 'ingredients_id': 7, quantity:1 },
    { 'recipe_id': 5, 'ingredients_id': 8, quantity:1 },
    { 'recipe_id': 5, 'ingredients_id': 9, quantity:1 },
    { 'recipe_id': 6, 'ingredients_id': 10, quantity:1 },
    { 'recipe_id': 6, 'ingredients_id': 11, quantity:1 }
  ]);
};

