# Random Password Generator
## Description

With this Password Generator, users are able to generate a random password that includes their desired criteria (e.g., lowercase/uppercase, number, and/or special characters). Randomly generated passwords are important because they are more difficult to guess, making them stronger for protecting confidential information.

To create this Password Generator, I used separate arrays to hold the characters for each criteria and then used confirm prompts so that the user can select whether or not they want to include the displayed criteria in their random password. I also included code that confirms that the user selected at least one character criteria and that they entered a desired password length between 8 and 128 characters. 

Lastly, I wrote the generated password to the page so that it may now be used. To generate the password, I used the 'Math.random()' method to randomly select characters based on the criteria that the user has chosen.

## Screenshot

Here is a screenshot of the published Password Generator, which you can access <a href="https://mcunha17.github.io/password-generator/">here</a>.

![Screenshot of Published Password Generator](/password-generator-screenshot.png)

## Credits

The starter code that I built on for this Password Generator came from <a href="https://github.com/coding-boot-camp/friendly-parakeet">Xandromus</a>. You can access my Password Generator repository with this refactored code <a href="https://github.com/MCunha17/password-generator">here</a>.
