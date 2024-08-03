// Day 22: LeetCode Medium


// Tasks/Activities:

// Activity 1: Add Two Numbers

// * Task 1: Solve the "Add Two Numbers" problem on LeetCode.

// * Write a function that takes two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.

// * Create a few test cases with linked lists and log the sum as a linked list..

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1, l2) {
    let dummy = new ListNode();
    let current = dummy;
    let carry = 0;

    while (l1 || l2 || carry) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;

        // Calculate the sum of the current digits plus carry
        let total = val1 + val2 + carry;
        carry = Math.floor(total / 10);
        current.next = new ListNode(total % 10);

        // Move to the next nodes
        current = current.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummy.next;
}

// Helper function to create a linked list from an array of numbers
function createLinkedList(numbers) {
    let dummy = new ListNode();
    let current = dummy;
    for (let number of numbers) {
        current.next = new ListNode(number);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to print the linked list
function printLinkedList(node) {
    let result = [];
    while (node) {
        result.push(node.val);
        node = node.next;
    }
    console.log(result.join(" -> "));
}

// Test cases
let l1 = createLinkedList([2, 4, 3]);  // Represents the number 342
let l2 = createLinkedList([5, 6, 4]);  // Represents the number 465

let result = addTwoNumbers(l1, l2);
console.log("Test Case 1:");
printLinkedList(result);  // Expected output: 7 -> 0 -> 8 (which represents the number 807)

l1 = createLinkedList([0]);
l2 = createLinkedList([0]);

result = addTwoNumbers(l1, l2);
console.log("Test Case 2:");
printLinkedList(result);  // Expected output: 0

l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);  // Represents the number 9999999
l2 = createLinkedList([9, 9, 9, 9]);  // Represents the number 9999

result = addTwoNumbers(l1, l2);
console.log("Test Case 3:");
printLinkedList(result);  // Expected output: 8 -> 9 -> 9 -> 9 -> 0 -> 0 -> 0 -> 1 (which represents the number 10009998)

console.log(); // This is only for space





// Activity 2: Longest Substring Without Repeating Characters

// * Task 2: Solve the "Longest Substring Without Repeating Characters problem on LeetCode.

// * Write a function that takes a string and returns the length of the longest substring without repeating characters.

// * Log the length for a few test cases, including edge cases.

function lengthOfLongestSubstring(s) {
    let n = s.length;
    let set = new Set();
    let ans = 0, i = 0, j = 0;
    
    while (i < n && j < n) {
        // Try to extend the range [i, j]
        if (!set.has(s[j])) {
            set.add(s[j++]);
            ans = Math.max(ans, j - i);
        } else {
            set.delete(s[i++]);
        }
    }
    return ans;
}

// Test cases
console.log("Test Case 1:");
console.log(lengthOfLongestSubstring("abcabcbb"));  // Expected output: 3 ("abc")

console.log("Test Case 2:");
console.log(lengthOfLongestSubstring("bbbbb"));  // Expected output: 1 ("b")

console.log("Test Case 3:");
console.log(lengthOfLongestSubstring("pwwkew"));  // Expected output: 3 ("wke")

console.log("Test Case 4:");
console.log(lengthOfLongestSubstring(""));  // Expected output: 0

console.log("Test Case 5:");
console.log(lengthOfLongestSubstring("au"));  // Expected output: 2 ("au")

console.log("Test Case 6:");
console.log(lengthOfLongestSubstring("dvdf"));  // Expected output: 3 ("vdf")

console.log(); // This is only for space




// Activity 3: Container With Most Water

// * Task 3: Solve the "Container With Most Water" problem on LeetCode.

// * Write a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each point. Find two lines that together with the x-axis form a container, such that the container holds the most water. • Log the maximum amount of water for a few test cases.

function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    
    while (left < right) {
        // Calculate the area between the lines at left and right
        let width = right - left;
        let currentHeight = Math.min(height[left], height[right]);
        let area = width * currentHeight;
        
        // Update the maximum area
        maxArea = Math.max(maxArea, area);
        
        // Move the pointer pointing to the shorter line
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxArea;
}

// Test cases
console.log("Test Case 1:");
console.log(maxArea([1,8,6,2,5,4,8,3,7]));  // Expected output: 49

console.log("Test Case 2:");
console.log(maxArea([1,1]));  // Expected output: 1

console.log("Test Case 3:");
console.log(maxArea([4,3,2,1,4]));  // Expected output: 16

console.log("Test Case 4:");
console.log(maxArea([1,2,1]));  // Expected output: 2

console.log("Test Case 5:");
console.log(maxArea([2,3,4,5,18,17,6]));  // Expected output: 17

console.log(); // This is only for space




// Activity 4: 3Sum

// * Task 4: Solve the "3Sum" problem on LeetCode.

// * Write a function that takes an array of integers and finds all unique triplets in the array which give the sum of zero.

// * Log the triplets for a few test cases, including edge cases.

function threeSum(nums) {
    const result = [];
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicate elements
        
        let left = 0;
        let right = nums.length - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicates
                while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicates
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return result;
}

// Test cases
console.log("Test Case 1:");
console.log(threeSum([-1, 0, 1, 2, -1, -4]));  // Expected output: [[-1, -1, 2], [-1, 0, 1]]

console.log("Test Case 2:");
console.log(threeSum([]));  // Expected output: []

console.log("Test Case 3:");
console.log(threeSum([0]));  // Expected output: []

console.log("Test Case 4:");
console.log(threeSum([0, 0, 0]));  // Expected output: [[0, 0, 0]]

console.log("Test Case 5:");
console.log(threeSum([-2, 0, 1, 1, 2]));  // Expected output: [[-2, 0, 2], [-2, 1, 1]]

console.log(); // This is only for space





// Activity 5: Group Anagrams

// * Task 5: Solve the "Group Anagrams" problem on LeetCode.

// * Write a function that takes an array of strings and groups anagrams together.

// * Log the grouped anagrams for a few test cases.

function groupAnagrams(strs) {
    const map = new Map();
    
    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }
    
    return Array.from(map.values());
}

// Test cases
console.log("Test Case 1:");
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));  
// Expected output: [["eat","tea","ate"],["tan","nat"],["bat"]]

console.log("Test Case 2:");
console.log(groupAnagrams([""]));  
// Expected output: [[""]]

console.log("Test Case 3:");
console.log(groupAnagrams(["a"]));  
// Expected output: [["a"]]

console.log("Test Case 4:");
console.log(groupAnagrams(["ab", "ba", "abc", "cba", "bca", "acb"]));  
// Expected output: [["ab","ba"],["abc","cba","bca","acb"]]

console.log("Test Case 5:");
console.log(groupAnagrams(["cat", "dog", "god", "tac", "act"]));  
// Expected output: [["cat","tac","act"],["dog","god"]]
