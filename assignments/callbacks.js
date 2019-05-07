// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];


  //Given this problem: 
  
  
  // Potential Solution:
  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }
  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });



  function getLength(arr, cb) {
    // getLength passes the length of the array into the callback.
  }
  function getLength(arr, cb){
    return cb(arr.length);
  }
  getLength(items, function(length){
  console.log(length)
  });
  

// function last(arr, cb) {
//   // last passes the last item of the array into the callback.
//   cb(items.length[-1]);
//   lastItem(items, cb function(last) {
//     console.log(last);
// });
// }

function veryLast(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(items[items.length - 1]);
}

veryLast(items, function(last) {
  console.log(last);
});


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}

function sumNums(x, y, cb){
  return cb(x + y);
}

sumNums(5, 7, function(addition){
  console.log(addition)
});


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

function multiplyNums(x, y, cb) {
  return cb(x * y);
}

multiplyNums(2, 5, function(multiplication){
  console.log(multiplication)
});


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

function contains(item, list, cb) {
  if(list.includes(item)){
    return cb(true);
  }
  else{
    return cb(false);
  }
}

contains('yo-yo', items, function(trueFalse){
console.log(trueFalse)
});
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}