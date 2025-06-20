function mergeSort(arr:number[],left:number,right:number){
 console.log("merge sort -l:"+left +" r:"+right )
    if(left < right) {

        let mid:number = Math.floor((right+left)/2)
        console.log("merge sort -l:"+left +"m: "+mid +" r:"+right )
        mergeSort(arr,left,mid);

        console.log("merge sort 2")
        mergeSort(arr,mid+1,right);

        console.log("start merge l:"+left + "m:"+mid+"r:"+right)
       merge(arr,left,mid,right)

    }



}

function merge(arr:number[],left:number,mid:number,right:number) {

    console.log(left ,mid,right)
    let i = left
    let j = mid+1

    let tmp:number[] = new Array(right - left + 1);

    let t = 0

    for(;i<=mid && j <=right;){
        if(arr[i]<arr[j]) {
            tmp[t++] = arr[i++]
        } else {
            tmp[t++] = arr[j++]
        }
    }

    while(i<=mid){
        tmp[t++] = arr[i++]
    }
    while(j<=right){
        tmp[t++] = arr[j++]
    }

    t = 0
    while(left<=right){
        arr[left++] = tmp[t++]
    }

    console.log(arr)






}

var mergeArr = [2,10,8,6];
mergeSort(mergeArr,0,mergeArr.length-1)
console.log(mergeArr)