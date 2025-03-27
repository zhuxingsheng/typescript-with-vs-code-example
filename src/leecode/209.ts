var nums:number[] = [2,3,1,2,4,3,4]

function find_min_length_array(s:number):number[] {
    let length = Number.MAX_VALUE;
    for (let i:number=0;i<nums.length;i++) {
        let sum:number = 0;
        
        for(let j:number =i;j<nums.length;j++){
            sum += nums[j];

            if(sum  >= s) {
                length = j-i + 1 < length ? j-i + 1 : length;
            }
        }
    }

    return [length];

}

function find_min_length_array_v2(s:number):number[] {

    let j:number = 0;
    let i:number = 0;
    let length = Number.MAX_VALUE;
    let sum:number = 0;
    let flag = true;
    while(i<j || flag) {
        flag = false;
        if(sum >= s) {
            //j被++了，这儿得多-1
            length = j-1-i+1 < length ? j-1-i+1:length;
            sum -= nums[i]
            i++;
            if(j==nums.length && sum<s){
                //如果要得到哪个索引开的数，这儿得--
                //i--;
                break;
            }
            
        } else {
            if(j<nums.length){
                sum += nums[j++]
            }
            // if(sum >= s){
            //     j--;
            // }
            
        }
        // console.error(`${i} - ${j}`)
    }



    return [length];



}


console.log(find_min_length_array(7))

console.log(find_min_length_array_v2(7))