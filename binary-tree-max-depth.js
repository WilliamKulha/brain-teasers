//Max Depth of a binary tree. Doesn't take the answer on leetcode because
//it says that array.slice() is not a function. Works in console, babel etc...
//https://leetcode.com/problems/maximum-depth-of-binary-tree/
const maxDepth = (root) => {
  let count = 1;
  let level = 0;
  let copy = root.slice();

  while (copy.length > 0) {
    copy.splice(0, count);
    count = count * 2;
    level++
    console.log(copy, count, level)
  }
  return level;
}