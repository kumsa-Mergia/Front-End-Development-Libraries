const numbers = [1,2,3,4]
numbers[50] = 456
console.log(numbers)

/* In JavaScript, the typeof operator always returns a string describing the type of its operand */

console.log(typeof typeof 100)        // type of 100 is number and type of number is string it assume the number as a string


/* When you use the spread operator (...) on a string,Here's what will happen:
  it splits the string into an array of its individual characters.
*/


const arr=[...'Gumare']
console.log(arr)

/*
In JavaScript, parseInt() is a built-in function that parses a string and converts it into an integer (whole number). 
It reads the string from left to right, stopping at the first non-numeric character.
 */

  
console.log(parseInt('M7F'))  

/*
    Explanation:
    parseInt starts parsing 'M7F'.
    The first character, 'M', is not numeric, so parsing cannot begin.
    When the first character is invalid, parseInt returns NaN (Not a Number).
    Result: NaN
*/
  
console.log(parseInt('10+2'))  

/*
    Explanation:
    parseInt parses the string from left to right until it encounters a character that isn't part of a valid number.
    '10' is a valid number, so it's parsed successfully.
    Parsing stops when it encounters the + character, which isn't numeric.
    Result: 10
*/

console.log(parseInt('7FM'))    

/*
    Explanation:
    parseInt starts parsing '7FM'.
    '7' is a valid number, so it’s parsed successfully.
    Parsing stops when it encounters the F character, which isn't numeric.
    Result: 7
*/


//The isNaN() function in JavaScript checks whether a value is not a number.

console.log(isNaN('23'))
console.log(isNaN('Gumare'))

console.log([3,6].map(num=>{
    if(num>0) return ;
        return num * 2
})); // OutPut is [ undefined, undefined ]

console.log([3,6].map(num=>{
    if(num>0) return num * 2
     return ;       
})); // OutPut is [ 6, 12 ]
console.log([3,6].map(num=>{
    if(num>5) return ;
        return num * 2
})); // OutPut is [ 6, undefined 

// 'use strict'
{
function abc(){
    console.log('Gumare')
}
}
abc()
/*  What is the window scope in JavaScript?
You can access global variables from any other javascript that is running on the page like a script tag 
or via the console. In the browser, the global scope is called the window. If you type window in the console, 
you will see every single thing that is attached to the global scope is inside of the window.
*/


function abc(a,b) {
    // 'use strict'
    a=100
    b=200
    return args[0] + args[1]
    console.log(a+b)
}
console.log(abc(300,400))
