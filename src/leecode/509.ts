/**
 * 
 * 1、dp[i] 第i个斐波那契数组的数值
 * 
 * 2、推导公式
 * 
 * 3、初始化
 * 
 * 4、遍历顺序
 * 
 * 5、举例推导
 * 
 * @returns 
 */

function fib(n:number):number {

    let dp:number[] = []

    dp[0] = 0;
    dp[1] = 1;

    for (let i:number = 2;i<=n;i++) {
        
        dp[i] = dp[i-1] + dp[i-2]

    }

    return dp[n];


}