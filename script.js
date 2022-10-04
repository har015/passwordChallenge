// Assignment Code
//variables
var generateBtn = document.querySelector("#generate");
var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIGKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var special = "?><,./+_-=:'}{[]|\'";
var passlength;
var uppercase1;
var lowercase1;
var number1;
var special1;

// Write password to the #password input
//set length funtion
function makeLength(){
passlength = window.prompt("How long will the password be?");
 
if (passlength<8||passlength>128){
    window.alert("chnage quanity from 8-128");
    MakeLength();
  }
  else
  {
    alert("coninue, enter yes or no for following questions:");
  }
  return passlength;
}
//ask if user wants upercase
function uppercaseTest(){
uppercase1 = window.prompt("will it have uppercase?");
if (uppercase1 == "yes"){
  uppercase1 = true;
  return uppercase1;
}
else if (uppercase1 == "no"){
  uppercase1 = false;
  return uppercaseTest
}
else {
  window.alert("yes or no?")
  uppercaseTest();
}
return uppercase1;
}
// ask if user wants numbers
function numbersTest(){
number1 = window.prompt("are you going to have numbers?")
if (number1 == "yes"){
  number1 = true;
  return number1;

}
else if (number1 == "no"){
  number1 = false;
  return number1;
}
else {
  window.alert("enter yes or no");
  numberTest();
}
return number1;
}
//ask user if they want special charachters
function specialTest(){
special1 = window.prompt("will it have special charachters?");

if (special1 == "yes")
{ 
  specal1 = true;
  return special1;
}
else if (special1 == "no"){
  special1 = false;
  return special1;
}
else {
  window.alert("enter yes or no");
  specialTest();
}
return special1;
}
//genertates final password
function generatePassword(){
makeLength();
uppercaseTest();
numbersTest();
specialTest();
var charachters = lower;
var password = ""; 
if (uppercase1 && number1 && special1){
  charachters += upper + numbers + special;
}
else if (uppercase1 && number1){
  charachters += upper + numbers;
}
else if (uppercase1 && special1){
  charachters += upper + special;
}
else if (uppercase1){
  charachters += upper;
}
else if(number1){
  charachters += numbers;
}
else if (special1){
  charachters += special;
}
 else {
   charachters == lower;
 }
 for (var i=0; i<passlength; i++){
   password += charachters.charAt(Math.floor(Math.random() * charachters.length));
 }
 window.alert(password);
 return password;
 }

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
