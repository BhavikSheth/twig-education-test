const { groupArrayElements } = require("./index");

describe("groupArrayElements", () => {
  test("empty elements", () => {
    const result = groupArrayElements([], 3);

    const expected = [[], [], []];

    expect(result).toEqual(expected);
  });

  test("total groups less than length of elements", () => {
    const result = groupArrayElements([1, 2, 3, 4, 5], 3);

    const expected = [[1, 2], [3, 4], [5]];

    expect(result).toEqual(expected);
  });

  test("total groups equal to length of elements", () => {
    const result = groupArrayElements([1, 2, 3, 4, 5], 5);

    const expected = [[1], [2], [3], [4], [5]];

    expect(result).toEqual(expected);
  });

  test("total groups more than length of elements", () => {
    const result = groupArrayElements([1, 2, 3, 4, 5], 10);

    const expected = [[1], [2], [3], [4], [5], [], [], [], [], []];

    expect(result).toEqual(expected);
  });

  test("more than 1 remaining element", () => {
    const result = groupArrayElements([1, 2, 3, 4, 5, 6, 7], 5);

    const expected = [[1, 2], [3, 4], [5], [6], [7]];

    expect(result).toEqual(expected);
  });

  test("total groups is equal to 1", () => {
    const result = groupArrayElements([1, 2, 3, 4, 5], 1);

    const expected = [[1, 2, 3, 4, 5]];

    expect(result).toEqual(expected);
  });

  test("total groups is equal to 2", () => {
    const result = groupArrayElements([1, 2, 3, 4, 5, 6, 7], 2);

    const expected = [
      [1, 2, 3, 4],
      [5, 6, 7],
    ];

    expect(result).toEqual(expected);
  });

  test("total groups is equal to 3", () => {
    const result = groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8], 3);

    const expected = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8],
    ];

    expect(result).toEqual(expected);
  });

  test("remaining groups is more than 1", () => {
    const result = groupArrayElements([1, 2, 3, 4, 5, 6, 7], 3);

    const expected = [
      [1, 2, 3],
      [4, 5],
      [6, 7],
    ];

    expect(result).toEqual(expected);
  });

  test("remaining groups and remaining elements are more than 1", () => {
    const result = groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 5);

    const expected = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8],
      [9, 10],
      [11, 12],
    ];

    expect(result).toEqual(expected);
  });

  test("elements length equal to 1 and total groups equal to 1", () => {
    const result = groupArrayElements([1], 1);

    const expected = [[1]];

    expect(result).toEqual(expected);
  });

  test("elements length equal to 1 and total groups equal to 2", () => {
    const result = groupArrayElements([1], 2);

    const expected = [[1], []];

    expect(result).toEqual(expected);
  });

  // You can add your unit tests below
});
