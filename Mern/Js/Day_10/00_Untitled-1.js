 
 module
 1.es6 module  (export/import)#modern
 =====================================
      1.deafult
      ------------->

                      // Default export  math.js
                     const add = (a, b) => a + b;

                     export default add; // Default export

                     // Importing the default export app.js
                     import addNumbers from './math.js'; // You can rename 'add' to 'addNumbers' or any name

                     console.log(addNumbers(5, 3)); // Output: 8


    2.muluple export  
    ----------------
                  // Named exports math.js
                     export const multiply = (a, b) => a * b;
                     export const subtract = (a, b) => a - b;


                     // Importing named exports   app.js
                     import { multiply, subtract } from './math.js';

                     console.log(multiply(4, 3)); // Output: 12
                     console.log(subtract(10, 4)); // Output: 6

    
  
 2.common module (require/module.export)#node js /express js
 ===========================================================


                     // / math.js
                     // Using module.exports to export multiple values
                     const power = (a, b) => Math.pow(a, b);
                     const sqrt = (a) => Math.sqrt(a);

                     module.exports = { power, sqrt }; // Exporting both functions

 
                     // app.js (Importing multiple exports)
                     // Importing multiple exports using require
                     const { power, sqrt } = require('./math.js');

                     console.log(power(2, 3)); // Output: 8
                     console.log(sqrt(16));    // Output: 4
