/* eslint-disable prettier/prettier */
/* eslint-disable spellcheck/spell-checker */
/* eslint-disable total-functions/no-unsafe-mutable-readonly-assignment */

export function gossip (inputs: readonly (readonly number[])[]) :number | string {
  // eslint-disable-next-line functional/prefer-immutable-types
  const initialGossips: readonly (readonly number[])[] = Array.from(Array(inputs.length).keys()).map(i => [i]);
  const result = gossip_(inputs, initialGossips, 0);
  return result === -1 ? "never" : result;
}

const totalTime = 480;

function gossip_(
  inputs: readonly (readonly number[])[],
  gossips: readonly (readonly (number | undefined)[])[],
  count: number
): number {
  // eslint-disable-next-line functional/no-conditional-statements
  if (count === totalTime) {
    return -1;
  }
  const currentStops: readonly (number | undefined)[] = inputs.map(
    (x: readonly number[]) => x[count % x.length]
  );
  const updatedGossips: readonly (readonly (number | undefined)[])[] = gossips.map(
    (_, driver) =>
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

function indexOfAll(arr: readonly (number | undefined)[], val?: number) {
  const empty: readonly number[] = [];
  return arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), empty);
}

const removeDuplicate = <T>(arrayWithDuplicates: readonly T[]): readonly T[] =>
  arrayWithDuplicates.filter((n, i) => arrayWithDuplicates.indexOf(n) === i);

