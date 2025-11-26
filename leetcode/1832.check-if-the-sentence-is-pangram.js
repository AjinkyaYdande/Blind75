/*
 * @lc app=leetcode id=1832 lang=javascript
 *
 * [1832] Check if the Sentence Is Pangram
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
    let mySet = new Set();
    for (let i = 0; i < sentence.length; i++) {
        mySet.add(sentence[i])
    }
    return mySet.size === 26;
};
// @lc code=end

