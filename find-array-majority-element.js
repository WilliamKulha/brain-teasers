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