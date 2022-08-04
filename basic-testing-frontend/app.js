import { extractNumbers } from './src/parser.js';
import {
  validateStringNotEmpty,
  validateNumber,
} from './src/util/validation.js';
import { add } from './src/math.js';
import { transformToNumber } from './src/util/numbers.js';

const form = document.querySelector('form');
const output = document.getElementById('result');

function formSubmitHandler(event) {
  event.preventDefault();
  const formData = new FormData(form); // New JS object
  const numberInputs = extractNumbers(formData); // return an array of input numbers

  // console.log(form)
  // console.log(+formData.get('num2'));
  // console.log(numberInputs)
  let result = '';

  try {
    const numbers = [];
    for (const numberInput of numberInputs) {
      validateStringNotEmpty(numberInput);
      const number = transformToNumber(numberInput);
      validateNumber(number);
      numbers.push(number);
    }
    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
    console.log(error);
  }

  console.log(result);
  let resultText = '';

  // if (result === 'invalid') {
  //   resultText = 'Invalid input. You must enter valid numbers.';
  // } else if (result !== 'no-calc') {
  resultText = 'Result: ' + result;
  // }

  output.textContent = resultText;
}

form.addEventListener('submit', formSubmitHandler);
