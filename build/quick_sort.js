"use strict";
// : number 【类型的标注】,add(x, y): number// 标注返回值为数字
function add(x, y) {
    return x + y;
}
console.log(add(1, 222));
var sortArray = [9, 11, 8, 5, 10];
function sortNumber(a, b) {
    return a - b;
}
function q_partition(array, left, right) {
    var pivot = array[left]; // 最左边数基准
    var baseIndex = left;
    while (left < right) {
        // 第一步：从右向左找到第一个比基准小的数
        while (array[right] >= pivot && left < right) {
            right--;
        }
        // 第二步：从左向右找到第一个比基准大的数
        while (array[left] <= pivot && left < right) {
            left++;
        }
        // 第三步：交换两个数
        if (left < right) {
            swap(array, left, right);
        }
    }
    //第四步 把基准放到它正确的位置上，此时i=j
    swap(array, baseIndex, left);
    return left;
}
function quick_store(array, i = 0, j = array.length - 1) {
    if (i < j) {
        let p = q_partition(array, i, j);
        console.log("p:" + p);
        quick_store(array, i, p - 1);
        quick_store(array, p + 1, j);
    }
}
console.log(sortArray);
quick_store(sortArray);
console.log(sortArray);
function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
function sort(array) {
    return array.sort(sortNumber);
}
sort(sortArray);
//# sourceMappingURL=quick_sort.js.map