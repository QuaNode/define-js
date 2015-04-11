# definejs
javascript inheritance like class-based languages

    npm install definejs

``` js

var define = require('definejs');

var SuperFunction = function(value){ // super constructor
    
    var protectedIvar = value;
    this.method = function(){
        
        return protectedIvar;
    };
};

module.exports = define(function(init, sṵper){
  
  return function(value){ // your constructor
    
    var self = init(value).self(this); // initialize super function with arguments and this scope
    self.method = function (){ // override a method of super object 
      
      sṵper.method(); 
    };
  };
})
.extend(SuperFunction /*the function you want to inherit from*/)
.parameters("Value" /*parameters to be passed when instantiating the prototype object*/);

```

