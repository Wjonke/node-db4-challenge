exports.seed = function(knex, Promise) {
  return knex('species').insert(
    [
      {
        "name": "Fuscia"
      }, 
      {
        "name": "Teal"
      }, 
      {
        "name": "Teal"
      }, 
      {
        "name": "Goldenrod"
      }, 
      {
        "name": "Turquoise"
      }, 
      {
        "name": "Purple"
      }, 
      {
        "name": "Turquoise"
      }, 
      {
        "name": "Red"
      }, 
      {
        "name": "Aquamarine"
      }, 
      {
        "name": "Maroon"
      }, 
      {
        "name": "Blue"
      }, 
      {
        "name": "Puce"
      }, 
      {
        "name": "Aquamarine"
      }, 
      {
        "name": "Mauv"
      }, 
      {
        "name": "Aquamarine"
      }, 
      {
        "name": "Maroon"
      }, 
      {
        "name": "Fuscia"
      }, 
      {
        "name": "Goldenrod"
      }, 
      {
        "name": "Puce"
      }, 
      {
        "name": "Puce"
      }
    ]
  );
};

//make relevant to the ingredients schema

// id	              integer	  
// name	            varchar(255)
