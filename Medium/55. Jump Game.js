var canJump = function (nums) {
    let target = nums.length - 1
    for (let i = nums.length - 1; i >= 0; i--) {
        if (i + nums[i] >= target) target = i
    }
    return target === 0
};



{
    const canJump = function (nums) {

        let max = 0
        for (let i = 0; i < nums.length; i++) {
            if (i > max) return false
            max = Math.max(nums[i] + i, max)
        }
        return true
    };
}