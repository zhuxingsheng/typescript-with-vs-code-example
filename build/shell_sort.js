"use strict";
var sortArray = [1, 2, 3, 4, 50, 6, 7, 8, 9, 10];
function shell_sort(array) {
    let gap = Math.floor(array.length / 2);
    while (gap > 0) {
        for (let i = gap; i < array.length; i++) {
            let temp = array[i];
            let j = i - gap;
            while (j >= 0 && array[j] > temp) {
                array[j + gap] = array[j];
                j -= gap;
            }
            array[j + gap] = temp;
        }
        gap = Math.floor(gap / 2);
    }
}
console.log(sortArray);
shell_sort(sortArray);
console.log(sortArray);
//# sourceMappingURL=shell_sort.js.map