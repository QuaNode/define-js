# define-js
ES5 inheritance like class-based languages

## Installation

    npm install define-js

## Usage

``` js

var define = require('define-js');

var SuperFunction = function(value){ // super constructor

    var ivar = value;
    this.method = function(){

        console.log(ivar);
    };
};

module.exports = define(function(init, sṵper){

  return function(value){ // your constructor

    var self = init(value).self(this); // initialize super function with arguments and this scope
    //or var self = init.apply(this, arguments).self();
    self.method = function (){ // override a method of super object

      sṵper.method();
    };
  };
})
.extend(SuperFunction /*the function you want to inherit from*/)
.defaults("Value" /*defaults to be passed when instantiating the prototype object*/);

```

