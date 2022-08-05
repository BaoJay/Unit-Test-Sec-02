import {
    validateStringNotEmpty,
    validateNumber,
} from './util/validation.js';
import { transformToNumber } from './util/numbers.js';


function validateInput(numberInputs) {
    const numbers = [];
    for (const numberInput of numberInputs) {
        validateStringNotEmpty(numberInput);
        const number = transformToNumber(numberInput);
        validateNumber(number);
        numbers.push(number);
    }
    return numbers;
}

export default validateInput;