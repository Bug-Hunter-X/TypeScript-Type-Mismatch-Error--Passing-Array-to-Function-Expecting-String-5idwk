# TypeScript Type Mismatch Error

This repository demonstrates a common TypeScript error: passing an array to a function expecting a single string argument.

The `bug.ts` file contains the erroneous code, which attempts to pass an array of strings to a function expecting a single string. This results in a compilation error.

The `bugSolution.ts` file shows the corrected code. It addresses the type mismatch by either modifying the function to accept an array or iterating over the array and calling the function for each string element.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository directory.
3. Compile the `bug.ts` file using the TypeScript compiler (tsc bug.ts). Observe the compilation error.
4. Compile the `bugSolution.ts` file to see the corrected code.