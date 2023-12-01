/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  const numCount = new Map();

  for (const num of nums) {
    numCount.set(num, (numCount.get(num) || 0) + 1);
  }

  let maxLHS = 0;

  for (const key of numCount.keys()) {
    if (numCount.has(key + 1)) {
      const currentLHS = numCount.get(key) + numCount.get(key + 1);

      maxLHS = Math.max(maxLHS, currentLHS);
    }
  }

  return maxLHS;
};
