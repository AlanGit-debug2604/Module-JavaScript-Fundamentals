//passwordCheckerFunction

const password = "secretworld123"; //A password value stored

function passwordChecker(userInput) {
  //Compare user input with password stored
  if (userInput === password) {
    //then response if password is correct
    console.log("password is correct");
  } else {
    //else response if password is incorrect
    console.log("password is not correct, please try again");
  }
}

passwordChecker("Helloworld125");
