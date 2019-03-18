//Given an array of numbners, write a function to move all the 0's to the end while keeping all other elements in the same order.
const moveZeroes = nums => {
  //loop through the array backwards
  for(let i = nums.length; i--;) {
    //check if the number at that index is a zero.
    if(nums[i] === 0) {
      //if it's a zero, then remove it from wherever it is.
      nums.splice(i, 1);
      //then slap it on the end.
      nums.push(0);
    }
  }
}