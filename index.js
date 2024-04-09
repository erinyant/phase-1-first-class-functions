function receivesAFunction(callback) {
    if (typeof callback === 'function') {
      callback(); // invokes the callback function?
    } else {
      console.log("No valid callback function provided.");
    }
  }


function returnsANamedFunction() {
// defined function name, assigned it to a variable
    function namedFunction() {
        console.log("Hello from my named function!")
    }

    return namedFunction;
}


function returnsAnAnonymousFunction() {
    // Return anonymous function directly?
    return function() {
      console.log("Hello from my anonymous function!");
    };
  }