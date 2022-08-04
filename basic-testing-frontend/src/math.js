export function add(numbers) {
  let sum = 0;

  // throw new Error('Something went wrong!')
  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}

// export function add(...numbers) {
//   let sum = 0;

//   console.log(numbers)
//   sum = numbers.reduce((a, b) => a + b, 0);
//   console.log(sum)
//   return sum;
// }
