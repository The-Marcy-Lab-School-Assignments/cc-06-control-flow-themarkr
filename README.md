# Code Challenge: Control Flow

## Instructions

1. Clone down this assignment to your `code-challenges' directory in AWS Cloud9.  
2. Code your solution using JavaScript in `index.js`. 
3. **Be sure to run and test your code throughly!**
4. By the end of Code Challenge, **commit and push your changes up to Github**.
5. Using the browser, verify that your solution is in your remote repo on Github.

## Code Problems

1. Write a function named sumOfThreeAndFive that returns the sum of all the multiples of 3 and 5 from 1 to 1000.
```
sumOfThreeAndFive() //returns 233168
```

2. Write a function named greaterNum that:
- takes 2 arguments, both numbers.
- returns whichever number is the greater (higher) number.
- If both arguments are equal, it will return the string "both integers are equal"
- If a given argument is not an integer it will return `null`
```
greaterNum(10, 7) //returns 10
greaterNum(1.14, 1.14) //returns "both integers are equal"
greaterNum("21", 21) //returns null
```

3. Write a function named oddAndEvenInFifteen that will console.log if a number is odd or even between 0 and 15. 
```
oddAndEvenInFifteen()
// first five console.logs:
// "0 is even"
// "1 is odd"
// "2 is even"
// "3 is odd"
// "4 is even"
// "5 is odd"
```


### Bonus 
2. Write a function sortThreeNums that takes in three integer arguments and returns the three integers sorted from greatest to least. Solve this without using any sorting methods, and only using conditional statements. 
```
sortThreeNums(-14,14,-1) //console.logs: 14, -1, -14
sortThreeNums(2,5,50) //console.logs: 50, 5, 2
```
