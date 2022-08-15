const helper = (p, up, res) => {
    if (!up.length) {
        res.push(p)
        return
    }

    let curr = up[0]
    helper(p.concat(curr), up.slice(1), res)
    helper(p, up.slice(1), res)
    return res
}

const subsets = function (input, output = []) {
    let res = []
    return helper(output, input, res)
}