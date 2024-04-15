const passwordOutput = document.getElementById("password-output");
const submitButton = document.querySelector("button");
const passwordLengthDisplay = document.getElementById(
  "password-length-display"
);
const passwordLengthSelection = document.getElementById("password-length");
const uppercaseSelection = document.getElementById("uppercase");
const lowercaseSelection = document.getElementById("lowercase");
const numberSelection = document.getElementById("numbers");
const symbolsSelection = document.getElementById("symbols");
const passwordStrengthDisplay = document.getElementById(
  "password-strength-display"
);
const copyButton = document.getElementById("copy-button");

let includeLowers = false;
let includeUppers = false;
let includeNumbers = false;
let includeSymbols = false;

let passwordStrengthScore = 0;

const generatePassword = () => {
  if (!includeUppers && !includeLowers && !includeNumbers && !includeSymbols) {
    passwordOutput.textContent = "Please choose at least 1 criteria";
    return;
  }

  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*?";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowers ? lowercaseLetters : "";
  allowedChars += includeUppers ? uppercaseLetters : "";
  allowedChars += includeNumbers ? numbers : "";
  allowedChars += includeSymbols ? symbols : "";

  for (let i = 0; i < passwordLengthSelection.value; i++) {
    const randomNumber = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomNumber];
  }
  passwordOutput.style.color = "white";
  passwordOutput.textContent = password;
};

const displayStrengthScore = () => {
  if (passwordStrengthScore === 0) {
    passwordStrengthDisplay.textContent = "TOO WEAK";
    passwordStrengthDisplay.style.color = "red";
  } else if (passwordStrengthScore === 1) {
    passwordStrengthDisplay.textContent = "WEAK";
    passwordStrengthDisplay.style.color = "orange";
  } else if (passwordStrengthScore === 2) {
    passwordStrengthDisplay.textContent = "MEDIUM";
    passwordStrengthDisplay.style.color = "yellow";
  } else if (passwordStrengthScore === 3) {
    passwordStrengthDisplay.textContent = "STRONG";
    passwordStrengthDisplay.style.color = "green";
  } else if (passwordStrengthScore === 4) {
    passwordStrengthDisplay.textContent = "VERY STRONG";
    passwordStrengthDisplay.style.color = "lightgreen";
  }
};

submitButton.addEventListener("click", () => {
  generatePassword();
});

passwordLengthSelection.addEventListener("change", () => {
  passwordLengthDisplay.textContent = passwordLengthSelection.value;
});

// Toggle criteria selections
uppercaseSelection.addEventListener("click", () => {
  includeUppers = !includeUppers;
  if (uppercaseSelection.checked) {
    passwordStrengthScore += 1;
  } else {
    passwordStrengthScore -= 1;
  }
  displayStrengthScore();
});

lowercaseSelection.addEventListener("click", () => {
  includeLowers = !includeLowers;
  if (lowercaseSelection.checked) {
    passwordStrengthScore += 1;
  } else {
    passwordStrengthScore -= 1;
  }
  displayStrengthScore();
});

numberSelection.addEventListener("click", () => {
  includeNumbers = !includeNumbers;
  if (numberSelection.checked) {
    passwordStrengthScore += 1;
  } else {
    passwordStrengthScore -= 1;
  }
  displayStrengthScore();
});

symbolsSelection.addEventListener("click", () => {
  includeSymbols = !includeSymbols;
  if (symbolsSelection.checked) {
    passwordStrengthScore += 1;
  } else {
    passwordStrengthScore -= 1;
  }
  displayStrengthScore();
});

copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordOutput.textContent);
  alert("Password copied to clipboard");
});
