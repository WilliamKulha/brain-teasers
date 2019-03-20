//Given a string, determine whether it's made up of only unique characters.
const isUniqueString = function(item) {
  //Take the string and make a set from it. This will only allow one of each letter that appears in the word.
  let checker = new Set(item.split(''));
  //If the size of checker (the set) is less than the length of the original string, that means there are some repeated letters in the word.
  return checker.size === item.length;
}

//Given two strings, determine if they are permutations of each other.
const arePermutations = function(s1, s2) {
  return s1.split('').sort().join('') === s2.split('').sort().join('');
}

//Given a string, replace all spaces in its name with %20 like it was a url.
const urlIfy = function(s) {
  return s.replace(/ /g, '%20');
}