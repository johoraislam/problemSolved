/*JavaScript Type Coercion with Numbers and Strings

JavaScript automatically **converts types** when using different operators. Here's what happens when you mix strings and numbers:

---

### ✅ Example 1*/

console.log("3"*3)//output 9

/*The * operator expects numbers.

JavaScript converts "3" (a string) to a number.

So it becomes: 3 * 3 = 9*/

console.log("3"/3)//output 1

// The / operator also expects numbers.

// "3" is converted to number → 3 / 3 = 1


console.log("3"-3)//output 0
// The - operator expects numbers too.

// "3" is converted to number → 3 - 3 = 0


console.log("3"+3)//output 33

//the + operator is special in JavaScript.

// If either operand is a string, + treats it as string concatenation.

// So:

// "3" + 3 becomes "3" + "3" → "33"

// ❗ Only the + operator does string joining. All others (*, /, -) do numeric operations and convert strings to numbers automatically.


console.log(3+3) //output 6

// Both 3 and 3 are numbers

// The + operator performs numeric addition here.