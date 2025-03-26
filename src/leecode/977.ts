var nums:number[] = [-4,-1,0,3,10]


function sortedSquares():number[] {

    let result:number[] = new Array(nums.length);

    let resultIndex:number = nums.length-1;

    let left:number = 0;
    let right:number = nums.length-1;

    while(left<=right) {

        if(nums[left] * nums[left] < nums[right] * nums[right]) {
            result[resultIndex] = nums[right] * nums[right];
            resultIndex--;
            right--;

        } else {
            result[resultIndex] = nums[left] * nums[left];
            resultIndex--;
            left++;
        }

    }
    return result;

}

console.log(sortedSquares())