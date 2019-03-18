//Given a roman numeral, write a function to turn that roman numeral into an Arabic one.
//AKA THE POWER OF HASHTABLES!!!!

const romanToInteger = numeral => {
  //First make a hashtable for the value of every letter as a roman numeral.
  const romanValues = {};
  romanValues['M'] = 1000;
  romanValues['D'] = 500;
  romanValues['C'] = 100;
  romanValues['L'] = 50;
  romanValues['X'] = 10;
  romanValues['V'] = 5;
  romanValues['I'] = 1;

  //Then we're going to set the total to 0 (we'll add to this later)
  //And we're also going to set up a variable to hold the previous value.
  let total = 0;
  let preVal = 0;
  //Loop through the roman numeral from left to right (highest to lowest values)
  for (let i = 0; i < numeral.length; i++) {
    let curVal = romanValues[s[i]];
    //You have to check if the previous value is worth less than the current value. If it is, that means something's wrong--
    //Roman numerals go from big to small, left to right. 
    if (preVal < curVal) {
      //So we take the previous value off the total.
      total -= preVal;
      //And we take it away from the current value
      curVal = curVal - preVal;
    }
    //set the current value to previous value and then add it onto the total.
    preVal = curVal
    total += curVal
  }
  return total;
};

