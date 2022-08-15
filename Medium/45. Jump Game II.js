var jump = function (nums) {
    let curr = 0, furthest = 0, jumps = 0

    for (let i = 0; i < nums.length - 1; i++) {
        furthest = Math.max(i + nums[i], furthest)
        if (furthest === nums.length - 1) return jumps + 1
        if (i === curr) {
            curr = furthest
            jumps++
        }
    }
    return jumps
};


console.log(jump([2,3,1,1,4]))