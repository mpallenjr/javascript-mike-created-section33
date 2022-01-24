'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense= true;
if (hasDriversLicense) console.log('I can drive :D');
//when strict mode is activates it throws this error (script.js:6 Uncaught ReferenceError: hasDriverLicense is not defined)
//deactivated it thows no errors

const interface = 'Audio'; // with strict mode (Uncaught SyntaxError: Unexpected strict mode reserved word)

//strict mode reserves words JS may want to use in the future for a feature.  This helps avoid nameing conventions that can conflict witht eh language in the future.  

//should alaways have strict mode on. 
*/

// function holds one or more complete lines of code where a variable holds a value

function logger() {
  // withing these curly braces is called 'the function buddy'
  // this is the code that gets ran when the function is called
  console.log('My name is Mike');
}

logger(); // invoking /running /calling the function. interchangeable terms for executing this code. 
logger();
logger(); // because it is a function you can easily call the same block of code multiple times 