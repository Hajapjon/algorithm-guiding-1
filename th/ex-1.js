const moveZeroes = function (nums) {
  let left = 0
  for (let right = 0; right < nums.length; right++) {
    let temp = nums[left]
    if(nums[right] !== 0) {
      nums[left] = nums[right]
      nums[right] = temp
      left++
    }
  }
  return nums
}

const result1 = moveZeroes([0, 1, 0, 3, 12]);
console.log(result1); // [1,3,12,0,0]

const result2 = moveZeroes([0]);
console.log(result2); // [0]
