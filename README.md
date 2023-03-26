# Random Password Generator
## Description

With this Password Generator, users are able to generate a random password that includes their desired criteria (e.g., lowercase/uppercase, number, and/or special characters). Randomly generated passwords are important because they are more difficult to guess, making them stronger for protecting confidential information.

To create this Password Generator, I used separate arrays to hold the characters for each criteria and then used confirm prompts so that the user can select whether or not they want to include the displayed criteria in their random password. I also included code that confirms that the user selected at least one character criteria and that they entered a desired password length between 8 and 128 characters. 

Lastly, I wrote the generated password to the page so that it may now be used. To generate the password, I used the 'Math.random()' method to randomly select characters based on the criteria that the user has chosen.

## Table of Contents
* [Screenshot] (#Screenshot)
* [Credits] (#Credits)
* [Sources] (#Sources)

## Screenshot

Here is a screenshot of the published Password Generator, which you can access <a href="https://mcunha17.github.io/password-generator/">here</a>.

![Screenshot of Published Password Generator](/assets/images/generator-screenshot.png)

## Credits

The starter code that I built on for this Password Generator came from <a href="https://github.com/coding-boot-camp/friendly-parakeet">Xandromus</a>. You can access my Password Generator repository with this refactored code <a href="https://github.com/MCunha17/password-generator">here</a>.

## Sources
Sources referenced to write this code include:
* <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model">MDN Web Docs: Document Object Model (DOM)</a>.
* <a href="https://www.w3schools.com/jsref/met_win_prompt.asp">W3 Schools: Prompt Method</a>.
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else">MDN Web Docs: if... else</a>.
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration">MDN Web Docs: Loops and Iteration</a>.
* <a href="https://www.w3schools.com/js/js_string_methods.asp">W3 Schools: JavaScript String Methods</a>.
* <a href="https://www.w3schools.com/js/js_random.asp">W3 Schools: JavaScript Random</a>.

