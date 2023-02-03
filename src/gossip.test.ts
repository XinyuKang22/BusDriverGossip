// eslint-disable-next-line spellcheck/spell-checker
/* eslint-disable total-functions/no-unsafe-mutable-readonly-assignment */
/* eslint-disable functional/no-return-void */
/* eslint-disable functional/functional-parameters */
/* eslint-disable functional/no-expression-statements */

import { gossip } from "./gossip";

describe("If there are less than two routes(drivers)", () => {
  describe("When there is only one driver", () => {
    it("should return 0", () => {
      expect(gossip([[1]])).toBe(0);
    });
  });
  describe("When there is no driver", () => {
    it("should return 0", () => {
      expect(gossip([])).toBe(0);
    });
  });
});

describe("Given there are at least two routes(drivers)", () => {
  describe("When one or more drivers do not have all the gossips by the end of the day", () => {
    it.each([
      {
        inputs: [
          [1, 2],
          [2, 1],
        ],
        expected: "never",
      },
      {
        inputs: [[1], [2]],
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
