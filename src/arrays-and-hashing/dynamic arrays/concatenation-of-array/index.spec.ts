import { getConcatenation } from ".";


describe("Concatenation of Array", () => {
  test.each([
    [[1, 2, 1], [1, 2, 1, 1, 2, 1]],
    [[1, 3, 2, 1], [1, 3, 2, 1, 1, 3, 2, 1]],
    [[1], [1, 1]],
    [[1000], [1000, 1000]],
    [[1, 1], [1, 1, 1, 1]],
    [[1, 2], [1, 2, 1, 2]],
    [[5, 10, 15], [5, 10, 15, 5, 10, 15]],
    [[100, 200, 300], [100, 200, 300, 100, 200, 300]],
    [[1, 1000], [1, 1000, 1, 1000]],
    [[9, 8, 7, 6, 5], [9, 8, 7, 6, 5, 9, 8, 7, 6, 5]],
  ])("getConcatenation(%j) should return %j", (nums, expected) => {
    expect(getConcatenation(nums)).toEqual(expected);
  });

  test("should return twice the original length", () => {
    const nums = [1, 2, 3];

    expect(getConcatenation(nums)).toHaveLength(nums.length * 2);
  });

  test("should not mutate the original array", () => {
    const nums = [1, 2, 3];
    const original = [...nums];

    getConcatenation(nums);

    expect(nums).toEqual(original);
  });
});