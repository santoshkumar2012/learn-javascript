
/********************************** */
// VARIABLE - Variables are containers for storing values
/********************************* */

/** Variable Types 3 ( Var, Let, const )  */

// var - We can declare name and value assign again for var.
// Let - We can assign value again, We can not declare name again.
// Const - We can declare only one time name and value, don't use again

var = Function Scoped
let = Block-scoped, Reassignable
const = Block-scoped, Not Reassignable 


    var first_name = "Santosh"
    var first_name = "Kumar"

// Let Examples

    let  first_name = "Pragyansh"
         first_name = "Kumar" // we cann't declare name again only assign value.

// const Example 

    const first_name = "Nityansh" // We cann't declare name and value assign again. 


==, ===, Comparison

console.log( 5 == "5" ) // True only check value in double equle
console.log ( 5 === "5" ) // False check vallue and data type both



// Operator Syntax

let a = 5; 
let z = x + y

// Arithmetic

let b = ( 5 + 5 ) * 10

// Assignemnt Operator

let c = 10
c += 5
console.log(c) // output 15

//Spread Operator it is used to expand the elements. 
let array = [10, 12, 13];
console.log(...array, 14, 15, 16);

//Rest Operator it is used to collect the elements.
//function customSum(...numbers) {
    //let sum = 0;
   // for (let i = 0; i < numbers.length; i++) {
        //sum += numbers[i]; // Manually summing up values
    //}
    //console.log("Total Sum:", sum);
//}
//customSum(5, 10, 15);

function persons(greeting, ...names) {
    return { greeting, names };
}
console.log(persons("Hello", "Ram", "Shyam", "Laxman"));
//{
  greeting: "Hello",
  names: ["Ram", "Shyam", "Laxman"]
}


/********************************** */
 FUNCTION 
 /********************************* */

//A function in JavaScript is a block of code designed to perform a specific task. 

// Function Declaration 

function abc() { }

// Function Declaration with parameter

function ced(a, b) {
    return 3 * 5
}
console.log(ced()) // 15

console.log("Normal Function ------------")

// function abc(x, y){
//   return x + y
// }
// console.log(abc(25, 65))


 console.log("Arrow Function ------------")

// const xyz = (k,l) => {
//       return k + l
// }
// console.log(xyz(25,65))

console.log("Callback Function - A callback is a function passed as an argument to another function. -")

// const calc = (a, b, callback) => {
//       return callback(a, b)
// }
// function addition( num1, num2 ){
//     return num1 + num2
// }
// const result = calc(15, 50, addition)
// console.log(result)

console.log( "Hoisting is JavaScript's default behavior of moving declarations (variables and functions) to the top of their scope before the code executes. ")
greet(); // Output: Hello, World!
function greet() {
  console.log("Hello, World!");
}

//console.log(addition(25,65))
//function addition (num1, num2){
 //return num1 + num2
//}

console.log("Closure - A closure in JavaScript is a function that has access to variables in its parent scope. ")

// function outerFunction(){
//     let name = "Santosh"
//     function innerFunction(){
//       console.log(name)
//     }
//     return innerFunction
//   }
//   outerFunction()


console.log("Promises - Promise is for eventual completion of task. It is and object in JS")
// Three possible state - Pending, Resolved, Rejected

let myPromises = new Promise((resolve, reject) => {
	let success = true;
setTimeout(() => {
	if (success){
	resolve("successfully")
}else {
	reject("Pending")
}
}, 2000);
});

myPromises.then(result => console.log(result))
myPromises.catch(error => console.log(error)) 
myPromises.finally(() => console.log("Promise completed"));

// Handling the Promise
// myPromise
//     .then(result => console.log(result))  // Runs if resolved
//     .catch(error => console.log(error))  // Runs if rejected
//     .finally(() => console.log("Promise completed"));


/********************************** */
OBJECT 
/********************************* */
// Objects are variables. But objects can store many values.

const persons = { first_name: "Santosh", last_name:"Kumar", age:35 }
console.log(persons.first_name)

// Array Declare

const members = [
    { first_name: "Santosh", last_name:"Kumar", age:35 },
    { first_name: "Pragyansh", last_name:"Chandervanshi", age:35 },
    { first_name: "Nityansh", last_name:"Chandervanshi", age:35 }
    ]
  console.log( members[1].first_name )

// Array with loop Objects Declare  

const family_members = [
    { first_name: "Santosh", last_name:"Kumar", age:35 },
    { first_name: "Pragyansh", last_name:"Chandervanshi", age:7 },
    { first_name: "Santosh", last_name:"Chandervnshi", age:5 }
    ]
    for (let i=0; i<family_members.length; i++){
        console.log( family_members[i].first_name )
    }

// clone for below object

const personss = { first_name: "Santosh", last_name: "Kumar", age: 25 };
const clone1 = { ...persons };
console.log(clone1);  
    
/********************************** */
ARRAY // Collection of data 
/********************************* */

let web = [10,20,30]
console.log(web)

// Array Method

// Slice -- Slice create a new array 
const anj = ["Sanjeev", "Raju", "Manoj", "Rishu", "Ashok", "Pappu"]
home = anj.slice(2);
console.log(home) // output Manoj, Rishu, Ashok,Pappu 
home = anj.slice(2,4);
console.log(home) // output Manoj, Rishu 

// Splice -- Modify the original array. It is used to add, remove, or replace elements.
const data = [10,20,40]
data.splice(2,0, 30) // Add data
data.splice(2,1, 30) // Replace data - output 10,20,30
data.splice(1,2) // Delete - output 10
console.log( data ) // output 10,20,30,40 


// Push -- add one or more elements to the end of an array.

let numbers = [1, 2, 3];
numbers.push(4, 5, 6);
console.log(numbers); // [1, 2, 3, 4, 5, 6]

// Pop removed(last element) and Shift ( first element )

let websanto = [1, 2, 3, 4]
websanto.pop() // removed 4 and output 1,2,3
websanto.shift() // removed 1 and output 2,3,4

// Unshift add one or more elements to the beginning of an array.
let numberss = [3, 4, 5];
numbers.unshift(1, 2); // output 1,2,3,4,5

// Map create a new array by applying a function to each element
const pragya = [2,4,6,10,50]
const santk = pragya.map((x) => x * 2)
console.log(santk)

// Filter

const websantos = [2,3,4,5,6,7,8,9]
const santo = websantos.filter((x) => x % 2 )
console.log (santo); // output [ 3, 5, 7, 9 ] odd value

const san = [2,3,4,5,6,7,8,9]
const anjsanto = san.filter((y) => y % 2 === 0 )
console.log (anjsanto); // output [ 2, 4, 6, 8 ] Eveb value

// Reduce reduce an array to a single value by applying a function to each element and 
// accumulating the result.

const numbersss = [1, 2, 3, 4];

const doubled = numbersss.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]

const evens = numbersss.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

let arraynumner = [10,24,3,4,55,6,7,8,9]
const sum = arraynumner.reduce((a,b) => a + b)
console.log(sum) // 126

// Find

//Sorting an Array  method sorts an array alphabetically
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // output Apple, Banana, Mango, Orange

// Ascending
let array = [10,24,3,4,55,6,7,8,9]
array.sort((a,b) => a - b)
console.log(array) // 3,  4,  6,  7, 8, 9, 10, 24, 55

//Descending
let array1 = [10,24,3,4,55,6,7,8,9]
array1.sort((a,b) => b - a)
console.log(array1) // 55, 24, 10, 9, 8, 7,  6,  4, 3

//MaxNumber
let array2 = [10,24,3,4,55,6,7,8,9]
array2.sort((a,b) => b - a)
let maxnumber = array2[0]
console.log(maxnumber) // 55


//forEach forEach() method performs an action on every item in a list.

let numbers = [10, 20, 30, 40];
let sum = 0;
numbers.forEach(num => {
    sum += num;
});
console.log(sum);


/********************************** */
Events // a specific action that occurs within a web page or application,
//Events make web pages interactive. type events Mouse Events, Keyboard Events, Form Events, Touch Events. onclick Events
/********************************* */
//<button onclick="this.innerHTML=Date()">The time is?</button>


Currying
// Transforming a function with multiple arguments into a sequence of functions.

Debouncing & Throttling
//Debouncing limits the execution of a function until after a certain delay.
//Throttling ensures a function runs at most once in a specified interval.

//Pure Functions
//Higher-Order Functions



// scss variable
<code>
$primary-color: blue;
.button {
  color: $primary-color;
  padding: 10px;
}
</code>

--------------------
// nesting in scss  
.navbar {
    background: #333;
    padding: 10px;
  
    .menu {
      list-style: none;
      padding: 0;
  
      li {
        display: inline-block;
        margin-right: 10px;
  
        a {
          text-decoration: none;
          color: white;
  
          &:hover {
            color: yellow;
          }
        }
      }
    }
  }

  //Mixins in SCSS

  @mixin button-style {
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
  }
  
  .btn {
    @include button-style;
    background: blue;
    color: white;
  }
  
  .btn-danger {
    @include button-style;
    background: red;
  }
  
//sass
$primary-color: blue
.button
  color: $primary-color
  padding: 10px
