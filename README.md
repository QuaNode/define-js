# definejs
javascript inheritance like class-based languages

    npm install define

``` js

var define = require('define');

var SuperFunction = function(value){ // super constructor
    
    var protectedIvar = value;
    this.method = function(){
        
        return protectedIvar;
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
.parameters("Value" /*parameters to be passed when instantiating the prototype object*/);

```

