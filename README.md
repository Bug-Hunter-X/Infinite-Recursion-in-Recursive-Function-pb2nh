# Infinite Recursion Bug in JavaScript

This repository demonstrates a common error in recursive JavaScript functions: infinite recursion.  The function `foo` attempts to recursively calculate a result, but its base cases are insufficient, leading to stack overflow errors when given two positive numbers as arguments.  The `bug.js` file contains the buggy code. The solution is provided in `bugSolution.js`.

**How to reproduce:**
1. Clone this repository.
2. Open `bug.js` and observe the buggy implementation.
3. Execute `bug.js`. It will crash due to stack overflow if you pass two positive numbers.
4. Open `bugSolution.js` and see the corrected implementation.
5. Execute `bugSolution.js` to see the corrected behavior.

**Bug:** Infinite recursion occurs when both inputs are positive integers. The recursive calls never reach a terminating condition, causing a stack overflow.

**Solution:** The solution introduces a condition to ensure that the function only recurses when both input numbers are greater than 0. This prevents the infinite recursion scenario by adding a base case that stops when either `a` or `b` is equal to or less than 0.