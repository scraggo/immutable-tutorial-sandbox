import Immutable from "immutable";

export const maps = [
  { anchor: "Maps", text: "## Immutable Maps" },
  {
    text: `
An Immutable Map is similar to a JavaScript object but it can seriously trip you up if you don’t know how it works. This article is the first in a deep dive of Immutable Maps, to show you how to use them the right way.

What is an Immutable Map?

An Immutable Map is an unordered collection of key/value pairs that at first glance seems similar to a JavaScript object. However, it has the following additional properties:

- You can iterate over the keys of a Map
- The order of keys iterated over does not change (although you don’t know what the order will be in advance)
- All keys are converted to strings. This will catch you out. Frequently.
- A key can be of any type – even NaN and an array
- Two Maps are the same if Immutable.is(map1, map2) returns true
- An Immutable collection (e.g. List, Map, Seq, etc.) can be a key

Create an empty Map

// Empty Map:
const map = Immutable.Map();
​`,
    code: () => {
      const map = Immutable.Map();
      return map;
    },
  },
  {
    text: `## Create a populated Map of data

### Map() vs Map.of()

You can create a Map from existing data using either the \`Map()\` constructor, or the \`Map.of()\` method, depending on the type of data you're using to create the Map:

* \`Map.of()\` – use when creating a Map from a set of function arguments, with each pair of arguments interpreted as a key and a value;
* \`Map()\` – use when creating a Map any other way.

### Create a new Map from…

#### …a JavaScript Array

To create a new \`Map\` from an array, you'll actually need an array of arrays, with each array item being a tuple (i.e. having two values). The first value of each array item will be used as a key in the map, and the second item will be its value.

    // New Map from JavaScript array
    const avengersArray = [
        ['heroName1', 'ironMan'],
        ['heroName2', 'captainAmerica']
    ];
    const avengersMap = Immutable.Map(avengersArray);`,
    code: () => {
      const avengersArray = [
        ["heroName1", "ironMan"],
        ["heroName2", "captainAmerica"],
      ];
      const avengersMap = Immutable.Map(avengersArray);
      return avengersMap;
    },
  },
  {
    text: `#### …a JavaScript Object

    // New Map from JavaScript object
    const avengersObj = {
        ironMan: 'Tony Stark',
        captainAmerica: 'Steve Rogers'
    };
    const avengersMap = Immutable.Map(avengersObj);`,
    code: () => {
      const avengersObj = {
        ironMan: "Tony Stark",
        captainAmerica: "Steve Rogers",
      };
      const avengersMap = Immutable.Map(avengersObj);
      return avengersMap;
    },
  },
  {
    text: `#### …a deeply nested JavaScript Object or JSON-encoded data

Immutable's \`Map\` does not work on deeply nested objects, as it'll only do a shallow conversion (e.g. \`key\` in \`obj.key\` will be converted to a Map, but \`subkey\` in \`obj.key.subkey\` will be left unchanged – that is, if \`subkey\` is a JavaScript object, it will remain a JavaScript object, and not an Immutable Map).

In order to create a new Map from a complex object or JSON-encoded data, therefore, you'll need to use \`fromJS()\`.

      // New Map from deeply nested JavaScript object
      const avengers = {
        hero1: {
          ironMan: {
             realName: 'Tony Stark'
          }
        },
        hero2: {
          captainAmerica: {
             realName: 'Steve Rogers'
          }
        }
      };

      // Create the Map
      const avengersMap = Immutable.Map(Immutable.fromJS(avengers));

      // Test that we have a deeply nested Map
      const ironMan = avengersMap.getIn(['hero1', 'ironMan']);`,
    code: () => {
      const avengers = {
        hero1: {
          ironMan: {
            realName: "Tony Stark",
          },
        },
        hero2: {
          captainAmerica: {
            realName: "Steve Rogers",
          },
        },
      };
      const avengersMap = Immutable.Map(Immutable.fromJS(avengers));
      const ironMan = avengersMap.getIn(["hero1", "ironMan"]);
      return ironMan;
    },
  },
  {
    text:
      "Try removing `Immutable.fromJS` in the code above, and you should see the output turn to false. This is because, without `fromJS()`, the deeply nested object will not be converted to a Map.",
    code: () => {
      const avengers = {
        hero1: {
          ironMan: {
            realName: "Tony Stark",
          },
        },
        hero2: {
          captainAmerica: {
            realName: "Steve Rogers",
          },
        },
      };
      const avengersMap = Immutable.Map(avengers);
      const ironMan = avengersMap.getIn(["hero1", "ironMan"]);
      return (
        ironMan ||
        ".getIn returned undefined. avengersMap is not an Immutable structure."
      );
    },
  },
  {
    text: `#### …a set of function arguments

You can create a Map from an arbitrary number of function arguments, with each pair of arguments interpreted as a key/value pair. Just remember to create your Map with \`Map.of()\`

    // New Map from function arguments
    const avengersMap = Immutable.Map.of(
        'ironMan', 'Tony Stark', 'captainAmerica', 'Steve Rogers'
    );`,
    code: () => {
      const avengersMap = Immutable.Map.of(
        "ironMan",
        "Tony Stark",
        "captainAmerica",
        "Steve Rogers"
      );
      return avengersMap;
    },
  },
  {
    text: `#### …a JavaScript iterator

Just as with Immutable List – blobby, make href correct, any ES6 iterable object, either built-in (e.g. an Array) or user-defined, can be used to create a new Immutable Map.

      // New Map from existing JavaScript iterator (Array.map example)

      // Note: an ES6 object is not an iterator, so we'll use an array instead
      const avengersArray = ['ironMan' , 'captainAmerica'];

      const avengersMap = Immutable.Map(avengersArray.map(
         (item, index) => ([ 'heroName' + index, item ])));`,
    code: () => {
      const avengersArray = ["ironMan", "captainAmerica"];
      const avengersMap = Immutable.Map(
        avengersArray.map((item, index) => ["heroName" + index, item])
      );
      return avengersMap;
    },
  },
  {
    text: `#### …an Immutable List

Just as when creating a \`Map\` from an array, the \`List\` must comprise a \`List\` of \`Lists\`, with each \`List\` item being a tuple that will be used as a key/value pair by the \`Map\`.

    // New Map from existing List
    const avengersList = Immutable.List([['heroName1', 'ironMan'], ['heroName2', 'captainAmerica']]);
    const avengersMap = Immutable.Map(avengersList);`,
    code: () => {
      const avengersList = Immutable.List([
        ["heroName1", "ironMan"],
        ["heroName2", "captainAmerica"],
      ]);
      const avengersMap = Immutable.Map(avengersList);
      return avengersMap;
    },
  },
  {
    text: `#### …an Immutable Map

    // New Map from existing Map
    const avengersMap = Immutable.Map({
       hero1: 'ironMan',
       hero2: 'captainAmerica',
       hero3: 'blackWidow'
    });

    const newAvengersMap = Immutable.Map(avengersMap);`,
    code: () => {
      const avengersMap = Immutable.Map({
        hero1: "ironMan",
        hero2: "captainAmerica",
        hero3: "blackWidow",
      });
      const newAvengersMap = Immutable.Map(avengersMap);
      return newAvengersMap;
    },
  },
  {
    text: `#### …other Immutable objects

You can create a new Map with any Immutable object, including:

* List
* Map
* OrderedMap
* Set
* OrderedSet
* Stack
* Record

## OrderedMap

An \`OrderedMap\` is just the same as a \`Map\`, but with the added guarantee that the order of keys iterated over will always be the same. Everything else you can do with a \`Map\`, you can do with an \`OrderedMap\`.

Note that an \`OrderedMap\` is slower than a \`Map\`, so if you don't care about the order of the keys being iterated over, use a \`Map\`.

## Get, Set, Update and Delete Map properties

As you can see, creating Maps can be unexpectedly complicated. Once created, though, they offer a powerful way to perform data manipulation. The next article in this series looks at how to get, set, update and delete properties from a Map.`,
  },
  {
    anchor: "Maps - Get, Set, Update and Delete",
    text: `## Get, Set, Update and Delete Data from Maps – Untangled

Now we know how to create an Immutable Map, we'll take a look at how we can get data from it, and how to add and delete items from it, all without mutating it.

## Getters

### Get a value from a Map with get()

    // Get a value from a Map

    const avengersMap = Immutable.Map({
       ironMan: 'Tony Stark',
       captainAmerica: 'Steve Rogers'
    });

    // Get captainAmerica
    avengersMap.get('captainAmerica');`,
    code: () => {
      const avengersMap = Immutable.Map({
        ironMan: "Tony Stark",
        captainAmerica: "Steve Rogers",
      });

      return avengersMap.get("captainAmerica");
    },
  },
  {
    text: `### Get a default value from a Map if the key is not found

Ordinarily, if you try to \`get()\` the value of a key that does not exist from a Map, you'll get the value \`undefined\`. However, \`Map.get()\` lets you provide a default that's returned instead:

    // Get a default value from a Map for a key that does not exist

    const avengersMap = Immutable.Map({
        ironMan: 'Tony Stark',
        captainAmerica: 'Steve Rogers'
    });

    // Get captainAmerica
    avengersMap.get('blackWidow', 'Missing Avenger');`,
    code: () => {
      const avengersMap = Immutable.Map({
        ironMan: "Tony Stark",
        captainAmerica: "Steve Rogers",
      });
      return avengersMap.get("blackWidow", "Missing Avenger");
    },
  },
  {
    text: `### Get a value deeply embedded in a Map

You can walk down a deeply-nested Map's object hierarchy by using an array of key names in the \`Map.getIn()\` function, with each key name belonging to a Map in the next level of the hierarchy.

    // Get a value deeply embedded in a Map

    // Note: we use Immutable.fromJS() to create our Map, as Map() itself
    // won't convert all the properties of a deeply nested object.
    const avengers = Immutable.fromJS({
            hero1: {
                ironMan: {
                  heroName: 'Iron Man'
                }
            }
        });

    // Get ironMan's heroName
    avengers.getIn(['hero1', 'ironMan', 'heroName'])`,
    code: () => {
      const avengers = Immutable.fromJS({
        hero1: {
          ironMan: {
            heroName: "Iron Man",
          },
        },
      });
      return avengers.getIn(["hero1", "ironMan", "heroName"]);
    },
  },
  {
    text: `### Get the value of the first key in a Map

    // Get a default value from a Map for a key that does not exist
    const avengersMap = Immutable.Map({
       ironMan: 'Tony Stark',
       captainAmerica: 'Steve Rogers',
       blackWidow: 'Natasha Romanov'
    });

    // Get Tony Stark
    avengersMap.first();`,
    code: () => {
      const avengersMap = Immutable.Map({
        ironMan: "Tony Stark",
        captainAmerica: "Steve Rogers",
        blackWidow: "Natasha Romanov",
      });
      return avengersMap.first();
    },
  },
  {
    text: `### Get the value of the last key in a Map

    const avengersMap = Immutable.Map({
       ironMan: 'Tony Stark',
       captainAmerica: 'Steve Rogers',
       blackWidow: 'Natasha Romanov'
    });

    // Get Natasha Romanov
    avengersMap.last();`,
    code: () => {
      const avengersMap = Immutable.Map({
        ironMan: "Tony Stark",
        captainAmerica: "Steve Rogers",
        blackWidow: "Natasha Romanov",
      });
      return avengersMap.last();
    },
  },
  {
    text: `### Determine if a key exists in a Map with has()

    // Get a default value from a Map for a key that does not exist
    const avengersMap = Immutable.Map({
       ironMan: 'Tony Stark',
       captainAmerica: 'Steve Rogers',
       blackWidow: 'Natasha Romanov'
    });

    // Does blackWidow exist?
    avengersMap.has('blackWidow');
    `,
    code: () => {
      // Get a default value from a Map for a key that does not exist
      const avengersMap = Immutable.Map({
        ironMan: "Tony Stark",
        captainAmerica: "Steve Rogers",
        blackWidow: "Natasha Romanov",
      });
      return avengersMap.has("blackWidow");
    },
  },
  {
    text: `### Determine if a key exists in a deeply nested Map with hasIn()

    // Get a value deeply embedded in a Map
    // Note: we use Immutable.fromJS() to create our Map, as Map() itself
    // won't convert all the properties of a deeply nested object.
    const avengers = Immutable.fromJS({
            hero1: {
                ironMan: {
                  heroName: 'Iron Man'
                }
            }
        });


    // Does the key 'heroName' exist?
    avengers.hasIn(['hero1', 'ironMan', 'heroName']);`,
    code: () => {
      const avengers = Immutable.fromJS({
        hero1: {
          ironMan: {
            heroName: "Iron Man",
          },
        },
      });
      return avengers.hasIn(["hero1", "ironMan", "heroName"]);
    },
  },
  {
    text: `### Determine if a value exists in a Map with includes()

    const avengersMap = Immutable.Map({
       ironMan: 'Tony Stark',
       captainAmerica: 'Steve Rogers',
       blackWidow: 'Natasha Romanov'
    });

    // Does Natasha Romanov exist?
    avengersMap.includes('Natasha Romanov');

_Note:_ You can also use \`.contains()\` instead of \`includes()\` – it does exactly the same thing.`,
    code: () => {
      const avengersMap = Immutable.Map({
        ironMan: "Tony Stark",
        captainAmerica: "Steve Rogers",
        blackWidow: "Natasha Romanov",
      });

      // Does Natasha Romanov exist?
      return avengersMap.includes("Natasha Romanov");
    },
  },
  {
    text: `### Get all the keys from a Maps with keys()

You can get all the keys from a Map using \`Map.keys()\`:

    // Get all the keys from a Map

    const avengersMap = Immutable.Map({
       ironMan: 'Tony Stark',
       captainAmerica: 'Steve Rogers',
       blackWidow: 'Natasha Romanov'
    });

    avengersMap.keys();

However, the returned value is an [ES6 iterable][1], which on its own, isn't that useful`,
    code: () => {
      const avengersMap = Immutable.Map({
        ironMan: "Tony Stark",
        captainAmerica: "Steve Rogers",
        blackWidow: "Natasha Romanov",
      });
      return avengersMap.keys();
    },
  },
  {
    text: `Fortunately, you can access each item in an iterable using \`iterator.next()\`, or, more succinctly (and probably what you were hoping to get in the first place), convert the returned iterable to an array using the spread operator.

Here are examples of both options:

#### Using iterator.next()

    // Get all the keys from a Map

    const avengersMap = Immutable.Map({
       ironMan: 'Tony Stark',
       captainAmerica: 'Steve Rogers',
       blackWidow: 'Natasha Romanov'
    });

    const avengersKeys = avengersMap.keys();

    // Each call to avengersKeys.next() will return the next key in avengersMap
    // as a value in the next() function's returned object. Confused? This is
    // just how iterables work in ES6. If you're looking to get an array of
    // keys, see the example with the ...spread operator below.
    avengersKeys.next();`,
    code: () => {
      const avengersMap = Immutable.Map({
        ironMan: "Tony Stark",
        captainAmerica: "Steve Rogers",
        blackWidow: "Natasha Romanov",
      });
      const avengersKeys = avengersMap.keys();
      return avengersKeys.next();
    },
  },
  {
    text: `#### Using the …spread operator

    // Get all the keys from a Map
    const avengersMap = Immutable.Map({
       ironMan: 'Tony Stark',
       captainAmerica: 'Steve Rogers',
       blackWidow: 'Natasha Romanov'
    });

    const [...avengersKeys] = avengersMap.keys();

    avengersKeys;`,
    code: () => {
      const avengersMap = Immutable.Map({
        ironMan: "Tony Stark",
        captainAmerica: "Steve Rogers",
        blackWidow: "Natasha Romanov",
      });
      const [...avengersKeys] = avengersMap.keys();
      return avengersKeys;
    },
  },
  {
    text: `### Get all the values from a Map with values()

Get all the values from a Map, returned as a JavaScript iterable. See the section on [getting all the keys of a Map][2] for how to access the values from the iterable.

    // Get all the values from a Map
    const avengersMap = Immutable.Map({
       ironMan: 'Tony Stark',
       captainAmerica: 'Steve Rogers',
       blackWidow: 'Natasha Romanov'
    });

    const [...avengersValues] = avengersMap.values();

    avengersValues;`,
    code: () => {
      const avengersMap = Immutable.Map({
        ironMan: "Tony Stark",
        captainAmerica: "Steve Rogers",
        blackWidow: "Natasha Romanov",
      });
      const [...avengersValues] = avengersMap.values();
      return avengersValues;
    },
  },
  {
    text: `### Get both keys and values from a Map with entries()

Get all the key/value pairs from a Map, returned as a JavaScript iterable. See the section on [getting all the keys of a Map][2] for how to access the values from the iterable.

    // Get all the values from a Map
    const avengersMap = Immutable.Map({
       ironMan: 'Tony Stark',
       captainAmerica: 'Steve Rogers',
       blackWidow: 'Natasha Romanov'
    });

    const [...avengersEntries] = avengersMap.entries();

    avengersEntries`,
    code: () => {
      const avengersMap = Immutable.Map({
        ironMan: "Tony Stark",
        captainAmerica: "Steve Rogers",
        blackWidow: "Natasha Romanov",
      });
      const [...avengersEntries] = avengersMap.entries();
      return avengersEntries;
    },
  },
  {
    text: `## Setters

### Add new key/value pair to a Map with set()

\`const updatedMap = oldMap.set(key, value)\`

    // Add a new key/value to a Map
    const avengersMap = Immutable.Map({
       ironMan: 'Tony Stark',
       captainAmerica: 'Steve Rogers'
    });

    const moreAvengers = avengersMap.set('blackWidow', 'Natasha Romanov');

Note: if the key already exists, its value will be updated with the new value.

`,
    code: () => {
      const avengersMap = Immutable.Map({
        ironMan: "Tony Stark",
        captainAmerica: "Steve Rogers",
      });

      const moreAvengers = avengersMap.set("blackWidow", "Natasha Romanov");
      return moreAvengers;
    },
  },
  {
    text: `### Add a new value to an existing key in a deeply nested Map with setIn()

\`const updatedMap = oldMap.setIn(keyPath, value)\`

where:

* \`keyPath\` is an array of keys that is used to walk down the Map hierarchy
* \`value\` is the new value want to give to the final key in \`keyPath\`

    // Set a new value in a deeply-nested Map

    const ironManMap = Immutable.fromJS({
      hero: {
        ironMan: {
          realName: 'Tony Stark',
          partner: 'Pepper Potts'
        }
      }
    });

    const updatedIronMan = ironManMap.setIn(['hero', 'ironMan', 'realName'], 'Anthony Stark');

Note that unlike \`Map.set()\`, which adds a new key/value pair to a Map, \`Map.setIn()\` _replaces_ the value of an existing key. if you want to add a new key/value pair in a deeply nested Map, you'll need \`Map.updateIn()\` or \`Map.mergeIn\`, both of which will be covered in another post.
`,
    code: () => {
      const ironManMap = Immutable.fromJS({
        hero: {
          ironMan: {
            realName: "Tony Stark",
            partner: "Pepper Potts",
          },
        },
      });
      const updatedIronMan = ironManMap.setIn(
        ["hero", "ironMan", "realName"],
        "Anthony Stark"
      );
      return updatedIronMan;
    },
  },
  {
    text: `## Updaters

The difference between \`Map.set()\` and \`Map.update()\` is subtle. They both let you change the value of a key in a Map, but \`update()\` gives you more control over the update process by letting you provide your own function to manage the update.

There are three ways you can use it:

* act on the whole Map
\`const newMap = oldMap.update((oldMap) => { /* update oldMap */ })\`
* act on a single key/value pair
\`const newMap = oldMap.update(key, (value) => { /* update value */ })\`
* act on a single key/value pair, and provide a default value if the key doesn't exist
\`const newMap = oldMap.update(key, 'defaultValue', (value) => { /* update value */ })\`

### Act on the whole Map

    // Act on the whole Map

    const avengersMap = Immutable.Map({
      ironMan: 'Tony Stark',
      captainAmerica: 'Steve Rogers',
      blackWidow: 'Natasha Romanov'
    });

    const updatedAvengers = avengersMap.update((avengers) => {
      // avengers is a Map, so we need to return the value from set() to change
      // its values
      return avengers.set('ironMan', 'is Tony Stark');
    });`,
    code: () => {
      const avengersMap = Immutable.Map({
        ironMan: "Tony Stark",
        captainAmerica: "Steve Rogers",
        blackWidow: "Natasha Romanov",
      });
      const updatedAvengers = avengersMap.update(avengers => {
        return avengers.set("ironMan", "is Tony Stark");
      });
      return updatedAvengers;
    },
  },
  {
    text: `### Act on a single key/value in a Map

    // Act on a single key/value in a Map

    const avengersMap = Immutable.Map({
      ironMan: 'Tony Stark',
      captainAmerica: 'Steve Rogers',
      blackWidow: 'Natasha Romanov'
    });

    const updatedAvengers = avengersMap.update('ironMan', (ironManValue) => {
      // ironManValue is a JavaScript type - no need for Immutable
      // functions to modify it
      return ironManValue + ' is ironMan';
    });`,
    code: () => {
      const avengersMap = Immutable.Map({
        ironMan: "Tony Stark",
        captainAmerica: "Steve Rogers",
        blackWidow: "Natasha Romanov",
      });

      const updatedAvengers = avengersMap.update("ironMan", ironManValue => {
        // ironManValue is a JavaScript type - no need for Immutable
        // functions to modify it
        return ironManValue + " is ironMan";
      });
      return updatedAvengers;
    },
  },
  {
    text: `### Act on a single key/value, and provide a default value if the key doesn't exist

    // Act on a single value in a Map, with a default value if the
    // key doesn't exist

    const avengersMap = Immutable.Map({
      captainAmerica: 'Steve Rogers',
      blackWidow: 'Natasha Romanov'
    });

    const updatedAvengers = avengersMap.update('theHulk', 'Bruce Banner', (theHulkValue) => {
       return theHulkValue + ' Smash!';
    });`,
    code: () => {
      const avengersMap = Immutable.Map({
        captainAmerica: "Steve Rogers",
        blackWidow: "Natasha Romanov",
      });

      const updatedAvengers = avengersMap.update(
        "theHulk",
        "Bruce Banner",
        theHulkValue => {
          return theHulkValue + " Smash!";
        }
      );
      return updatedAvengers;
    },
  },
  {
    text: `## Deleters

### Delete a key from a Map

\`const updatedMap = oldMap.delete(key)\`

    // Delete a key from a Map
    const ironManMap = Immutable.Map({
       ironMan: 'Tony Stark',
       partner: 'Pepper Potts'
    });

    const lonelyIronMan = ironManMap.delete('partner');`,
    code: () => {
      const ironManMap = Immutable.Map({
        ironMan: "Tony Stark",
        partner: "Pepper Potts",
      });

      const lonelyIronMan = ironManMap.delete("partner");
      return lonelyIronMan;
    },
  },
  {
    text: `### Delete a key from a Deeply Nested Map

\`const updatedMap = oldMap.delete(key)\`

    // Delete a key from a deeply-nested Map
    const ironManMap = Immutable.fromJS({
      hero: {
        ironMan: {
          realName: 'Tony Stark',
          partner: 'Pepper Potts'
        }
      }
    });

    const lonelyIronMan = ironManMap.deleteIn(['hero', 'ironMan', 'partner']);`,
    code: () => {
      const ironManMap = Immutable.fromJS({
        hero: {
          ironMan: {
            realName: "Tony Stark",
            partner: "Pepper Potts",
          },
        },
      });

      const lonelyIronMan = ironManMap.deleteIn(["hero", "ironMan", "partner"]);
      return lonelyIronMan;
    },
  },
  {
    text: `### Delete all values from a Map with clear()

\`const clearedMap = oldMap.clear()\`

    // Clear all values from a Map
    const ironManMap = Immutable.fromJS({
      hero: {
        ironMan: {
          realName: 'Tony Stark',
          partner: 'Pepper Potts'
        }
      }
    });

    const emptyIronMan = ironManMap.clear();`,
    code: () => {
      // Clear all values from a Map
      const ironManMap = Immutable.fromJS({
        hero: {
          ironMan: {
            realName: "Tony Stark",
            partner: "Pepper Potts",
          },
        },
      });

      const emptyIronMan = ironManMap.clear();
      return emptyIronMan;
    },
  },
  {
    anchor: "Maps - Merge",
    text: `# 6 Ways to Merge Maps, with full live examples – Untangled

Immutable offers many different ways of merging two or more Maps together. Choosing the right way, though, is confusing, unless you have an awesome guide with copious examples – which, funnily enough, is what this tutorial is.

## Merging Maps

There are six different ways to merge two or more Maps together. Use them as follows:

* \`originalMap.merge(Map1, Map2, Map3, ...Map-n)\` – merges Maps together adding the key/value pairs of the merging Maps to those of the originalMap. If two keys are duplicated, the last Map's value is used. Nested Maps are _not_merged.
* \`originalMap.mergeWith((originalMapValue, mergedMapValue, key) => { /* conflict resolution */ }, Map1, Map2, Map3, ...Map-n);\` – merges Maps, but lets you control which value to use if there are any conflicts;
* \`originalMap.mergeDeep(Map1, Map2, Map3, ...Map-n)\` – merges Maps, including nested Maps;
* \`originalMap.mergeDeepWith((originalMapValue, mergedMapValue, key) => { /* conflict resolution */ }, Map1, Map2, Map3, ...Map-n);\` – merges Maps deeply, but lets you control which value to use if there are any conflicts;
* \`originalMap.mergeIn([keyPath], Map1, Map2, Map3, ...Map-n);\` – merges Maps at the location identified by \`keyPath\`. Does not merge nested Maps.
* \`originalMap.mergeDeepIn([keyPath], Map1, Map2, Map3, ...Map-n);\` – merges nested Maps deeply at the location identified by \`keyPath\`

### Map.merge()

Merge two Maps together by adding the key/value pairs of the merging Maps to those of the Map being merged into. If the keys of any of the Maps are the same, the value of the duplicate key in the last Map to be merged in will be used.

    // Merge
    const avengers = Immutable.Map({
        ironMan: 'Tony Stark',
        captainAmerica: 'Steve Rogers',
        theHulk: null,
    });

    const mergingAvengers = Immutable.Map({
        blackWidow: 'Natasha Romanova',
        theHulk: 'Bruce Banner'
    });

    const mergedAvengers = avengers.merge(mergingAvengers);`,
    code: () => {
      const avengers = Immutable.Map({
        ironMan: "Tony Stark",
        captainAmerica: "Steve Rogers",
        theHulk: null,
      });
      const mergingAvengers = Immutable.Map({
        blackWidow: "Natasha Romanova",
        theHulk: "Bruce Banner",
      });
      const mergedAvengers = avengers.merge(mergingAvengers);
      return mergedAvengers;
    },
  },
  {
    text: `### mergeWith()

Merges two or more Maps together, but lets you control which value to use if there are any conflicts. Use it as follows:
\`const mergedMap = originalMap.Map((originalMapValue, mergedMapValue, key) => { /* conflict resolution */ }, mergedMap);\`

In the example below, the two Maps will be merged as normal, unless:

- the merging Map's value is undefined
- the key is 'ironMan'. His value must never be changed. He is immutable!

\`\`\`
// Merge two Maps using mergeWith
const avengers = Immutable.Map({
  ironMan: 'Tony Stark',
  captainAmerica: undefined,
  blackWidow: 'Natasha Romanova',
});

const mergingAvengers = Immutable.Map({
  theHulk: 'Bruce Banner',
  blackWidow: undefined,
  ironMan: 'imposter!',
  captainAmerica: 'Steve Rogers',
});

const mergedAvengers = avengers.mergeWith((prev, next, key) => {
  // If mergingMap's value is undefined, return the originalMap's value
  if(!next) {
    return prev;
  }
  // If the key = 'ironMan', then use the originalMap's value
  if(key==='ironMan') {
    return prev;
  }
  // otherwise, use the mergingMap's value
  return next;
}, mergingAvengers);
\`\`\``,
    code: () => {
      // Merge two Maps using mergeWith
      const avengers = Immutable.Map({
        ironMan: "Tony Stark",
        captainAmerica: undefined,
        blackWidow: "Natasha Romanova",
      });

      const mergingAvengers = Immutable.Map({
        theHulk: "Bruce Banner",
        blackWidow: undefined,
        ironMan: "imposter!",
        captainAmerica: "Steve Rogers",
      });

      const mergedAvengers = avengers.mergeWith((prev, next, key) => {
        // If mergingMap's value is undefined, return the originalMap's value
        if (!next) {
          return prev;
        }
        // If the key = 'ironMan', then use the originalMap's value
        if (key === "ironMan") {
          return prev;
        }
        // otherwise, use the mergingMap's value
        return next;
      }, mergingAvengers);
      return mergedAvengers;
    },
  },
  {
    text: `### mergeDeep()

\`mergeDeep()\` merges two or more Maps together, er, deeply (again, the clue's in the title!). With standard \`merge()\`, nested Maps are not merged together – only the keys in the top-level Map are merged. With \`mergeDeep()\`, all nested Maps are merged recursively, regardless of their depth in the nesting hierarchy.

To see this in action, the example below shows \`mergeDeep()\` merging two Avengers together. Try changing the \`mergeDeep\` function to \`merge\` and see what happens.

    // Merge two Maps using mergeDeep
    const ironMan = Immutable.fromJS({
      heroes: {
        ironMan: {
          name: 'Tony Stark'
        },
        captainAmerica: {
          name: 'Steve Rogers'
        }
      }
    });

    const mergingMan = Immutable.fromJS({
      heroes: {
        ironMan: {
          partner: 'Pepper Potts'
        }
      }
    });

    const mergedMan = ironMan.mergeDeep(mergingMan);`,
    code: () => {
      // Merge two Maps using mergeDeep
      const ironMan = Immutable.fromJS({
        heroes: {
          ironMan: {
            name: "Tony Stark",
          },
          captainAmerica: {
            name: "Steve Rogers",
          },
        },
      });

      const mergingMan = Immutable.fromJS({
        heroes: {
          ironMan: {
            partner: "Pepper Potts",
          },
        },
      });

      const mergedMan = ironMan.mergeDeep(mergingMan);
      return mergedMan;
    },
  },
  {
    text: `### mergeDeepWith()

\`mergeDeepWith()\` deeply merges two or more Maps together (including nested Maps), and lets you control which value to keep should there be duplicate keys in the Maps being merged.

    // Merge two Maps using mergeDeepWith
    const avengers = Immutable.fromJS({
      heroes: {
        ironMan: {
          name: 'Tony Stark'
        },
        captainAmerica: {
          name: 'Steve Rogers'
        }
      }
    });

    const mergingAvengers = Immutable.fromJS({
      heroes: {
        ironMan: {
            name: 'Tony Starkless',
            partner: 'Pepper Potts'
        },
        captainAmerica: {
          name: 'Chris Evans'
        }
      }
    });

    const mergedAvengers = avengers.mergeDeepWith((prev, next, key) => {
      // If the key = 'name', then use the originalMap's value
      if(key==='ironMan') {
        return prev;
      }
      // otherwise, use the mergingMap's value
      return next;
    }, mergingAvengers);

Again, try changing \`mergeDeepWith\` with \`mergeWith\` and see what happens.`,
    code: () => {
      // Merge two Maps using mergeDeepWith
      const avengers = Immutable.fromJS({
        heroes: {
          ironMan: {
            name: "Tony Stark",
          },
          captainAmerica: {
            name: "Steve Rogers",
          },
        },
      });

      const mergingAvengers = Immutable.fromJS({
        heroes: {
          ironMan: {
            name: "Tony Starkless",
            partner: "Pepper Potts",
          },
          captainAmerica: {
            name: "Chris Evans",
          },
        },
      });

      const mergedAvengers = avengers.mergeDeepWith((prev, next, key) => {
        // If the key = 'name', then use the originalMap's value
        if (key === "ironMan") {
          return prev;
        }
        // otherwise, use the mergingMap's value
        return next;
      }, mergingAvengers);
      return mergedAvengers;
    },
  },
  {
    text: `### mergeIn()

Merges two or more Maps together at a specific point in a nested Map. Use it as follows:

\`const mergedMap = originalMap.mergeIn([keyPath], Map1, Map2, Map3, ...Map-n);\`

    // Merge two Maps using mergeIn
    const avengers = Immutable.fromJS({
      heroes: {
        ironMan: {
          name: 'Tony Stark'
        },
        captainAmerica: {
          name: 'Steve Rogers'
        }
      }
    });

    const mergingAvengers = Immutable.fromJS({
          partner: {
            realName: 'Pepper Potts',
            heroName: 'hera'
          }
    });

    const mergedAvengers = avengers.mergeIn(['heroes', 'ironMan'], mergingAvengers);`,
    code: () => {
      // Merge two Maps using mergeIn
      const avengers = Immutable.fromJS({
        heroes: {
          ironMan: {
            name: "Tony Stark",
          },
          captainAmerica: {
            name: "Steve Rogers",
          },
        },
      });

      const mergingAvengers = Immutable.fromJS({
        partner: {
          realName: "Pepper Potts",
          heroName: "hera",
        },
      });

      const mergedAvengers = avengers.mergeIn(
        ["heroes", "ironMan"],
        mergingAvengers
      );
      return mergedAvengers;
    },
  },
  {
    text: `### mergeDeepIn()

Merges two or more nested Maps together at a specific point in a nested Map. Use it as follows:

\`const mergedMap = originalMap.mergeDeepIn([keyPath], Map1, Map2, Map3, ...Map-n);\`

This is subtly different from \`mergeIn\` – indeed, it's so subtle, I ended up looking through the Immutable source code looking for any differences!

They are there though. Change the following example from \`mergeDeepIn\` to \`mergeIn\` and see what happens.

    // Merge two Maps using mergeDeepIn
    const avengers = Immutable.fromJS({
      heroes: {
        type: {
            human: {
              ironMan: {
                name: 'Tony Stark'
              },
              captainAmerica: {
              name: 'Steve Rogers'
              }
            },
          god: {
            thor : {
              name: 'Thor'
            }
          }
        },
      }
    });

    const mergingAvengers = Immutable.fromJS({
      human :{
          blackWidow: {
            name: 'Natasha Romanova'
          }
      }
    });

    const mergedAvengers = avengers.mergeDeepIn(['heroes', 'type'], mergingAvengers);`,
    code: () => {
      // Merge two Maps using mergeDeepIn
      const avengers = Immutable.fromJS({
        heroes: {
          type: {
            human: {
              ironMan: {
                name: "Tony Stark",
              },
              captainAmerica: {
                name: "Steve Rogers",
              },
            },
            god: {
              thor: {
                name: "Thor",
              },
            },
          },
        },
      });

      const mergingAvengers = Immutable.fromJS({
        human: {
          blackWidow: {
            name: "Natasha Romanova",
          },
        },
      });

      const mergedAvengers = avengers.mergeDeepIn(
        ["heroes", "type"],
        mergingAvengers
      );
      return mergedAvengers;
    },
  },
];

export default maps;
