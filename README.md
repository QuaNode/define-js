# definejs
javascript inheritance like class-based languages

    npm install definejs

``` js

var define = require('definejs');

module.exports = define(function(init, sṵper){
  
  return function(){
    
    var self = init(arguments).self(this); // initialize super function with arguments and this scope
    self.method = function (){ // override a method of super object 
      
      sṵper.method(); 
    };
  };
})
.extend(the function you want to inherit from)
.parameters(parameters to be passed when instantiating the prototype object);

```

