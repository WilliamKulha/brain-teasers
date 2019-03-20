// Given an array of size name, find the majority element
// (the majority element is the element that appears more than n/2 times)
const findMajorityElement = nums => {
  //Using reduce to make a hashtable that counts the number of times each element appears
  let numsHash = nums.reduce(function(acc, curr)  {
    if (typeof acc[curr] === 'undefined') {
        acc[curr] = 1;
    } else {
        acc[curr] += 1;
    }
    return acc;
  }, {});
  let winner = null;
  //Looping through thta table to see if it's occured more than average.
  for (let num in numsHash) {
      if (numsHash[num] >= Math.round(nums.length /2)) {
          winner = num;
      }
  }
  return winner
}




    
    //instead of making a hash, you can just use charCodeAt(index) - 64
    // const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    // const alphHash = alphabet.reduce(function(acc, curr) {
    //     if (typeof acc[curr] === 'undefined') {
    //         acc[curr] = (alphabet.indexOf(curr) + 1);
    //     } return acc;
    // }, {})
    if (s.length === 1) {
      return s.charCodeAt(0) - 64;
  } else {
  let total = 0;
  let power = 0;
  for (let i = 0; i <s.length; i++) {
      power = s.length -1 -i;
      total += s.charCodeAt(i) * (Math.pow(26, power))
  }
  
//     s.split('').forEach(function(curVal, index, arr) {
//         total += alphHash[curVal] * (Math.pow(26, arr.length -1 - index))
//     });
//     return total;
//     }
}
  


/**
* @param {string} s
* @return {number}
*/
var firstUniqChar = function(s) {
  let arr = s.split('')
  let wordHash = arr.reduce(function(acc, cur) {
      if(typeof acc[cur] === `undefined`) {
          acc[cur] = 1;
      } else {
          acc[cur] += 1;
      }
      return acc;
  }, {})
    console.log(hash);
};