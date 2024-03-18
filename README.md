# Js-edwardcollins

Js-edwardcollins is a Node.js module containing a collection of funky utility functions.

## Installation

You can install this module via npm: `npm install js-edwardcollins`

## Usage

```javascript
const funkyUtils = require('funky-utils');

console.log(funkyUtils.getRandomElement([1, 2, 3, 4, 5])); // Output a random element from the array
console.log(funkyUtils.capitalizeFirstLetter('hello')); // Capitalize the first letter of the string
funkyUtils.fetchRandomDogImage().then(imageUrl => console.log(imageUrl)); // Fetch a random dog image URL
```
