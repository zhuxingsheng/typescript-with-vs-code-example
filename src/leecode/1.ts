
/**
 * 
 * 1. 两数之和
力扣题目链接(opens new window)

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9

所以返回 [0, 1]

 */

function twoSum(num:number[],target:number):number[] {
    var result:number[] = [];


    var map:Map<number,number> = new Map();

    for (let i=0;i<num.length;i++) {
        let a:number = target - num[i];

        let index = map.get(a);

        if(index != undefined){
            result = [index,i]
            break;
        }  else {
            map.set(num[i],i)
        }
    }


    return result;

}

var num:number[] = [2,7,11,12]
var result = twoSum(num,9)
console.log(result)