//Very hard to make this work if it contains multiplication and division.
//If just + and - then it's okay. looop through calling operators consecutively and you'll get to the end.
//If you're allowed to use anything at your disposal, use eval(string);

let string = '1+3-2*7';
let eq = string.split('');

let operators = {
  '+': (num1, num2)  => {parseInt(num1) + parseInt(num2);},
  '-': (num1, num2) => { parseInt(num1) - parseInt(num2);},
  '*': (num1, num2) => {parseInt(num1) * parseInt(num2);},
  '/': (num1, num2) => {parseInt(num1) / parseInt(num2);}
}
