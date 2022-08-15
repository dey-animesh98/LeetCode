var canReach = function (arr, start) {
    const helper = (curr) => {
        if (curr < 0 || curr >= arr.length || arr[curr] < 0) return false

        if (arr[curr] === 0) return true

        arr[curr] = -arr[curr]

        return helper(curr + arr[curr]) || helper(curr - arr[curr])
    }

    return helper(start)
};