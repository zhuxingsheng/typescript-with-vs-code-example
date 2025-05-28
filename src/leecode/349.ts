

/**
 * 
349. 两个数组的交集

力扣题目链接(opens new window)

题意：给定两个数组，编写一个函数来计算它们的交集

 */



function intersection(num1:number[],num2:number[]) : number[] {
    let set1:Set<number> = new Set(num1);
    let resSet:Set<number> = new Set();
    

    for (let i=0;i<num2.length;i++) {
        if(set1.has(num2[i])) {
            resSet.add(num2[i])
        }
    }

    return Array.from(resSet);

}


var num1:number[] = [1,2,2,1,4],num2:number[] = [2,2,9,5,4]

var result : number[] = intersection(num1,num2)

console.log(result)

