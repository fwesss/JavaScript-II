// Create a higher order function and invoke the callback function to test your work. You have been
// provided an example of a problem and a solution to see how this works with our items array.
// Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/*

  //Given this problem:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, (length) => {
  console.log(length);
});


function getLast(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

getLast(items, (last) => {
  console.log(last);
});


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

sumNums(3, 5, (sum) => {
  console.log(sum);
});


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

multiplyNums(5, 7, (multiply) => {
  console.log(multiply);
});


function findDuplicates(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list.includes(item));
}

findDuplicates('Notebook', items, (contains) => {
  console.log(contains);
});


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

  return cb(Array.from(new Set(array)));
}

removeDuplicates(items, (clean) => {
  console.log(clean);
});
