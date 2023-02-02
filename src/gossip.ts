/* eslint-disable functional/no-expression-statements */
/* eslint-disable spellcheck/spell-checker */
/* eslint-disable functional/prefer-readonly-type */
/* eslint-disable total-functions/no-unsafe-mutable-readonly-assignment */
/* eslint-disable functional/no-conditional-statements */
/* eslint-disable no-console */

const totalTime = 480;

// Change the inputs below:
const inputs: readonly (readonly number[])[] = [
  [3, 1, 2, 3],
  [3, 2, 3, 1],
  [4, 2, 3, 4, 5],
] as const;
const totalNumberOfDrivers = inputs.length;

function gossip(
  inputs: readonly (readonly number[])[],
  // eslint-disable-next-line functional/prefer-immutable-types
  gossips: (readonly (number | undefined)[])[],
  count: number
): number {
  if (count === totalTime) {
    return -1;
  }
  console.log(count);
  const currentStops: readonly (number | undefined)[] = inputs.map(
    (x: readonly number[]) => x[count % x.length]
  );

  // eslint-disable-next-line functional/prefer-immutable-types
  const updatedGossips: (readonly (number | undefined)[])[] = gossips.map(
    (_, driver) =>
      removeDuplicate(
        indexOfAll(currentStops, currentStops[driver])
          .map((theDriver) => gossips[theDriver])
          .flat()
      )
  );
  console.log(updatedGossips);
  const isGossipComplete = updatedGossips.every(
    (x: readonly (number | undefined)[]) => x.length === totalNumberOfDrivers
  );
  return isGossipComplete
    ? count + 1
    : gossip(inputs, updatedGossips, count + 1);
}

function indexOfAll(arr: readonly (number | undefined)[], val?: number) {
  const empty: readonly number[] = [];
  return arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), empty);
}

const removeDuplicate = <T>(arrayWithDuplicates: readonly T[]): readonly T[] =>
  arrayWithDuplicates.filter((n, i) => arrayWithDuplicates.indexOf(n) === i);

const result = gossip(inputs, [[0], [1], [2]], 0);
console.log(result === -1 ? "never" : result);
