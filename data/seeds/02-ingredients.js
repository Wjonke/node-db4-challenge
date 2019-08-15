exports.seed = function(knex, Promise) {
  return knex('species').insert([
    { species_name: "Star-nosed Mole" }, 
    { species_name: "Platypus" }, 
    { species_name: "Chameleon" }, 
    { species_name: "Snail" },
    { species_name: "Blue-footed Booby" }, 
    { species_name: "Anteater" }, 
    { species_name: "Minotaur" }, 
    { species_name: "Raccoon" },
    { species_name: 'Flamingo' },
    { species_name: 'Kookaburra' }
  ]);
};

//make relevant to the ingredients schema

// id	              integer	  
// name	            varchar(255)	  
// unit_of_measure	float(255)