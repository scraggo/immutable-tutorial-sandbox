import Immutable from "immutable";
import codeTester from "../utils/codeTester";

export const intro = [
  {
    anchor: "Intro",
    text: `## Intro to Immutable.js
Note: This tutorial uses immutable > 3.7.0. Immutable 4 has breaking changes and sometimes doesn't conform with these examples.`,
  },
  {
    text: `Immutable data cannot be changed once created, leading to much simpler application development, no defensive copying, and enabling advanced memoization and change detection techniques with simple logic. Persistent data presents a mutative API which does not update the data in-place, but instead always yields new updated data.

For example, \`.push\` does NOT modify a collection. It returns a new collection.

    const collection = Immutable.List.of("ironMan");
    collection.push("captainAmerica")
    // initial \`collection\` remains un-modified.
  `,
    code: () => {
      const collection = Immutable.List.of("ironMan");
      collection.push("captainAmerica");
      return collection;
    },
    codeTest: actual => codeTester(actual.toJS(), ["ironMan"]),
  },
  {
    text: `If we were to capture a new collection as a result of the push, we can see the result of it.

    const collection = Immutable.List.of("ironMan");
    const newCollection = collection.push("captainAmerica")
  `,
    code: () => {
      const collection = Immutable.List.of("ironMan");
      const newCollection = collection.push("captainAmerica");
      return newCollection;
    },
    codeTest: actual =>
      codeTester(actual.toJS(), ["ironMan", "captainAmerica"]),
  },
];

export default intro;
