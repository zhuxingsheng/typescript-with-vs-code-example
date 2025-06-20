/**
 * 62.不同路径
 */

var uniquePaths = function uniquePaths(m:number,n:number){
    let dp = Array.from({length:m},() => new Array(n).fill(0));

    //初始化，最上边和最左边的路径都只有一条，为什么？ 因为题目指出每次只能向右或向下走一步，不可能随便绕
    for(let i =0 ;i<m;i++) {
        dp[i][0] = 1
    }

    for(let j =0 ;j<n;j++) {
        dp[0][j] = 1
    }

    for(let i=1;i<m;i++) {
        for (let j=1;j<n;j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }

    return dp[m-1][n-1]

}

console.log(uniquePaths(7,3))