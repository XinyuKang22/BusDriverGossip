// eslint-disable-next-line spellcheck/spell-checker
/* eslint-disable total-functions/no-unsafe-mutable-readonly-assignment */
/* eslint-disable functional/no-return-void */
/* eslint-disable functional/functional-parameters */
/* eslint-disable functional/no-expression-statements */

import { gossip } from "./gossip";

describe("Given there are at least two routes(drivers)", () => {
  describe("When one or more drivers do not have all the gossips by the end of the day", () => {
    it.each([
      {
        inputs: [
          [2, 1, 2],
          [5, 2, 8],
        ],
        expected: "never",
      },
      {
        inputs: [[1], [2], [0]],
        expected: "never",
      },
      // eslint-disable-next-line functional/prefer-immutable-types
    ])("should return 'never'", ({ inputs, expected }) => {
      expect(gossip(inputs)).toBe(expected);
    });
  });
  describe("When all drivers have all the gossips by the end of the day", () => {
    it.each([
      {
        inputs: [
          [3, 1, 2, 3],
          [3, 2, 3, 1],
          [4, 2, 3, 4, 5],
        ],
        expected: 5,
      },
      {
        inputs: [[2], [2], [2]],
        expected: 1,
      },
      // eslint-disable-next-line functional/prefer-immutable-types
    ])("should return the time it takes", ({ inputs, expected }) => {
      expect(gossip(inputs)).toBe(expected);
    });
  });
});
