import sum from "./sum.js";

test("adds 5 + 4 equals to 9",() => {
    expect(sum(5,4)).toBe(9);
});