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
    const mapped = list.map((v, k) => \`v: \${v}, k: \${k}\`);
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
  {
    text: `Map asMutable()

Another way to avoid creation of intermediate Immutable maps is to create a mutable copy of this collection. Mutable copies always return this, and thus shouldn't be used for equality. Your function should never return a mutable copy of a collection, only use it internally to create a new collection. If possible, use withMutations as it provides an easier to use API.

    asMutable(): Map<K, V>
    Discussion
    Note: if the collection is already mutable, asMutable returns itself.

Note: Not all methods can be used on a mutable collection or within withMutations! Only set and merge may be used mutatively.

Example:

    const myMutableMap = Immutable.Map({ one: 1 }).asMutable();
    myMutableMap.set("two", 2); // using 'set' to mutate the object
    return myMutableMap;`,
    code: () => {
      const myMutableMap = Immutable.Map({ one: 1 }).asMutable();
      myMutableMap.set("two", 2); // using 'set' to mutate the object
      return myMutableMap;
    },
  },
  {
    text: `Map asImmutable()

The yin to asMutable's yang. Because it applies to mutable collections, this operation is mutable and returns itself. Once performed, the mutable copy has become immutable and can be safely returned from a function.

    asImmutable(): Map<K, V>

Example:

    const myMutableMap = Immutable.Map({ one: 1 }).asMutable();
    myMutableMap.set("two", 2); // using 'set' to mutate the object
    const myImmutableMap = myMutableMap.asImmutable();
    myImmutableMap.set("three", 3); // we're back to being immutable
    return myImmutableMap;`,
    code: () => {
      const myMutableMap = Immutable.Map({ one: 1 }).asMutable();
      myMutableMap.set("two", 2); // using 'set' to mutate the object
      const myImmutableMap = myMutableMap.asImmutable();
      myImmutableMap.set("three", 3); // we're back to being immutable
      return myImmutableMap;
    },
  },
  {
    text: `Map .mapKeys()

Returns a new Iterable.Keyed of the same type with keys passed through a mapper function.

    mapKeys<M>(mapper: (key?: K, value?: V, iter?: Iterable.Keyed<K, V>) => M,context?: any): Iterable.Keyed<M, V>

    Inherited from Iterable.Keyed#mapKeys

Example

    const myMap = Immutable.Map({ a: 1, b: 2 });
    return myMap.mapKeys(x => x.toUpperCase());`,
    code: () => {
      const myMap = Immutable.Map({ a: 1, b: 2 });
      return myMap.mapKeys(x => x.toUpperCase());
    },
  },
  {
    text: `Map .forEach()

The sideEffect is executed for every entry in the Iterable.

    forEach(sideEffect: (value?: V, key?: K, iter?: Iterable<K, V>) => any,context?: any): number

    Inherited from Iterable#forEach

Discussion

Unlike Array#forEach, if any call of sideEffect returns false, the iteration will stop. Returns the number of entries iterated (including the last iteration which returned false).`,
    code: () => {
      const myMap = Immutable.Map({ a: 1, b: 2 });
      const returnValues = [];
      myMap.forEach((value, key) => {
        returnValues.push({ key, value });
      });
      return returnValues;
    },
  },
  {
    text: `getIn - What happens if the path doesn't exist and it's deeply nested?

Answer: No problem, it will just return 'undefined'.

    const myMap = Immutable.Map({ a: 1, b: 2 });
    return typeof myMap.getIn(["a", "q", "whatIsThis"]);`,
    code: () => {
      const myMap = Immutable.Map({ a: 1, b: 2 });
      return typeof myMap.getIn(["a", "q", "whatIsThis"]);
    },
  },
  {
    text: `Console - Dev Tools Formatters

Without using the immutable-devtools package AND enabling custom formatters in the Chrome Dev Tools settings, console output is unfriendly:

    Immutable.Map({ a: 1, b: 2 }) ->

    Map
      size: 2
      __altered: false
      __hash: undefined
      __ownerID: undefined
      _root: ArrayMapNode
        entries: Array(2)
          0: (2) ["a", 1]
          1: (2) ["b", 2]
          length: 2
          __proto__: Array(0)
        ownerID: OwnerID {}
        __proto__: Object
      __proto__: KeyedIterable

Here is the improved output:

    Map[2]
      {"a" => 1}
      {"b" => 2}
`,
    code: () => {
      console.log(Immutable.Map({ a: 1, b: 2 }));
      return "See Dev Tools Console";
    },
  },
  {
    text: `List .last of empty list

    const avengersList = Immutable.List();
    return avengersList.last() === undefined;
`,
    code: () => {
      const avengersList = Immutable.List();
      return avengersList.last() === undefined;
    },
  },
];

export default misc;
