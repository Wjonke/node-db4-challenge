exports.seed = function(knex, Promise) {
  return knex('zoo_animals').insert([
    { recipe_id: 1, ingredient_id: 1 },
    { recipe_id: 1, ingredient_id: 2 },
    { recipe_id: 1, ingredient_id: 3 },
    { recipe_id: 1, ingredient_id: 4 },
    { recipe_id: 1, ingredient_id: 5 },
    { recipe_id: 1, ingredient_id: 8 },
    { recipe_id: 2, ingredient_id: 3 },
    { recipe_id: 2, ingredient_id: 5 },
    { recipe_id: 2, ingredient_id: 6 },
    { recipe_id: 2, ingredient_id: 7 },
    { recipe_id: 2, ingredient_id: 8 },
    { recipe_id: 2, ingredient_id: 9 },
    { recipe_id: 2, ingredient_id: 10 },
    { recipe_id: 2, ingredient_id: 11 }
  ]);
};

//make relevant to this seed
//recipe_id	integer	  
//ingredient_id	integer