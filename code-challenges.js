//Student Note: Make sure to turn on word-wrap or softwrap in your editor
// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"

//Pseudo code: Write a function with an if statement, with the first condition comparing if character length of fruit1 is greater than fruit2.
//If it is true that fruit1 is greater than fruit2, then the log will be fruit1.
//Write the else statement to log fruit2.

if (fruit1.length > fruit2.length){
  console.log(fruit1)
  }
    else {console.log(fruit2)
}

if (fruit3.length > fruit4.length){
  console.log(fruit3)
  }
    else {console.log(fruit4)
}

// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

const temp1 = 42
const temp2 = 350
const temp3 = 212

//Pseudo code: Write a function with an if statement, with the first condition checking the tempurature constant is above boiling point 212 Fahrenheit.
//If it is true that temp constant is greater than 212, then the log will return the string "<temperature value> fahrenheit is above boiling point."
//Write the else if statement checking if the temp constant strictly equals 212, then the log will return the string "<temperature value> fahrenheit is at boiling point.".
//Write the else statement that will log the string "<temperature value> fahrenheit is below boiling point."
//For test purposes, set var temp = <any of the constants> before function

temp = temp3

if (temp > 212){
  console.log("temp fahrenheit is above boiling point.")
  }
  else if (temp === 212){
  console.log("temp fahrenheit is at boiling point.")
}
  else {
  console.log("temp fahrenheit is below boiling point.")
}


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

//Pseudo code: write out a constant "myNumbersCombined" that uses the .concat() accessor that adds myNumbers2 array to the myNumbers1 array as a single array. Write out a log command that returns the length of the array with the .length method

const myNumbersCombined = myNumbers1.concat(myNumbers2)
console.log(myNumbersCombined.length)

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 ahplA"

const currentCohort = "Alpha 2022"

//Pseudo code: Write out a line that sets a "cohort" variable from constant currentCohort (currentCohort stays the same, but now we can make changes to the cohort variable). Write a line that sets a variable splitCohort to equal the split letters of Cohort, turning the value of cohort into an array of the letters separately. Write a line that sets variable reverseCohort to equal the value of the splitCohort array but reversed with .reverse() mutator. Write a line that sets joinedCohort variable to equal the reverseCohort variable, but joined together with .join("") which joins the now reversed letters from an array into a string. Write a console log command to return the string for joinedCohort

var cohort = currentCohort
splitCohort = cohort.split("")
reverseCohort = splitCohort.reverse()
joinedCohort = reverseCohort.join("")
console.log(joinedCohort)

//alt method of using loop:
// var newCohort = []
// for (let i = 0; i < cohort.length; i++){
//   newCohortIndex = cohort.length - i
//   newCohort[newCohortIndex] = cohort[i]
// }
// console.log(newCohort.join(""))

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

const myArray = [13, 34, 5, 10, 27, 42]

//Pseudo code: Write out a for loop to run a function for each number in the array until it stops at the 6th number. In the code block, write an if else statement checking if number in that index gets a remainder when divided by 2 (modulo 2), then if true will console log return the string "even". On the next line, write the else statement that will log return the string "odd".

for (let i = 0; i < myArray.length; i++){
  if (myArray[i] % 2 === 0){
  console.log("even")
  }
  else{
  console.log("odd")
  }
}

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// // Set one:
// const number1 = 58
// const number2 = 100
//
// // Set two:
// const number3 = 27
// const number4 = 24

//Pseudo code: Write out a function assigned with "mathMachine" with argument "number1, number2" (established 2 input slots when running the machine) conditional statement checking if the first number is greater than the second number. If true, then write out the return of value that equals the first number minus the second number. Write the else statement that returns the falue of the second number minus the first number. Write out the console log that runs the mathMachine function with 2 numbers (run both sets provided as a test)

const mathMachine = (number1, number2) => {
  if (number1 > number2){
  return number1 - number2
  }
  else{
  return number2 - number1
  }
}
console.log(mathMachine(58,100))
console.log(mathMachine(27,24))
