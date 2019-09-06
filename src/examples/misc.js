import Immutable from "immutable";

export const misc = [
  {
    anchor: "Misc",
    text:
      "## Misc handpicked examples\n\nThese can possibly be moved into other sections.",
  },
  {
    text: `Shallow render to JS with <Map>.toObject

(anything below top level keys will not be converted to JS.)

    const deep = Immutable.Map({ a: 1, b: 2, c: Immutable.List([ 3, 4, 5 ]) });
    const obj = deep.toObject();

    // Immutable.List.isList(obj.c); -> true`,
    code: () => {
      const deep = Immutable.Map({ a: 1, b: 2, c: Immutable.List([3, 4, 5]) });
      const obj = deep.toObject();
      return obj;
    },
  },
  {
    text: `List.keySeq()

    // The sequence of keys are simply the array indices
    const list = Immutable.List([ 'one', 'two', 'three', 'four', 'five', 'six' ]);
    const keySeq = list.keySeq(); // -> Range [0, 1, 2, 3, 4, 5]
    return keySeq.toList(); // -> List [0, 1, 2, 3, 4, 5]
`,
    code: () => {
      const list = Immutable.List([
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
      ]);
      const keySeq = list.keySeq();
      return keySeq.toList();
    },
  },
  {
    text: `Map.keySeq()

    // The sequence of keys are simply the object keys
    const myMap = Immutable.Map({ a: 1, b: 2 });
    const keySeq = myMap.keySeq();
    return keySeq; // ToIndexedSequence [ 'a', 'b' ]
`,
    code: () => {
      const myMap = Immutable.Map({ a: 1, b: 2 });
      const keySeq = myMap.keySeq();
      return keySeq;
    },
  },
  {
    text: `Lists - .map

\`map<M>(mapper: (value: T, key: number, iter: this) => M, context?: any): List<M>\`

_where \`key\` (confusingly) is just the array index._

The callback has the identical signature of Array.prototype.map.

    const list = Immutable.List([
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
    ]);
    const mapped = list.map((k, v) => \`k: \${k}, v: \${v}\`);
    return mapped;
`,
    code: () => {
      const list = Immutable.List([
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
      ]);
      const mapped = list.map((k, v) => `k: ${k}, v: ${v}`);
      return mapped;
    },
  },
  {
    text: `Lists - .filter

    filter<F>(
      predicate: (value: T, index: number, iter: this) => boolean,
      context?: any
      ): List<F>

The callback has the identical signature of Array.prototype.filter.

    const list = Immutable.List([
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
    ]);
    const filtered = list.filter(k => k.length === 3);
    return filtered;
`,
    code: () => {
      const list = Immutable.List([
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
      ]);
      const filtered = list.filter(k => k.length === 3);
      return filtered;
    },
  },
  {
    text: `Lists - .reduce

    reduce<R>(
      reducer: (reduction: R, value: T, key: number, iter: this) => R,
      initialReduction: R,
      context?: any
      ): R

The callback has the identical signature of Array.prototype.reduce.

    const list = Immutable.List([
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
    ]);
    const reduced = list.reduce((acc, val) => \`\${acc}-\${val}\`);
    return reduced;
`,
    code: () => {
      const list = Immutable.List([
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
      ]);
      const reduced = list.reduce((acc, val) => `${acc}-${val}`);
      return reduced;
    },
  },
  {
    text: `Lists - .equals

True if this and the other Collection have value equality, as defined by Immutable.is().

Note: This is equivalent to Immutable.is(this, other), but provided to allow for chained expressions.

Note on above note: You can't chain off of \`.equals\` because it returns a Boolean.

    const list = Immutable.List([
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
    ]);
    return list.equals(list);`,
    code: () => {
      const list = Immutable.List([
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
      ]);
      return list.equals(list);
    },
  },
  {
    text: `<Map>.every()

True if predicate returns true for all entries in the Collection.

    every(
    predicate: (value: V, key: K, iter: this) => boolean,
    context?: any
    ): boolean

Interestingly, we can use Array prototype methods on objects. The caveat being the first params of the callback function are usually _value_, _key_. (I would expect it to be reversed: _key_, _value_). Example:

    const avengersMap = Immutable.Map({
      ironMan: "Tony Stark",
      captainAmerica: "Steve Rogers",
    });
    // every key doesn't have a ' ' and
    // every value when split into an Array has 2 items
    return avengersMap.every(
      (value, key) => !key.includes(" ") && value.split(" ").length === 2
    );`,

    code: () => {
      const avengersMap = Immutable.Map({
        ironMan: "Tony Stark",
        captainAmerica: "Steve Rogers",
      });
      return avengersMap.every(
        (value, key) => !key.includes(" ") && value.split(" ").length === 2
      );
    },
  },
];

export default misc;
