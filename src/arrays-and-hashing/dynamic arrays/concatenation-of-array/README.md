# Concatenation of Array

Difficulty: Easy

DSA: Array

Reference: [LeetCode Problem #1929](https://leetcode.com/problems/concatenation-of-array/description/)

## Description
Given an integer array `nums` of length `n`, you want to create an array `ans` of length `2n` where `ans[i] == nums[i]` and `ans[i + n] == nums[i]` for `0 <= i < n` **(0-indexed)**.

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.

**Example 1**
> Input: nums = [1,2,1]
> Output: [1,2,1,1,2,1]

**Example 2**
> **Input:** nums = [1,3,2,1]
> **Output:** [1,3,2,1,1,3,2,1]

**Constraints:**
- `n == nums.length`
- `1 <= n <= 1000`
- `1 <= nums[i] <= 1000`

---

## Solution

### 1. Spread the array `nums` twice and combine

Time Complexity: O(n)

Space Complexity: O(n)

TS/JS has a nice feature called spread operator which we can to flatten the root level of the array. We spread inside an array and do it twice since the requirements is to make a duplicated version of the original array.

```ts
const getConcatenation = (nums: number[]): number[] => {
    return [...nums,...nums];
};
```

### 2. Preallocation and direct indexing

Time Complexity: O(n)

Space Complexity: O(n)

We already now that the elements after index `[nums.length]` to `[nums.length * 2]` is just the same as index `[0]` to index `[nums.length - 1]`. Therefore, we don't need to iterate through all of them. We will just iterate half the time of the duplicated nums size and do direct indexing for each iteration.

This optimization cuts the time it will take to half.

```ts
const getConcatenation = (nums: number[]): number[] => {
    const len = nums.length;
    const ans:number[] = Array.from({length: len * 2});

    for(let i = 0; i < len; i++) {
      ans[i] = nums[i];
      ans[i + len] = nums[i];
    }

    return ans;
};
```
