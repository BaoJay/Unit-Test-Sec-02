import transformInput from './src/transform-input.js'

import { add } from './src/math.js';
import validateInput from './src/validate-input.js';

const form = document.querySelector('form');
const output = document.getElementById('result');

function formSubmitHandler(event) {
  event.preventDefault();
  console.log('Clicked! ');

  // 1. Read & transform input
  const numberInputs = transformInput(form);

  // 2. Validate input
  let result = '';
  try {
    const numbers = validateInput(numberInputs);
    // return an array of numbers

    // 3. Calculate the input
    result = add(numbers).toString();

  } catch (error) {
    result = error.message;
  }

  // 4. Take the output text
  let resultText = '';
  // if (result === 'invalid') {
  //   resultText = 'Invalid input. You must enter valid numbers.';
  // } else if (result !== 'no-calc') {
  resultText = 'Result: ' + result;
  // }

  // 5. Print the output in the DOM
  output.textContent = resultText;
}

form.addEventListener('submit', formSubmitHandler);
