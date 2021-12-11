  // Button
var generateBtn = document.querySelector("#generate");

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

  // generatePassword function()
function generatePassword() {
    // 1. prompt the user for pw criteria
    //   1a. pw length between 8 and 128
    //   1b. prompt user for character types (lowercase, uppercase, numeric &/or special characaters)
    // 2. validate the input
    // 3. generate pw based on criteria
    var pwCharacters = window.prompt("How many characters would you like your password to have?");
    var includeSpecial = window.confirm("Click OK to include special characters.");
    var includeNumbers = window.confirm("Click OK to include numbers.");
    var includeLowercase = window.confirm("Click OK to include lowercase characters.");
    var includeUppercase = window.confirm("Click OK to include uppercase characters.");
    var password = "";
    var possibleCharacters = "";
    if (includeSpecial) {
      possibleCharacters = possibleCharacters + "!@#$%^&*()";
    }
    if (includeNumbers) {
      possibleCharacters += "1234567890";
    }
    if (includeUppercase) {
      possibleCharacters += "QWERTYUIOPASDFGHJKLZXCVBNM";
    }
    if (includeLowercase) {
      possibleCharacters += "qwertyuiopasdfghjklzxcvbnm"
    }
    for (let i = 0; i < pwCharacters; i++) {
      var randomnum = randomIntFromInterval(0,possibleCharacters.length - 1)
      password += possibleCharacters.charAt(randomnum);
    }

    // 4. display pw to the page 
  return password;
}


  // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);