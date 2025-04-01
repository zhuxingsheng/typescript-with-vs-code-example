
function generateMatrix(n:number) :void {

    var left:number = 0;
    var right:number = n -1;

    var top:number = 0;
    var bottom:number = n -1;

    var num:number = 1;

    var result:number[][] = Array.from({ length: n }, () => new Array(n).fill(0));

    while(left<=right && top <= bottom) {

        for (let i=left;i<right;i++){
            result[top][i] = num;
            num++
        }

        for (let i=top;i<bottom;i++){
            result[i][right] = num;
            num++;
        }

        for(let i=right;i>left;i--){
            result[bottom][i] = num;
            num++;
        }

        for(let i=bottom;i>top;i--){
            result[i][left] = num;
            num++;
        }

        top++;
        right--;
        bottom--;
        left++;
     
    }
    //n这奇数时，中间的数得赋值一下
    if(n%2 == 1){
        let mid:number = Math.floor(n / 2);
        result[mid][mid] = num;
    }
    for(let i=0;i<n;i++){
        console.log(result[i])
    }


}
generateMatrix(3)

console.log('--------')

generateMatrix(4)