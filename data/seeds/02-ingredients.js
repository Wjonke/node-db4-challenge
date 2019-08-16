//make relevant to the ingredients schema

// id	              integer	  
// name	            varchar(255)

exports.seed = function(knex, Promise) {
  return knex('ingredients').insert(
    [
      {
        "name": "Fuscia"
      }, 
      {
        "name": "Teal"
      }, 
      {
        "name": "Purple"
      }, 
      {
        "name": "Goldenrod"
      }, 
      {
        "name": "Turquoise"
      }, 
      {
        "name": "Orange"
      }, 
      {
        "name": "Skyblue"
      }, 
      {
        "name": "Red"
      }, 
      {
        "name": "Aquamarine"
      }
      
    ]
  );
};


