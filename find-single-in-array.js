//Given an array of numbers that are all in pairs but one, 
//return the single number in the array;
//This solution also isn't accepted by the website.
// https://leetcode.com/problems/single-number/
const findSingle = (nums) => {
  let winner = null;
  for (let i = 0; i < nums.length; i++) {
    let curVal = nums[i];
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === curVal) {
        count++;
      }
    }
    if (count === 1) {
      winner = curVal;
    }
  }
  return winner;
} 

//More elegant solution to the problem above :

const singleNumber = nums => {
  return nums.reduce((acc,number) => acc^number);
}