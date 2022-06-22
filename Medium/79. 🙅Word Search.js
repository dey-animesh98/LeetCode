/**
 * 79. Word Search
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. 
The same letter cell may not be used more than once.
Example 1:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

Example 2:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

Example 3:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
 

Constraints:

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.
 */

{// This solution is fine but not working for the adjacents.
    const exist = function (board, word) {
        let map = {}
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                map[board[i][j]] = (map[board[i][j]] | 0) + 1
            }
        }
        let wordS = word
        for (let s = wordS.length - 1; s >= 0; s--) {
            if (map[wordS[s]]) {
                if (map[wordS[s]] == 1) {
                    delete map[wordS[s]]
                } else {
                    map[wordS[s]] -= 1
                }
                let wordSliced = wordS.slice(0, -1)
                wordS = wordSliced
            }
        }
        return wordS.length == 0 || !wordS  ? true : false
    };
  let res=  exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCD")
  console.log(res)
}
//
