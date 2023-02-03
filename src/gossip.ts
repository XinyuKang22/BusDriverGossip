// eslint-disable-next-line spellcheck/spell-checker
/* eslint-disable total-functions/no-unsafe-mutable-readonly-assignment */

type TimeUntilComplete = "never" | number;
const totalTimeMinutes = 480;

/**
 * Find the number of stops it takes to have all drivers on board with the latest gossips.
 * If there is even one driver who does not have all the gossips by the end of the day, return 'never'.
 * @param inputs driver routes
 * @returns
 */
export const gossip = (
  inputs: readonly (readonly number[])[]
): TimeUntilComplete => {
  const result = gossip_(inputs, initialGossips(inputs.length), 0);
  return inputs.length < 2 ? 0 : result === -1 ? "never" : result;
};

function gossip_(
  inputs: readonly (readonly number[])[],
  gossips: readonly (readonly (number | undefined)[])[],
  count: number
): number {
  // eslint-disable-next-line functional/no-conditional-statements
  if (count === totalTimeMinutes) {
    return -1;
  }
  const currentStops: readonly (number | undefined)[] = inputs.map(
    (x: readonly number[]) => x[count % x.length]
  );
  const updatedGossips: readonly (readonly (number | undefined)[])[] =
    gossips.map((_, driver) =>
      removeDuplicate(
        indexOfAll(currentStops, currentStops[driver])
          .map((theDriver) => gossips[theDriver])
          .flat()
      )
    );
  const isGossipComplete = updatedGossips.every(
    (x: readonly (number | undefined)[]) => x.length === inputs.length
  );
  return isGossipComplete
    ? count + 1
    : gossip_(inputs, updatedGossips, count + 1);
}

/**
 * Find all occurrences of val in arr and return indexes
 * @param arr
 * @param val
 * @returns
 */
const indexOfAll = (arr: readonly (number | undefined)[], val?: number) => {
  const empty: readonly number[] = [];
  return arr.reduce((ac, el, i) => (el === val ? [...ac, i] : ac), empty);
};

/**
 *
 * @param arrayWithDuplicates
 * @returns a new array with distinct values
 */
const removeDuplicate = <T>(arrayWithDuplicates: readonly T[]): readonly T[] =>
  arrayWithDuplicates.filter((n, i) => arrayWithDuplicates.indexOf(n) === i);

/**
 * Generate an initial gossip array for drivers.
 * (
 * For example,
 * if totalDriver = 2, then initialGossips = [[0], [1]]
 * if totalDriver = 4, then initialGossips = [[0], [1], [2], [3]]
 * )
 * @param totalDriver total number of drivers/routes from inputs
 * @returns
 */
const initialGossips = (totalDriver: number): readonly (readonly number[])[] =>
  // eslint-disable-next-line functional/prefer-immutable-types
  Array.from(Array(totalDriver).keys()).map((i) => [i]);
