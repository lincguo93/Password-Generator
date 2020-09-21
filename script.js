///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lower = 'abcdefghijklmnopqrstuvwxyz';
var number = '0123456789';
var sym = '!@#$%^&*_+=-,.?'

function validinput(input){
  var parsed = parseInt(input);
  return isNaN(parsed) || parsed < 8 || parsed > 128;
}

function generatePassword(){
  // slect a length between 8 - 128
  var leng = prompt("How long would you like your password to be? (Between 8 and 128)");
  while (validinput(leng)){
    leng = prompt("Please provide a valid input for password length! \nHow long would you like your password? (Between 8 and 128)");
  }
    
  /*if (leng >= 8 && leng <= 128){
      alert("Your password will be " + leng + " characters");
    }
    else {
      alert("Please provide a valid input for password length!");
    }*/

  // slect a character type: lowercase
  var low = confirm("Do you want any lowercase letter?")
  // slect a character type: uppercase
  var up = confirm("Do you want any upper letter?")
  // slect a character type: numeric
  var numb = confirm("Do you want any numbers?")
  // slect a character type: special characters
  var cha = confirm("Do you want any special characters?")
  // all input shuold be validated and at least one character type should be selected
  // generate password that matches the selected criteria
  var characters;
  (low === true) ? characters += lower : "";
  (up === true) ? characters += upper : "";
  (numb === true) ? characters += number : "";
  (cha === true) ? characters += sym : "";

  if (low === false && up === false && numb === false && cha === false){
    alert("Please select at least one character type!");
    return generatePassword();
  } 
  
  var newpassword = '';
  if (characters){
    for (let i = 0; i < leng; i++) {
    newpassword += characters.charAt(Math.floor(Math.random() * characters.length)); 
    }
  }
  // alert generated password
  return newpassword;

}
// console.log(generatePassword(12,upper));

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////
