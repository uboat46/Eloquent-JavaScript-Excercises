// Using the example data set from this chapter, compute the average age difference 
// between mothers and children (the age of the mother when the child is born). 
// You can use the average function defined earlier in this chapter.

// Note that not all the mothers mentioned in the data are themselves present in the array. 
// The byName object, which makes it easy to find a person’s object from their name, might be useful here.

//CODE AUTHOR = UBOAT46

var ancestry = require('./ancestry');
ancestry = JSON.parse(ancestry);

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

console.log(average(ancestry.map(function(person){
    return person.mother ? 
                byName[person.mother] ?
                        person.born - byName[person.mother].born : null
                : null;
}).filter(function(number){
    return number;
})))

// → 31.2