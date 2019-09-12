import Immutable from "immutable";

export const lists = [
  { anchor: "Lists", text: "## Immutable Lists" },
  {
    text: `## List() vs List.of()

You can create a List of data using either the List() constructor, or the List.of() method, depending on the type of data you’re using to create the List:

- List.of() – use when creating a List from non-iterable data (e.g. a set of function arguments, a JavaScript object, or a string you want interpreted as a whole string);
- List() – use when creating a List from iterable data (e.g. an array, or an Immutable Iterable object (List, Map, Set, etc.), or a string that you want interpreted as a series of characters).

Important: a JavaScript string is an iterable object, so if you create a List of strings using List("string"), you’ll actually get a List of characters (['s', 't', 'r', 'i', 'n', 'g']). To make Immutable interpret a string as a non-iterable value, use List.of("string") instead.

    Immutable.List("ironMan")`,
    code: () => {
      return Immutable.List("ironMan");
    },
  },
  {
    text: `An Immutable Map derives from the Immutable Iterable class, and so can be used to create a List using the List() constructor

    // New List from Immutable Map
    const avengers = Immutable.Map({
      ironMan: 'Tony Stark',
      captainAmerica: 'Steve Rogers'
    });

    const avengersList = Immutable.List(avengers);`,
    code: () => {
      const avengers = Immutable.Map({
        ironMan: "Tony Stark",
        captainAmerica: "Steve Rogers",
      });
      return Immutable.List(avengers);
    },
  },
  {
    anchor: "Lists - Get, Set, and Delete",
    text: `## Lists - Get, Set, and Delete

### Get a value from a List with get()

Like Arrays, Lists are zero-indexed.

    // Get a value from a List
    const avengersList = Immutable.List(['ironMan' , 'captainAmerica']);
    // Get captainAmerica
    avengersList.get(1);`,
    code: () => {
      const avengersList = Immutable.List(["ironMan", "captainAmerica"]);
      return avengersList.get(1);
    },
  },
  {
    text: `Get a value from the end of a List with get(-1)

If you pass a negative index to List.get(), it will return a value starting from the end of the List (i.e. an index of -1 will return the last item, -2 the second-to-last, and so on).

    // Get a value from a List
    const avengersList = Immutable.List(
      ['ironMan' , 'captainAmerica', 'blackWidow', 'theHulk']);
    // Get blackWidow
    avengersList.get(-2);`,
    code: () => {
      const avengersList = Immutable.List([
        "ironMan",
        "captainAmerica",
        "blackWidow",
        "theHulk",
      ]);
      return avengersList.get(-2);
    },
  },
  {
    text: `## Get a value from a deeply nested List using \`.getIn\`

    const avengers = [
      'ironMan', // index [0]
      ['captainAmerica', // index [1][0]
        ['blackWidow', // index [1][1][0]
        ['theHulk'] // index [1][1][1][0]
        ]
      ]
    ];
    const avengersList = Immutable.fromJS(avengers);
    // get theHulk
    avengersList.getIn([1, 1, 1, 0]);`,
    code: () => {
      const avengers = [
        "ironMan", // index [0]
        [
          "captainAmerica", // index [1][0]
          [
            "blackWidow", // index [1][1][0]
            ["theHulk"], // index [1][1][1][0]
          ],
        ],
      ];
      const avengersList = Immutable.fromJS(avengers);
      return avengersList.getIn([1, 1, 1, 0]);
    },
  },
  {
    text: `Using .set to set a value:

    list.set(<indexOfValueToBeReplaced>, <newValue>)

    //Replace a value in a List with set()
    const avengersList = Immutable.List(['ironMan' , 'captainAmerica']);
    // change ironMan to blackWidow
    avengersList.set(0, 'blackWidow');`,
    code: () => {
      const avengersList = Immutable.List(["ironMan", "captainAmerica"]);
      return avengersList.set(0, "blackWidow");
    },
  },
  {
    text: `A Negative index counts back from the end of a list.

_Last value = -1, so second-to-last = -2._

    /** list.set(-2, newValue) */

    // Replace the second-to-last value in a List with set()
    const avengersList = Immutable.List(
      ['ironMan' , 'captainAmerica', 'blackWidow', 'theHulk', 'antMan']
    );

    // Replace theHulk with scarletWitch (sorry Bruce)
    avengersList.set(-2, 'scarletWitch');`,
    code: () => {
      const avengersList = Immutable.List([
        "ironMan",
        "captainAmerica",
        "blackWidow",
        "theHulk",
        "antMan",
      ]);
      return avengersList.set(-2, "scarletWitch");
    },
  },
  {
    text: `Add a value to a list at an index beyond its current size with set()

If index exceeds the List’s size, the List will grow to the new index, and the indices in between will be populated with \`null\`.

    // Add a value to a List at an index beyond its current size
    const avengersList = Immutable.List(['ironMan' , 'captainAmerica']);

    // Add antMan to a place no normal human would fit
    avengersList.set(8, 'antMan');`,
    code: () => {
      const avengersList = Immutable.List(["ironMan", "captainAmerica"]);
      return avengersList.set(8, "antMan");
    },
  },
  {
    text: `Add a new value to the end of a List with set()

Because using set() with an index that’s greater than the List’s current size creates a new item at that location, specifying an index that’s equal to the List’s current size will add an item to the end of the List, with no nulls inserted.

    list.set(indexOfLastValuePlus1, newValue)

    // Note: you can get indexOfLastValuePlus1 using list.size
    // Add a new value to the end of a List with set()
    const avengersList = Immutable.List(['ironMan' , 'captainAmerica']);

    // Add blackWidow to the List
    avengersList.set(avengersList.size, 'blackWidow');

Note: avengersList.push('blackWidow'); will ALSO achieve the same result since \`.set\` returns a new list.`,
    code: () => {
      const avengersList = Immutable.List(["ironMan", "captainAmerica"]);
      avengersList.set(avengersList.size, "blackWidow");
      return avengersList;
    },
  },
  {
    text: `Replace a value in a nested List with setIn()

    const avengers = [
      'ironMan',           // index [0]
      ['captainAmerica',   // index [1][0]
        ['blackWidow', // index [1][1][0]
          ['theHulk']    // index [1][1][1][0]
        ]
      ]
    ];
    const avengersList = Immutable.fromJS(avengers);

    // change theHulk to scarletWitch
    avengersList.setIn([1, 1, 1, 0], 'scarletWitch');`,
    code: () => {
      const avengers = [
        "ironMan", // index [0]
        [
          "captainAmerica", // index [1][0]
          [
            "blackWidow", // index [1][1][0]
            ["theHulk"], // index [1][1][1][0]
          ],
        ],
      ];
      const avengersList = Immutable.fromJS(avengers);
      return avengersList.setIn([1, 1, 1, 0], "scarletWitch");
    },
  },
  {
    text: `If you add too many indices in your keyPath, then the bad index is trying to insert a value into a part of the List that simply doesn’t exist. In this case, a new Map will be created, with the bad index forming the key. Try it for yourself in the example below, by replacing the last line with avengersList.setIn([1, 1, 1, 1, 1], 'scarletWitch');.

Note that this behaviour will be applied at any point in the keyPath. Try using avengersList.setIn([1, 2, 2, 0], 'scarletWitch'); and see the result.

If you’re having trouble trying to work out what’s happening, just remember that the behaviour is dependent on the data type referenced by the index before the bad index.

    const avengers = [
      'ironMan',            // index [0]
      ['captainAmerica',    // index [1][0]
        ['blackWidow',       // index [1][1][0]
        ['theHulk']     // index [1][1][1][0]
        ]
      ]
    ];
    ​
    const avengersList = Immutable.fromJS(avengers);
    ​
    // insert unexpected object!
    avengersList.setIn([1, 1, 1, 1, 0], 'scarletWitch');

    `,
    code: () => {
      const avengers = [
        "ironMan", // index [0]
        [
          "captainAmerica", // index [1][0]
          [
            "blackWidow", // index [1][1][0]
            ["theHulk"], // index [1][1][1][0]
          ],
        ],
      ];
      const avengersList = Immutable.fromJS(avengers);
      return avengersList.setIn([1, 1, 1, 1, 0], "scarletWitch");
    },
  },
  {
    text: `Add an item to the front of a List with insert()

    const newList = list.insert(0, newValue)

    // Add an item to the front of a List​
    const avengersList = new Immutable.List(['ironMan', 'captainAmerica']);
    ​
    // Add blackWidow
    avengersList.insert(0, 'blackWidow');`,
    code: () => {
      const avengersList = new Immutable.List(["ironMan", "captainAmerica"]);
      return avengersList.insert(0, "blackWidow");
    },
  },
  {
    text: `Add an item to the front of a List with unshift()

    const newList = list.unshift(newValue)
    // Add an item to the front of a List
    ​
    const avengersList = new Immutable.List(['ironMan', 'captainAmerica']);
    ​
    // Add blackWidow
    avengersList.unshift('blackWidow');`,
    code: () => {
      const avengersList = new Immutable.List(["ironMan", "captainAmerica"]);
      return avengersList.unshift("blackWidow");
    },
  },
  {
    text: `Delete an item from the front of a List

    const avengersList = new Immutable.List(['ironMan', 'captainAmerica', 'blackWidow']);

    // 'bye Tony
    avengersList.delete(0);`,
    code: () => {
      const avengersList = new Immutable.List([
        "ironMan",
        "captainAmerica",
        "blackWidow",
      ]);
      return avengersList.delete(0);
    },
  },
  {
    text: `Pop an item from the end of a List

    const avengersList = new Immutable.List(['ironMan', 'captainAmerica', 'blackWidow']);
    // see ya later, Natasha
    avengersList.pop();

FYI: if you need the popped value, use \`lastValue = avengersList.last()\`
(The original list wasn't altered!)`,
    code: () => {
      const avengersList = new Immutable.List([
        "ironMan",
        "captainAmerica",
        "blackWidow",
      ]);
      return avengersList.pop();
    },
  },
  {
    text: `Delete all values from the List with clear

    const avengersList = new Immutable.List(['ironMan', 'captainAmerica', 'blackWidow', 'antMan']);
    ​
    // kill all Avengers
    avengersList.clear();`,
    code: () => {
      const avengersList = new Immutable.List([
        "ironMan",
        "captainAmerica",
        "blackWidow",
        "antMan",
      ]);
      return avengersList.clear();
    },
  },
  {
    anchor: "Lists - Merging",
    text: `## Lists - Merging

Immutable provides four functions to merge multiple lists together.

Merge two Lists together

merge() overwrites the value of each item in a List with the value in the merging List that exists at the corresponding index.

    const oldAvengers = Immutable.List(['ironMan', 'captainAmerica', 'theHulk']);
    const newAvengers = Immutable.List(['scarletWitch', 'vision']);
    ​
    // Merge all the lists!
    oldAvengers.merge(newAvengers);`,
    code: () => {
      const oldAvengers = Immutable.List([
        "ironMan",
        "captainAmerica",
        "theHulk",
      ]);
      const newAvengers = Immutable.List(["scarletWitch", "vision"]);
      return oldAvengers.merge(newAvengers);
    },
  },
  {
    text: `Merge more than two Lists together

When you merge more than two Lists together, the Lists will be merged in turn, with the last List ultimately overwriting all previous Lists.


    // Merge more than one List together
    ​
    const oldAvengers = Immutable.List(['ironMan', 'captainAmerica', 'theHulk']);
    const newAvengers = Immutable.List(['scarletWitch', 'vision']);
    const newerAvengers = Immutable.List(['antMan']);
    ​
    // Merge all the lists!
    oldAvengers.merge(newAvengers, newerAvengers);`,
    code: () => {
      const oldAvengers = Immutable.List([
        "ironMan",
        "captainAmerica",
        "theHulk",
      ]);
      const newAvengers = Immutable.List(["scarletWitch", "vision"]);
      const newerAvengers = Immutable.List(["antMan"]);
      return oldAvengers.merge(newAvengers, newerAvengers);
    },
  },
  {
    text: `mergeWith()

mergeWith() lets you provide your own conflict resolution function, so you can make the merge more intelligent than just overwriting by index value, and more specific to your needs. You use it like so:

    list1.mergeWith(conflictResolutionFn(list1Value, list2Value, index){}, list2)

Here are some examples:

Merge lists and resolve conflicts according to item value

    // Merge lists only if item is not null with mergeWith()
    ​
    const oldAvengers = Immutable.List(['ironMan', 'captainAmerica', 'theHulk']);
    const newAvengers = Immutable.List(['scarletWitch', null, 'vision']);
    ​
    // Merge only if newAvenger value is not null
    oldAvengers.mergeWith((oldAvenger, newAvenger, index) => {
      return (newAvenger === null) ? oldAvenger : newAvenger
    }, newAvengers);`,
    code: () => {
      const oldAvengers = Immutable.List([
        "ironMan",
        "captainAmerica",
        "theHulk",
      ]);
      const newAvengers = Immutable.List(["scarletWitch", null, "vision"]);
      return oldAvengers.mergeWith((oldAvenger, newAvenger, index) => {
        return newAvenger === null ? oldAvenger : newAvenger;
      }, newAvengers);
    },
  },
  {
    text: `Merge lists and resolve conflicts according to index

    // Merge every other List item with mergeWith()
    ​
    const oldAvengers = Immutable.List(
      ['ironMan', 'captainAmerica', 'blackWidow', 'theHulk']
    );
    const newAvengers = Immutable.List(
      ['scarletWitch', 'vision', 'antMan', 'falcon']
    );
    ​
    // Merge every other item
    oldAvengers.mergeWith((oldAvenger, newAvenger, index) => {
      return (index % 2) ? newAvenger : oldAvenger
    }, newAvengers);`,
    code: () => {
      const oldAvengers = Immutable.List([
        "ironMan",
        "captainAmerica",
        "blackWidow",
        "theHulk",
      ]);
      const newAvengers = Immutable.List([
        "scarletWitch",
        "vision",
        "antMan",
        "falcon",
      ]);
      return oldAvengers.mergeWith((oldAvenger, newAvenger, index) => {
        return index % 2 ? newAvenger : oldAvenger;
      }, newAvengers);
    },
  },
  {
    text: `mergeDeep()

mergeDeep() does what merge does, but for nested Lists, iterating through each level it finds.

Merge two nested Lists together and let Immutable resolve conflicts
merge() overwrites the value of each item in a List with the value in the merging List that exists at the corresponding index. However, in the case of a nested List, this could potentially overwrite an entire nested List, rather than a single item.

Take the following example: (we're not using mergeDeep yet)
    // Merge two nested Lists together with merge()

    const oldAvengers = Immutable.fromJS(
      [
        ['ironMan', ['captainAmerica']],
        ['theHulk', ['Thor']]
      ]);

    const newAvengers = Immutable.fromJS(
      [
        ['vision'],
        [
          ['blackWidow']
        ]
      ]);

    // This overwrites everything in oldAvengers
    oldAvengers.merge(newAvengers);`,
    code: () => {
      const oldAvengers = Immutable.fromJS([
        ["ironMan", ["captainAmerica"]],
        ["theHulk", ["Thor"]],
      ]);
      const newAvengers = Immutable.fromJS([["vision"], [["blackWidow"]]]);
      return oldAvengers.merge(newAvengers);
    },
  },
  {
    text: `The newAvengers List items overwrite all of the corresponding items in oldAvengers (e.g. ‘vision’ overwrites ‘ironMan’ and the nested List containing ‘captainAmerica’).

To preserve the nesting of a List and target a specific level of nesting, you need to use mergeDeep:

    // Merge two nested Lists together with mergeDeep()

    const oldAvengers = Immutable.fromJS(
      [
        ['ironMan', ['captainAmerica']],
        ['theHulk', ['Thor']]
      ]);

    const newAvengers = Immutable.fromJS(
      [
        ['vision'],
        [
          ['blackWidow']
        ]
      ]);

    // This leaves the nested Lists intact
    oldAvengers.mergeDeep(newAvengers);`,
    code: () => {
      // Merge two nested Lists together with mergeDeep()

      const oldAvengers = Immutable.fromJS([
        ["ironMan", ["captainAmerica"]],
        ["theHulk", ["Thor"]],
      ]);

      const newAvengers = Immutable.fromJS([["vision"], [["blackWidow"]]]);

      // This leaves the nested Lists intact
      return oldAvengers.mergeDeep(newAvengers);
    },
  },
  {
    text: `mergeDeepWith()

If you need to make your own decisions on which nested item should be merged, used mergeDeepWtih:

Merge two nested Lists together and resolve conflicts yourself

\`list1.mergeDeepWith(conflictResolutionFn(list1Value, list2Value, index){}, list2)\`

    // Merge two nested Lists together with mergeDeepWith()

    const oldAvengers = Immutable.fromJS(
      [
        ['ironMan', ['captainAmerica']],
        ['theHulk', ['Thor']]
      ]);

    const newAvengers = Immutable.fromJS(
      [
        ['vision'],
        ['blackWidow', 'Loki']
      ]);

    // Loki can't replace Thor
    oldAvengers.mergeDeepWith((prev, next, index) => {
      return (next === 'Loki') ? prev : next
    }, newAvengers);`,
    code: () => {
      const oldAvengers = Immutable.fromJS([
        ["ironMan", ["captainAmerica"]],
        ["theHulk", ["Thor"]],
      ]);

      const newAvengers = Immutable.fromJS([
        ["vision"],
        ["blackWidow", "Loki"],
      ]);

      // Loki can't replace Thor
      return oldAvengers.mergeDeepWith((prev, next, index) => {
        return next === "Loki" ? prev : next;
      }, newAvengers);
    },
  },
  {
    anchor: "Lists - groupBy",
    text: `## Lists - groupBy

    \`groupBy\` will return a keyed collection (a Map in this case) grouped (in a List in this case) by the return value of 'groupBy'

    const listOfMaps = List([
      Map({ v: 0 }),
      Map({ v: 1 }),
      Map({ v: 1 }),
      Map({ v: 0 }),
      Map({ v: 2 })
    ])
    const groupsOfMaps = listOfMaps.groupBy(x => x.get('v'))`,
    code: () => {
      const { List, Map } = Immutable;
      const listOfMaps = List([
        Map({ v: 0 }),
        Map({ v: 1 }),
        Map({ v: 1 }),
        Map({ v: 0 }),
        Map({ v: 2 }),
      ]);
      const groupsOfMaps = listOfMaps.groupBy(x => x.get("v"));
      return groupsOfMaps;
    },
  },
];

export default lists;
