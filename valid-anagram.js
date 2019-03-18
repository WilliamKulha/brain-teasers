// Given two strings s and t , write a function to determine if t is an anagram of s.

const isValidAnagram = (s,t) => {
  // if the lengths of s and t are 0, there are no letters and so empty string returns true.
  if (s.length && t.length === 0) {
    return true;
    //if the two aren't the same length, they aren't the same. Return false.
} else if (s.length != t.length) {
    return false;
} else {
  //If they are the same length, split each, sort it alphabetically, then make it a string again to compare the two.
  //If they're the same return true. if not, return false. 
    if (s.split('').sort().join('') === t.split('').sort().join('')) {
        return true
    } else {
        return false;
    }
  }
}