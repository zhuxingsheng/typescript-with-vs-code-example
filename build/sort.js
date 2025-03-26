"use strict";
// : number 【类型的标注】,add(x, y): number// 标注返回值为数字
function add(x, y) {
    return x + y;
}
console.log(add(1, 222));
// var sortArray:number[] = [1, 2, 3, 4, 5, 55,44,33,22,11,0];
var sortArray = [2, 55, 22, 33, 33];
function sortNumber(a, b) {
    return a - b;
}
function q_partition(array, i, j) {
    var pivot = array[i];
    var left = i;
    while (i < j) {
        while (array[j] >= pivot && i < j) {
            j--;
        }
        while (array[i] <= pivot && i < j) {
            i++;
        }
        console.log("i:" + i + " j:" + j);
        if (i < j) {
            swap(array, i, j);
        }
    }
    swap(array, left, i); // 把基准放到它正确的位置上，此时i=j
    console.log(sortArray);
    return i;
}
function q_store(array, i = 0, j = array.length - 1) {
    if (i < j) {
        let p = q_partition(array, i, j);
        console.log("p:" + p);
        q_store(array, i, p - 1);
        q_store(array, p + 1, j);
    }
}
console.log(sortArray);
q_store(sortArray);
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
//# sourceMappingURL=sort.js.map