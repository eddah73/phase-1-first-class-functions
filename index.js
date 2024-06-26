function receivesAFunction(callback) {
    callback();
}
function varFunction() {
    return console.log("Creating a new Function called varFunction");
  }
  
  function returnsANamedFunction() {
    //passing and returning the varFunction that was defined above
    return varFunction;
  }
  function returnsAnAnonymousFunction() {
    return function() {
      console.log('Calling a new function within the scope of returnsAnAnonymousFunction');
    };
  };
  
  