// Predict and explain first...
//  =============> I expect the function capitalise will turn first letter of string given by user into capital letter.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> The result was a Syntax error because str has been declared as parameter of function captialise before let reassign str.
// =============>
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
