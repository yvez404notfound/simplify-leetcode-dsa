
const getConcatenation = (nums: number[]): number[] => {
    const len = nums.length;
    const ans:number[] = Array.from({length: len * 2});

    for(let i = 0; i < len; i++) {
      ans[i] = nums[i];
      ans[i + len] = nums[i];
    }

    return ans;
};

/*
const getConcatenation = (nums: number[]): number[] => {
    return [...nums,...nums];
};
*/

export { getConcatenation };
