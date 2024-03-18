const _ = require('lodash');
const axios = require('axios');

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

async function fetchRandomDogImage() {
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random');
    return response.data.message;
  } catch (error) {
    throw new Error('Failed to fetch random dog image');
  }
}

module.exports = {
  getRandomElement,
  capitalizeFirstLetter,
  fetchRandomDogImage
};
