const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// Every
// defining as checks over every element in an array for a conditional statement

// Determine if every number is greater than or equal to 0

const greaterThan8 = nums.every(el => el >= 8)
console.log(greaterThan8)
//answer is false

// determine if every word shorter than 8 characters

const shorterThan8Char = panagram.every(el => el.length < 8)
console.log(shorterThan8Char)
//answer is true



// Filter
//defining as filters through the array and creates a new array with only the conditional information

// filter the array for numbers less than 4
const lessThan4 = nums.filter(el => el < 4)
console.log(lessThan4)
//answer is [1,2,3,0]

// filter words that have an even length
const evenLength = panagram.filter(el => el.length % 2 === 0)
console.log(evenLength)
//answer is ["over", "lazy"]


// Find
// defining as we are finding the first value of an array with a certain condition

// Find the first value divisible by 5
const div5 = nums.find(el => el % 5 === 0)
console.log(div5)
// answer is 5

// find the first word that is longer than 5 characters
const long5 = panagram.find(el => el.length > 5)
console.log(long5)
//answer is undefined because it doesnt exist in the array



// Find Index
// defined as we're finding the first array element and passing the index of that value within an array

// find the index of the first number that is divisible by 3
const indexDiv3 = nums.findIndex(el => el % 3 === 0)
console.log(indexDiv3)
//answer is index 2, which is a value of 3

// find the index of the first word that is less than 2 characters long
const indexLess2 = nums.findIndex(el => el.length < 2)
console.log(indexLess2)
//answer is index -1, which means it does not exist within the array


// For Each
//iterates through each of the elements of an array

// console.log each value of the nums array multiplied by 3
nums.forEach(el => {
    console.log(el*3)
})

// console.log each word with an exclamation point at the end of it
panagram.forEach(el => {
    console.log(`${el}!`)
})


// Thought Questions
// What happened to the original array?
console.log(nums)
console.log(panagram)
// the original array is unchanged

// Can you store the values from a forEach method in a new array?
// yes with a push into a brand blank array defined as a variable
let newArr = []
panagram.forEach(el => {
    newArr.push(`${el}!`)
})
console.log(newArr)



// Map
// defined as basically doing the thought question in one step. pushing values of each element of a loop into a new array

// make a new array of each number multiplied by 100

const newArrMap = nums.map(el => {
    return el*100
})
console.log(newArrMap)

// make a new array of all the words in all uppercase
 const newArrPan = panagram.map(el => {
    let bigLetter = el.toUpperCase()
    return bigLetter
 })

console.log(newArrPan)


// Thought Questions
// What happened to the original array?
console.log(nums)
console.log(panagram)
// still nothing

// Can you store the values from a map method in a new array?
// yes! we did that in the example above




// Some
// defined as asking if any of the values within an array have a condition met
// Find out if some numbers are divisible by 7

const someDiv7 = nums.some(el => el % 7 === 0)
console.log(someDiv7)
// answer is true!

// Find out if some words have the letter a in them
const someLetterA = panagram.some(el => el.includes("a"))
console.log(someLetterA)
//asnwer is true, removed lazy from the array to double check and it said false so we're good 