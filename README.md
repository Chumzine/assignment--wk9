<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![Twitter][twitter-shield]][twitter-url]


<h3 align="center">Summary of Articles Read</h3>

  <p align="center">
    <a href="https://github.com/Chumzine/assignment--wk9"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Chumzine/repo_name/issues">Report Bug</a>
    ·
    <a href="https://github.com/Chumzine/repo_name/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-this-readme">About This README</a>
    </li>
      <a href="#array-methods">Array Methods</a>
      <a href="#functions">Functions</a>
      <a href="#reference-functions">Reference Functions</a>
      <a href="#control-flow-statements">Control Flow Statements</a> 
      <a href="#function-basics">Function Basics</a> 
    </li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THIS README -->
## About This README

This is a summary of the articles I studied as instructed by our facilitator for week 9 of the Women Techsters Fellowship Class of 2024. It is part of the graded assignment for the week. 

This summary is written by <a href="https://github.com/Chumzine/">Chumzine</a>.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ARRAY METHODS -->
## <a href="https://www.w3schools.com/js/js_array_methods.asp">JavaScript Array Methods</a>

# JavaScript Array length
This property returns the length/size of an array. It can also be used to append a new element to an array easily.
```sh
   name of array.length;
   ```
# JavaScript Array toString()
This method converts an array to a string of array values separated by a comma. All JavaScript objects have a toString() method.
```sh
   name of array.toString();
   ```
# JavaScript Array join()
This method joins all array elements into a string. It behaves just like the toString() method, but in addition it allows for the separator to be specified.
```sh
   name of array.join(" * ");
   ```
# JavaScript Array pop()
This method removes the last element from an array and returns the value that was removed.
```sh
   name of array.pop();
   ```
# JavaScript Array push()
This method adds a new element at the end of an array and returns the new array length.
```sh
   name of array.push();
   ```
# JavaScript Array shift()
This method removes the first element from an array and shifts all the other elements to a lower index. It also returns the value that was removed. 
```sh
   name of array.shift();
   ```
# JavaScript Array unshift()
This method adds a new element to the beginning of an array, and unshifts older elements. It also returns the length of the new array.
```sh
   name of array.unshift();
   ```
# JavaScript Array delete()
This method deletes the elements of an array using the JavaScript operator delete. It is however not advisable as it leaves undefined holes in the array.
It is advisable to use the pop() or shift() methods instead.
```sh
   delete name of array[index];
   ```
# JavaScript Array concat()
This method creates a new array by merging or concatenating already existing arrays. It does not change the existing arrays, it only always returns a new array and it can take any number of array arguments, including strings as arguments.
*Merging Two Arrays*
```sh
   name of array.concat(name of the other array);
   ```
*Merging Three Arrays*
```sh
   name of array.concat(name of array2, name of array3);
   ```
# JavaScript Array flat()
This method reduces the dimensionality of an array through a process known as Flattening. It creates a new array with sub-array elements concatenated to a specified depth.
```sh
   name of array.flat();
   ```
# JavaScript Array splice();
This method adds new items to an array using parameters. The first parameter defines the position where the new element(s) should be added. The second parameter defines how many elements should be removed. The remaining parameters define the new elements to be added. It returns an array with the deleted items.
*With clever parameter setting, splice() can be used to remove elements without leaving holes in the array. Just as before, the first and second parameters remain the same, while the other parameters are omitted.*
```sh
   <name of array>.splice(param1, param2, value(s));
   ```
# JavaScript Array slice()
This method slices out a piece of an array into a new array. It does not remove any elements from the source array. The slice() method can take two arguments(start argument and end argument). It selects elements from the start argument, and up to the end argument, excluding the end argument.
If the end argument is omitted, the slice() method slices out the rest of the array.
```sh
   name of array.slice(index)
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- FUNCTIONS -->
## <a href="https://www.w3schools.com/js/js_functions.asp">JavaScript Functions</a>

A JavaScript function is a block of code created to perform a specific task. It can only be executed when something invokes or calls it.
The syntax of a JavaScript function is as follows;
1. 'function' keyword
2. then name
3. followed by parentheses()

A function name can contain letters, digits, underscores, and dollar signs. The parentheses may include one or more parameter names separated by commas. The code to be executed, by the function, is put in curly braces {}.
```sh
   function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
   ```
Functions have arguments. Arguments are the values received by the function when it is called. Arguments (the parameters) behave as local variables inside a function. A function will stop executing when it reaches a return statement. The return value is "returned" back to the "caller/user".

Functions are necessary and advisable because;
1. It allows for code to be reused.
2. The code can be used many times.
3. The same code can be used with different arguments, to produce different results.

The () operator is used to call a function. Accessing a function with incorrect parameters can return an incorrect answer as well as accessing a function without () returns the function and not the function result.

Functions can be used the same way as variables, in all types of formulas, assignments, and calculations.

Variables declared within a JavaScript function, become LOCAL to the function and can only be accessed from within the function. Due to this, variables with the same name can be used in different functions. Local variables are created when a function starts, and deleted when the function is completed.

# For further reading:
Reference Functions <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions">here</a>

Function Basics <a href="https://javascript.info/function-basics">here</a>


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTROL FLOW STATEMENTS -->
## <a href="https://www.javascripthelp.org/learn/basics/control-flow-statements/">JavaScript Control Flow Statements</a>

Every programming language has control flow statements as a fundamental part of it. Control flow statements allow one to control the order in which statements are executed in programs, based on certain conditions. There are three main types of control flow statements in JavaScript:
1. if/else statements
2. switch statements
3. loops

# If/Else Statements
If/else statements are used to execute a block of code if a certain condition is true, and a different block of code if the condition is false.

# Switch Statements
Switch statements are used to execute a block of code based on the value of a variable or expression.

# Loops
Loops are used to execute a block of code multiple times, based on a certain condition. There are two main types of loops in JavaScript, for loops and while loops.
For Loops
For loops execute a block of code until the set condition is met then it breaks.
While Loops
A while loop simply repeats itself while the condition is true. A while loop can loop forever, theoretically. It continues until the condition is false. Under the while loop, there is a do...while loop. The difference between a while loop and a do...while loop is that a while loop executes a specified statement as long as the condition is true, meanwhile, the do…while loop will first execute the code, then continue while the condition remains true. 


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Adaobi Chuma-Okeke - [@twitter_handle](https://twitter.com/chumzine) - chumzine@gmail.com

Project Link: [https://github.com/Chumzine/assignment--wk9](https://github.com/Chumzine/assignment--wk9)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Women Techsters Fellowship Class of 2024](https://www.womentechsters.org/)
* [Emmanuel Daniel's JavaScript Lessons](https://github.com/emmsdan-inc))
* [Google](https://google.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Chumzine/assignment--wk9.svg?style=for-the-badge
[contributors-url]: https://github.com/Chumzine/assignment--wk9/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Chumzine/assignment--wk9.svg?style=for-the-badge
[forks-url]: https://github.com/Chumzine/assignment--wk9/network/members
[stars-shield]: https://img.shields.io/github/stars/Chumzine/assignment--wk9.svg?style=for-the-badge
[stars-url]: https://github.com/Chumzine/assignment--wk9/stargazers
[issues-shield]: https://img.shields.io/github/issues/Chumzine/assignment--wk9.svg?style=for-the-badge
[issues-url]: https://github.com/Chumzine/assignment--wk9/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/she-adaobi-chuma-okeke-3677a9140
[twitter-shield]: https://img.shields.io/badge/-@chumzine-1ca0f1?style=for-the-badge&logo=twitter&logoColor=white&link=https://twitter.com/chumzine
[twitter-url]: https://twitter.com/chumzine
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
