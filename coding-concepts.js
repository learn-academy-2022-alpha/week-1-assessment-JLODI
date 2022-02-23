//Student Note: Make sure to turn on word-wrap or softwrap in your editor
// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
//console.log(colors.push("indigo"))

// a) Your answer:
//The string "indigo" will be added to the end of the array, but the log will return the number of items in the array, 5.

// b) Verify and explain:
//The console log returned "5". I remember this from doing this during the array .push exercise, we'd check, get a number, and realize we'd need to run console.log(colors) for example to return the changed array.

// --------------------1) What will this log?

//const cohort = "Alpha 2022"
//console.log(cohort.length)

// a) Your answer:
//The console log returned "9"
// b) Verify and explain:
//The log returned "10". I actually thought that length accounted for starting at "0" but it seems like it starts at 1. Seems like "0" is something to account specifically for index and counting calculations, but does not apply to the character length of a string here.


// --------------------2) What will this log?

const greeting = "Hello World!"
//console.log(greeting[4])

// a) Your answer:
//Console log returns "o"
// b) Verify and explain:
//Console log returns "o", so I was correct this time because index does start from 0.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
//console.log(languages[index])

// a) Your answer:
//Log returns Ruby
// b) Verify and explain:
// Console log returns Ruby, since Ruby is the second item or is assigned "1" as the index number, and the log specifies looking at the value at index 1.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer:
// Log returns SATURDAY, SUNDAY
// b) Verify and explain:
// Log returns "TypeError: weekendDays.toUpperCase is not a function"
// So I did a guess and check tests to check why toUpperCase method wasn't working:
// 1. I changed the const to var
// 2. I added an index to weekendDays ex. weekendDays[1]
// 3. I changed weekendDays value to a string rather than an array.
// Found out these results from these tests:
// 1. Var resulted in the same TypeError
// 2. Specifying the index element returned "SUNDAY", so the toUpperCase() method worked when specifying an idex on the array
//3. Changing the weekendDays to a string instead of an array returned the whole string in caps: "SATURDAY, SUNDAY"
//Thus it seems like the toUpperCase() method does not function for array, but only for strings


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
//console.log(typeof dataTypes.length)

// a) Your answer:
// Log returns number
// b) Verify and explain:
// The log returns number. From what I saw in one of the javascript exercises, typeof is an operator that figures out the data type of what follows it. What's tricky is that the const dataTypes has a .length after it, so it will return a number instead of the value of dataTypes itself. I did a quick check to see what removing .length would do and the ${console.log(typeof dataTypes)} returned "object", since an array is an object. An object is not one of the primitive dataTypes, so it looks like it goes beyond the six primitive types we've covered so far.
