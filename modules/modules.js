// creating a module
(function() {
    'use strict'
})();

//exporting our module. This method assigns the module to a variable that we can use to call our modules methods
var myModule = (function() {
    'use strict';

// Because _private & _privateMethod have not been returned they are not available outside of the module
    var _private = "hello world";

    function _privateMethod() {
        console.log(_private)
    }

// Here we create a public method for our module to call (making it accessible anywhere) by invoking myModule.publicMethod()
    
    function publicMethod() {
        _privateMethod()
    }
    
// The revealing module makes it much easier to see what is publicly available for use, simply by placing everything at the bottom of the page   
    return {
        publicMethod: publicMethod,
    }

})();

myModule.publicMethod() // "hello world!". Only our public method has given us access to our private methods

console.log(myModule._private) // undefined, protected by module closure

myModule._privateMethod() // typeError protected by module closure