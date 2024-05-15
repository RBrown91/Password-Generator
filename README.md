# Frontend Mentor - Password generator app solution

This is a solution to the [Password generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Generate a password based on the selected inclusion options
- Copy the generated password to the computer's clipboard
- See a strength rating for their generated password
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](starter-code/assets/images/screenshot.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

Within this project I decided to use a method in which a variable held all the possible characters a user could select from the checkboxes. I then used a loop to generate random characters from the 'allowedChars' variable. This solution resulted in the generated password being not only a random selection of characters but also ensured they did not follow any pattern in which a character was selected from the options. I deemed this approach safer as without a set pattern, any resulting password would be harder to guess.

The strength of the password is based on the amount of checkboxes the user has selected. As the minimum password length is 8, the resulting strenght could be easily determined based on those factors. Users can also click the button to copy the password to their clipboard.

I learned how to style the various input components

```css
input[type="checkbox"] {
  accent-color: #a4ffaf;
}
input[type="range"] {
  accent-color: #a4ffaf;
}
```

I am pleased with the function to generate a password based on the checkbox criteria selected.

```js
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
  copiedOutput.textContent = "";
};
```
