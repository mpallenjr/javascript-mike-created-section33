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


function fruitProcessor(apples, oranges) {     // example of function with 'parameters', variables that are specific only to this function and are defined when this function is called. 
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;  //the result of executing this function

}                     

const appleJuice = fruitProcessor(5,0) // the numbers in these praenthesis are the values to be assigned to the parameters in the fruitProessor function. 
                    // the values of the parameters are called the 'arguments'.  after the function runs, the return line turns the called function into 'juice', so the function become a value, so to save that value, you need to assign a variable to is (appleJuice) and then printing that with a console log.  Alternatively you could print the value without assigning it to a variable, only logging the result. 


console.log(appleJuice); // value assigned to variable and printed
console.log(fruitProcessor(5,0)); // value printed as a result of the function running

