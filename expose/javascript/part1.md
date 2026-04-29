1. "values added: 20"
2. "final result: 20" because 'var' is function scoped and not block scoped, so it still exissts after the 'if' statement.
3. You shouldn't use 'var' because it is function-scoped instead of block scopes, so variables are able to "leak" outside of blocks, like 'if' statements and loops.
4. "values added: 20"
5. The code returns an error because 'result' is only instantiated within the 'if' statement, and becuase it's created using 'let', it does not exist outside of the if statement. Doing this causes a 'ReferenceError'.
6. The code returns an error because you can't change a variable instantiated with const, const creates a variable that cannot be altered in the codebase. So the error is when the logic attempts to reassign the value stored in 'result' to the sum of num1 and num2.
7. Same as question 6, a const variable cannot be changed, and the code crashes at line 7 due to the reassignment.