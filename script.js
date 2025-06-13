let b = 10;
let a = 20;

console.log(a+b+"sum of 10 and 20")
console.log("sum of 10 and 20 is" + (b+a))

/*Explanation
In the first console.log:

JavaScript adds from left to right.

"sum of 10 and 20" + a → "sum of 10 and 2020"

Then adding b (10) → "sum of 10 and 202010"

✅ Output: sum of 10 and 202010

In the second console.log:

(b + a) is calculated first → 10 + 20 = 30

Then it becomes "sum of 10 and 20 is" + 30 → "sum of 10 and 20 is30"

✅ Output: sum of 10 and 20 is30*/