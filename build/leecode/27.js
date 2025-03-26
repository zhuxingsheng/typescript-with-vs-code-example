"use strict";
var nums = [-1, 0, 3, 5, 9, 5, 12];
function remove_element(element) {
    let size = nums.length;
    for (let i = 0; i < size; i++) {
        if (nums[i] == element) {
            for (let j = i + 1; j < nums.length; j++) {
                nums[j - 1] = nums[j];
            }
            i--;
            //nums[j] = null
            size--;
        }
    }
    return size;
}
/**
 *
 * 快慢指针法
 *
 * fastIndex 要处理的数据
 *
 * slowIndex 需要的数据
 * @param element
 * @returns
 */
function remove_element_v2(element) {
    let slowIndex = 0;
    for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
        if (nums[fastIndex] != element) {
            nums[slowIndex++] = nums[fastIndex];
        }
    }
    return slowIndex;
}
// console.log(remove_element(5))
console.log(remove_element_v2(5));
console.log(nums);
//# sourceMappingURL=27.js.map