# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call. Your invariant must say something
about the current recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.

I made sure that certain indexes would be defined with the proper values if needed. The amount of these given values changes depending on the input into the function. Also, some of these variiables will remain undefined until after the final recursive call (this would be the invariant). This is true as there is always some amount of undefined variables throughout the code, until the array is slowly filled with actually defined values. But making sure that some are defined at the beginning allows for the rest of the calculations to be done properly with a good starting point. ChatGPT did help with some of this reasoning, as well as the ideas of slowly filling in the array.

The Invariant is as follows: When summing the previous 2 values in the sequence, assume they are correct. For instance, assume that the first 2 numbers in the fibonacci sequence are 0 and 1, as they should be. We know that the first 2 will be correct, since they are set to be specific value on initialization. From there, we can guarantee the previous values are always correct, which is very important in a sequence such as this, that builds on the previous values.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
