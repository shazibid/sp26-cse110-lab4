1. Line 12 will output "3", which is the value of i instantiated using var so it is a variable available for use outside of the for loop.
2. Line 13 will output "150" which is the last calculated discounted price in the for loop.
3. Line 14 will output "150" which is the last calculated final price in the for loop.
4. The array "discounted" is returned, nothing printed to the terminal. This function returns an array holding [50, 100, 150]. 
5. There is an error because "i" is instantiated in the for loop using 'let', so it is not accessible to be printed outside of the loop.
6. Similar to 5, there is an error because "discountedPrice" is instantiated in the for loop using 'let', so it is not accessible to be printed outside of the loop.
7. Line 14 will output "150" which is the last calculated final price in the for loop.
8. The array "discounted" is returned, nothing printed to the terminal. This function returns an array holding [50, 100, 150].
9. Same as problem 5, there is an error because "i" is instantiated in the for loop using let, so it is not accessible to be printed outside of the loop.
10. The output would be "3" because that is the constant length of the prices array.
11. The function returns [50, 100, 150] because even though 'discounted' is a 'const' array, you can still push values (mutate) into the array.
12. Write notation:
    A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. sudent.courseLoad[0]
13. Arithmetic
    A. '32' : string concatenation
    B. 1 : '3' = 3
    C. 3 : 3 + 0 (null = 0)
    D. '3null' : string concatenation
    E. 4 : (true = 1) 1 + 3
    F. 0 : (false = 0) + (null = 0) = 0
    G. '3undefined' : string concatenation
    H. NaN : underfined = NaN
14. Comparison
    A. true : string -> number -> 2 > 1 = true
    B. false : string vs string -> lexicon -> '2' < '1' = false
    C. true : string vs number -> number vs number -> 2 == 2 = true
    D. false : comparing types and values with ===
    E. false : (true = 1) == 2 -> false
    F. true : (Boolean(2) = true) == true -> true
15. == compares values after type coercion, and === compares value and type, no coercion.
16. done in file
17. The function loops through each element in the array and applies the 'doSomething' callback to it. Since the callback doubles each number, a new array [2, 4, 6] is created and returned.
18. done in file
19. Output:
    1
    4
    3
    2