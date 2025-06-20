function maxSubArray(nums:number[]){
    // 数组长度，dp初始化
    const len = nums.length;
    let dp = new Array(len).fill(0);
    dp[0] = nums[0];
    // 最大值初始化为dp[0]
    let max = dp[0];
    for (let i = 1; i < len; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
        // 更新最大值
        max = Math.max(max, dp[i]);
    }
    return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))