// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Character type arrays for password
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericCharacters = "0123456789";
var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// Function to generate password
function generatePassword () {
  var passwordLength = prompt("Enter a password length between 8 and 128 characters.");

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid number that is between 8 and 128.");
    return null;
  }
  else {
    var characters = "";

    // Message to include lowercase characters
    var includeLowercase = confirm("Click 'Okay' if the password should include lowercase characters. If not, click 'Cancel'."); 
    if (includeLowercase) { 
      characters += lowercaseCharacters;
    }

    // Message to include uppercase characters
    var includeUppercase = confirm("Click 'Okay' if the password should include uppercase characters. If not, click 'Cancel'.");
    if (includeUppercase) {
      characters += upperCaseCharacters;
    }

    // Message to include numeric characters
    var includeNumeric = confirm("Click 'Okay' if the password should include numeric chracters. If not, click 'Cancel'.");
    if (includeNumeric) {
      characters += numericCharacters;
    }

    // Message to include special characters
    var includeSpecial = confirm("Click 'Okay' if the password should include special characters. If not, click 'Cancel'.");
    if (includeSpecial) {
      characters += specialCharacters;
    }

    // Check that 'Yes' was answered for at least one criteria
    if (characters.length === 0) {
      console.log("Please click 'Okay' for at least one of the character criteria.");
      return null;
    }

    var password = "";

    // Random math to generate a password
    for (var i=0; i < passwordLength; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password !== null) {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
