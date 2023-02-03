// eslint-disable-next-line spellcheck/spell-checker
/* eslint-disable total-functions/no-unsafe-mutable-readonly-assignment */
/* eslint-disable functional/no-return-void */
/* eslint-disable functional/functional-parameters */
/* eslint-disable functional/no-expression-statements */

import { gossip } from "./gossip";

describe("Testing", () => {
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
      inputs: [
        [2, 1, 2],
        [5, 2, 8],
      ],
      expected: -1,
    },
    {
      inputs: [[2], [2], [2]],
      expected: 1,
    },
    // eslint-disable-next-line functional/prefer-immutable-types
  ])("Test", ({ inputs, expected }) => {
    expect(gossip(inputs)).toBe(expected);
  });
});
