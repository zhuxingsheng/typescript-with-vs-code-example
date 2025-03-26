"use strict";
var nums = [-4, -1, 0, 3, 10];
function sortedSquares() {
    let result = new Array(nums.length);
    let resultIndex = nums.length - 1;
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        if (nums[left] * nums[left] < nums[right] * nums[right]) {
            result[resultIndex] = nums[right] * nums[right];
            resultIndex--;
            right--;
        }
        else {
            result[resultIndex] = nums[left] * nums[left];
            resultIndex--;
            left++;
        }
    }
    return result;
}
console.log(sortedSquares());
//# sourceMappingURL=977.js.map