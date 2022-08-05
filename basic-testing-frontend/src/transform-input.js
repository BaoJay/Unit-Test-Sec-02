import { extractNumbers } from './parser.js';

function transformInput(form) {
    const formData = new FormData(form); // New JS object
    const numberInputs = extractNumbers(formData); // return an array of input numbers
    return numberInputs;
}

export default transformInput;