import { helloWorld } from ".";

describe("saying hello", () => {
  it.each([
    ["Jane"],
    [""],
  ])("returns the expected greeting", (name) => {
    const actual = helloWorld(name);
    expect(actual).toEqual(`Hello, ${name}!`);
  });
});
