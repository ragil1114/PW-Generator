  // Assignment Code
var generateBtn = document.querySelector("#generate");


  // generatePassword function()
function generatePassword() {
  console.log("BUTTON CLICKED")
    // 1. prompt the user for pw criteria
    //   1a. pw length between 8 & 128
    //   1b. prompt user for character types (lowercase, uppercase, numeric &/or special characaters)
    // 2. validate the input
    // 3. generate pw based on criteria


    // 4. display pw to the page 
  return "generated pW will go here";
}


  // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);