function heapSort(arr:number[]){

    buildHeap(arr,arr.length)

    for(let i = arr.length;i>0;i--) {

        let tmp = arr[0]
        arr[0] = arr[i - 1]
        arr[i - 1] = tmp;

        heapify(arr,i-1,0)
    }
    


}

/**
 * 构建堆
 * @param n 需要构建椎的数组长度
 */
function buildHeap(arr:number[],n:number) {

    for(let i=Math.floor(n/2)-1;i>=0;i--) {
        heapify(arr,n,i);
    }
}

function heapify(arr:number[],n:number,i:number){
    let left = i * 2 +1;
    let right = i*2 +2;
    let maxIndex = i;

    if(left < n && arr[left]>arr[maxIndex]) {
        maxIndex = left
    }
    if(right < n && arr[right] > arr[maxIndex]) {
        maxIndex = right
    }

    if(maxIndex != i) {
        let tmp = arr[i]
        arr[i] = arr[maxIndex]
        arr[maxIndex] = tmp

        heapify(arr,n,maxIndex)
    }
}


var arr = [4,6,8,5,9]
console.log(arr)

heapSort(arr)
console.log(arr)