function ourFunction() {
    return this.name;
  };

const contextOne = { name: 'Hannah Montana' }
const contextTwo = { name: 'Miley Cirus'}

ourFunction = ourFunction.bind(contextOne);
ourFunction(); // Hannah Montana

ourFunction = ourFunction.bind(contextTwo);
ourFunction(); // Hannah Montana

// EXERCISE: Extend the method bind so that it allows to change context more than once
// Function.prototype.bind = function(context) {

// }