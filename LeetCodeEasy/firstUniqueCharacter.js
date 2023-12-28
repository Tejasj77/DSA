// Find the first unique character in a string
// I have used a map (hash table)

const firstUniqChar = function (s) {
  const repeating = {}; // new Map() -> will be even faster.
  for (let i = 0; i < s.length; i++) {
    repeating[s[i]] = repeating[s[i]] || [];
    repeating[s[i]].push(i);
  }
  console.log({ repeating });
  for (let key in repeating) {
    if (repeating[key].length === 1) {
      return repeating[key][0];
    }
  }
  return -1;
};
const res = firstUniqChar("leetcode");
console.log({ res });
