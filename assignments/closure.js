// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const name = "Westley Feller";
const displayName = () => name;

console.log(displayName());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const count = () => {
    let count = 0;
    return () => ++count;
};

const newCounter = count();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.
    let count = 0;
    return {
        increment: () => {
            return ++count;
        },
        decrement: () => {
            return --count;
        }
    }
};

console.log(counterFactory().decrement());
console.log(counterFactory().increment());
