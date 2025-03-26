/**
 * 
 * https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0704.%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.md
 * 
 * 
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。


示例 1:

输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
示例 2:

输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1
 

提示：

你可以假设 nums 中的所有元素是不重复的。
n 将在 [1, 10000]之间。
nums 的每个元素都将在 [-9999, 9999]之间。
 */

var nums = [-1,0,3,5,9,12];

var target = 9;

function search(): number {
    let right = nums.length - 1;
    let left = 0;
    let result = -1;
    while (left <= right) {
        let mid:number = Math.floor((right-left)/2) + left;
        if(nums[mid] == target) {
            result = mid;
            break;
        } else if(nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid+1;
        }
    }
    return result;
}

target = 2
console.log(search())