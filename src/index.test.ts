/* eslint-disable functional/functional-parameters */
/* eslint-disable functional/no-expression-statement */
import { helloWorld } from ".";

describe("saying hello", () => {
  it.each(["Jane", ""] as const)("returns the expected greeting", (name) => {
    const actual = helloWorld(name);
    expect(actual).toEqual(`Hello, ${name}!`);
  });
});
