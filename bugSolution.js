function foo(a, b) {
  if (a <= 0 || b <= 0) {
    return a + b; // Corrected base case
  }
  return foo(a - 1, b - 1); 
}