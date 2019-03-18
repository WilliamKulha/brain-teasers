//FizzBuzz where for whatever reason the solution had to have all the numbers as strings?????
var fizzBuzz = function(n) {
  let fizzBuzzer = [];
  for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 !== 0) {
          fizzBuzzer.push('Fizz');
      } else if (i % 5 === 0 && i % 3 !== 0) {
          fizzBuzzer.push('Buzz');
      } else if (i % 3 === 0 && i % 5 === 0) {
          fizzBuzzer.push('FizzBuzz')
      } else {
          fizzBuzzer.push(i.toString());
      }
  }
  return fizzBuzzer
};
