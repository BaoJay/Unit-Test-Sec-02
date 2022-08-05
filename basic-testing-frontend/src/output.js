export function outputResult(resultInput) {
    let resultText = '';
    if (result === 'invalid') {
        resultText = 'Invalid input. You must enter valid numbers.';
    } else if (result !== 'no-calc') {
        resultText = 'Result: ' + resultInput;
    }

    return resultText;
}

export function generateResult(resultText) {
    const output = document.getElementById('result');
    output.textContent = resultText;
}