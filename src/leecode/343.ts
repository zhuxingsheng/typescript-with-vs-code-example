/**
 * 
 * 343. 整数拆分
 * 
 * 1、dp[i] 把 i 拆分后的最大积
 * 
 * 2、推导公式
 * 
 *    如果分成两个数,从1开始拆分，遍历j ：  j*(i-j)
 * 
 *    j*dp[i-j], dp[i-j] 把i-j进行拆分，得到最大积dp[i-j]
 * 
 *    dp[i] = max{dp[i],j*(i-j),j*dp[i-j]}
 * 
 * 3、初始化
 *  
 *  拆分0和1 没有意义
 * 
 *  dp[2] = 1
 * 
 * 4、遍历顺序
 * 
 * 5、举例推导
 * 
 * 
 */
var splitInt = function(n:number) {

    var dp:number[] = new Array(n+1).fill(0)
    dp[2] = 1

    for(let i = 3;i<=n;i++) {
        for (let j = 1;j<i;j++){
            dp[i] = Math.max(j*(i-j),j*dp[i-j],dp[i]);
        }
    }
    return dp[n]

}

console.log(splitInt(10))