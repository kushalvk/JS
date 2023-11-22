// Immediately Invoked Function Exprassion (IIFE)

(function chai() { // => this is named iife
    console.log(`DB CONNECTED`);
})(); // without semicolan function can not be stop ni iife

// (function arrgument)() <= this is exicution call (iife)

( (name) => { // => this is iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('kushal')