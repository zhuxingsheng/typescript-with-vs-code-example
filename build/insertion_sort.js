"use strict";
var sortArray = [9, 11, 8, 15, 10];
function insertion_sort(array) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        // while (j >= 0) {
        //     if (array[j] > key) {//从小到大排序
        //         array[j+1] = array[j];
        //         j--;
        //     } else {
        //         break;
        //     }
        // }
        // array[j+1] = key;
        while (j >= 0 && array[j] > key) { //从小到大排序
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
}
console.log(sortArray);
insertion_sort(sortArray);
console.log(sortArray);
//# sourceMappingURL=insertion_sort.js.map