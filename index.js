//function one
function receivesAFunction(cb) {
    cb();
  }


//function 2
  function returnsANamedFunction() {

    function aNamedFunction() {
      console.log("This is a named function");
    }

    return aNamedFunction;
  }
  
//function 3
  function returnsAnAnonymousFunction() {

    return function() {
      console.log("This is an anonymous function");
    };
  }
