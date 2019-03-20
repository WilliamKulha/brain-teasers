let string = '1+3-2*7';
let eq = string.split('');

let operators = {
  '+': (num1, num2)  => {parseInt(num1) + parseInt(num2);},
  '-': (num1, num2) => { parseInt(num1) - parseInt(num2);},
  '*': (num1, num2) => {parseInt(num1) * parseInt(num2);},
  '/': (num1, num2) => {parseInt(num1) / parseInt(num2);}
}

if (eq.includes('*') || eq.includes('/')) {
  let 
}