
// Write a ~1 sentence summary for each one


// DRY
// - don't repeat yourself, try to create the same programmatic code for things that are doing the same thing

// KISS
// - Keep it simple, stupid. the most simple form is the best code for reading, writing and debugging

// Avoid creating a YAGNI
// - don't overthink it, you arent going to need it. only create it once it's needed

// Do the simplest thing that could possibly work
// similar to KISS. We don't want to create overly complex code just for the sake of it

// Don't make me think
// Im relating this mostly to variables. Make the variables make sense so you dont have to refer to previous code to get the purpose

// Write code for the maintainer
// make it easy on the people that have to read your code and improve upon it. organization, variables, readability, keeping it simple all are helpful

// Single responsibility principle
// each function we write should do 1 thing. having a function do multiple things makes it way more confusing

// Avoid premature optimization
// make the code work is the primary objective. optimizing the efficiency before ensuring the code works is often what will make code buggy

// Separation of concerns
// if we're looking to have the code do something, make sure it's seperated from other functionality


// Which ones surprise you (if any)?
// none surprise me they all make sense after reading them

// Which one is currently giving you the most struggle?
// I think avoiding premature optimization is the most relative to me right now. I find myself sometimes getting lost in dev because I'm trying to do something above and beyond the simplist code to make something work. I need to focus on, at this point, making things work not neccesarily optimized.

//************* */

// Commenting Code
// Comment each line of this code and describe what it is doing. Feel free to run this code and add console.logs to help you figure it out:


// first we're declaring an arrow function called f with a parameter l
const f = l => {
    // inside of the f function, we're defining 4 variables that can change. those variables are es, p, c, and n. they are number datatypes
    let es = 0, p = 0, c = 1, n = 0 
    // double check the commas help to define multiple in one line by console loging
    //console.log(p) 

    // while loop while the condition of variable c is less than or equal to the parament l of the f function
    while (c <= l) {       
        // while the condition above it true, n will equal the sume of c and p variable
      n = c + p;
      // n should equal 1 - console logging that below
      // had to remove the console.log(n) in order for the code to run..

      // below we swap the values of c and p to be equal to n and c, respectfully
      [c, p] = [n, c]
      // lets console.log(c and p) they should be 1 and 
      //console.log(c)
      //console.log(p)

        // variable es will add c if c is even, otherwise it will add 0
        es += (c % 2 === 0) ? c : 0
    }

    // thefunction f will return the value of es after the while loop has completed
    return es
  }

// this console.logs the return value of the function when l = 55 which is 44
console.log(f(55))

  

// compare the above with the below, nothing to answer here

  const f2 = (limit) => {
    let evenSum = 0;
    let previous = 0;
    let current = 1;
    while (current <= limit) {
      let next = current + previous;
      previous = current;
      current = next;
      if (current % 2 === 0) {
        evenSum += current;
      }
    }
    return evenSum
  }
  
  
  console.log(f2(55))
  

// Answer with comments:

// In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?
// A: the second code is way better for the maintainer. I didn't understand what the code was doing until logging it in the first example while the second example I completely understood it just reading through. The more semantic name for the function would be, imo "evenSumAmount" because the entire funtion's JOB is to return the even sum given the parameter we pass into it.

// If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
// A: I would much rather start working with f2 code for the same reasons above. 

// Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
// A: yes the code still runs. no the semi-colon is not necessary

