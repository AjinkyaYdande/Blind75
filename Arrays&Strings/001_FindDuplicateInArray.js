// Brute Force Approach to find if there is any duplicate in the array
function findDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
}

console.log(findDuplicate([1, 2, 3, 4, 5, 3])); // true
console.log(findDuplicate([1, 2, 3, 4, 5])); // false


// Optimized Approach using Set to find if there is any duplicate in the array
function findDuplicateOptimized(nums) {
    let mySet = new Set();
    for (let num of nums) {
        if (mySet.has(num)) {
            return true;
        }
        mySet.add(num);
    }
    return false;
}

console.log(findDuplicateOptimized([1, 2, 3, 4, 5, 3])); // true
console.log(findDuplicateOptimized([1, 2, 3, 4, 5])); // false
