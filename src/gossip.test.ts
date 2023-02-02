/* eslint-disable functional/no-return-void */
/* eslint-disable functional/functional-parameters */
/* eslint-disable functional/no-expression-statements */

import { gossip } from "./gossip";

describe("Testing", () => {
  const example1: readonly (readonly number[])[] = [
    [3, 1, 2, 3],
    [3, 2, 3, 1],
    [4, 2, 3, 4, 5],
  ] as const;
  const example2: readonly (readonly number[])[] = [
    [2, 1, 2],
    [5, 2, 8],
  ] as const;
  const case1: readonly (readonly number[])[] = [[1], [1], [1]] as const;
  test("example 1", () => {
    expect(gossip(example1)).toBe(5);
  });
  test("example 2", () => {
    expect(gossip(example2)).toBe("never");
  });
  test("case 1", () => {
    expect(gossip(case1)).toBe(1);
  });
});
