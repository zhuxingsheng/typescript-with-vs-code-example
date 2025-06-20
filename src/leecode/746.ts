/**
 * 
 * 1、明确dp的含义
 * 
 * 2、推导公式
 * 
 * 3、初始化
 * 
 * 4、遍历顺序
 * 
 * 5、举例推导
 */

var climbStairsCost = function () {
    let dp = []

    dp[0] = 0;
    dp[1] = 0

    let cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
    let n = cost.length
    for(let i = 2;i<=n;i++) {
        dp[i] = Math.min(dp[i-1]+cost[i-1],dp[i-2]+cost[i-2])
    }

    return dp[n]

}

console.log(climbStairsCost())