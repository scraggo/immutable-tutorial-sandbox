import Immutable from "immutable";

export const sets = [
  {
    anchor: "Sets",
    text: `# Immutable.js: Creating Sets – Untangled

A \`Set\` is similar to a List at first glance, but has a number of different properties and functions. In this tutorial, we'll look at how to create a Set, and why you'd use a Set over a List.

## Set

Although a Set is similar to a List, its differences make it more suitable for a variety of different problems. Foremost of these is that, unlike a List, a Set is a collection of _unique_ values, and so cannot contain duplicate values. If you attempt to add a duplicate value to an existing Set, it is simply ignored, and no errors are thrown.

Other differences include functions such as \`union\`, \`intersect\` and \`subtract\`, which provide powerful Set manipulation operations that cannot easily (or performantly) be achieved with a List.

Here's how to use it.

### Create an Empty Set

    // Create an empty Set
    const emptySet = Immutable.Set();
`,
    code: () => {
      const emptySet = Immutable.Set();
      return emptySet;
    },
  },
  {
    text: `### Create a Set of data: Set() vs Set.of()

As with all Immutable objects, you can create a Set of data using either the \`Set()\` constructor, or the \`Set.of()\` method, depending on the type of data you're using to create the Set. Creating a new Set works very similarly to creating a new List:

* \`Set.of()\` – use when creating a Set from non-iterable data (e.g. function arguments, a JavaScript object, or a string you want interpreted as a whole string);
* \`Set()\` – use when creating a Set from iterable data (e.g. an array, or an Immutable Iterable object (List, Map, Set, etc.), or a string that you want interpreted as a series of characters).

_**Important:** a JavaScript string is an [iterable object][1], so if you create a Set of strings using \`Set("string")\`, you'll actually get a Set of characters ([\`'s', 't', 'r', 'i', 'n', 'g']\`). To make Immutable interpret a string as a non-iterable value, use \`Set.of("string")\` instead. See examples below._

### Create a new Set from…

#### …a JavaScript array

    // Create a new Set from an array
    const avengersArray = ['ironMan', 'captainAmerica', 'blackWidow'];
    const avengersSet = Immutable.Set(avengersArray);
`,
    code: () => {
      // Create a new Set from an array
      const avengersArray = ["ironMan", "captainAmerica", "blackWidow"];
      const avengersSet = Immutable.Set(avengersArray);
      return avengersSet;
    },
  },
  {
    text: `#### …a JavaScript object

An object is not iterable, so we need to use \`Set.of()\`:

    // Create a new Set from an object
    const avengers = {
      ironMan: 'Tony Stark',
      captainAmerica: 'Steve Rogers',
      blackWidow: 'Natasha Romanov'
    };

    const avengersSet = Immutable.Set.of(avengers);`,
    code: () => {
      // Create a new Set from an object
      const avengers = {
        ironMan: "Tony Stark",
        captainAmerica: "Steve Rogers",
        blackWidow: "Natasha Romanov",
      };
      const avengersSet = Immutable.Set.of(avengers);
      return avengersSet;
    },
  },
  {
    text: `#### …just the keys of a JavaScript object

Rather than encoding an entire object as a Set, you can extract just its keys using \`Set.fromkeys()\`:

    // Create a new Set from an object's keys
    const avengers = {
      ironMan: 'Tony Stark',
      captainAmerica: 'Steve Rogers',
      blackWidow: 'Natasha Romanov'
    };

    const avengersSet = Immutable.Set.fromKeys(avengers);`,
    code: () => {
      // Create a new Set from an object's keys
      const avengers = {
        ironMan: "Tony Stark",
        captainAmerica: "Steve Rogers",
        blackWidow: "Natasha Romanov",
      };
      const avengersSet = Immutable.Set.fromKeys(avengers);
      return avengersSet;
    },
  },
  {
    text: `#### …a set of function arguments

To create an Immutable Set of values that are passed in as a list of function arguments, use \`Set.of()\`.

    // Create a new Set of strings

    const avengersSet = Immutable.Set.of('ironMan', 'captainAmerica', 'blackWidow');
`,
    code: () => {
      const avengersSet = Immutable.Set.of(
        "ironMan",
        "captainAmerica",
        "blackWidow"
      );
      return avengersSet;
    },
  },
  {
    text: `#### …a JavaScript iterator

Same as with \`List\`, any ES6 iterable object, either built-in or user-defined, can be used to create a new Immutable Map.

    // New Set from existing JavaScript iterator (Array.map example)

    // Note: an ES6 object is not an iterator, so we'll use an array instead
    const avengersArray = ['ironMan' , 'captainAmerica'];

    const avengersSet = Immutable.Set(avengersArray.map(
        (item, index) => ([ 'heroName' + index, item ]))
    );`,
    code: () => {
      const avengersArray = ["ironMan", "captainAmerica"];

      const avengersSet = Immutable.Set(
        avengersArray.map((item, index) => ["heroName" + index, item])
      );
      return avengersSet;
    },
  },
  {
    text: `#### …an Immutable List

    // Create a new Set from a List

    const avengersList = Immutable.List(['ironMan', 'captainAmerica', 'blackWidow']);
    const avengersSet = Immutable.Set(avengersList);
`,
    code: () => {
      const avengersList = Immutable.List([
        "ironMan",
        "captainAmerica",
        "blackWidow",
      ]);
      const avengersSet = Immutable.Set(avengersList);
      return avengersSet;
    },
  },
  {
    text: `#### …an Immutable Map

    // Create a new Set from a Map

    const avengersMap = Immutable.Map({
      ironMan: 'Tony Stark',
      captainAmerica: 'Steve Rogers',
      blackWidow: 'Natasha Romanov'
    });

    const avengersSet = Immutable.Set(avengersMap);`,
    code: () => {
      const avengersMap = Immutable.Map({
        ironMan: "Tony Stark",
        captainAmerica: "Steve Rogers",
        blackWidow: "Natasha Romanov",
      });
      const avengersSet = Immutable.Set(avengersMap);
      return avengersSet;
    },
  },
  {
    anchor: "Sets - Union, Intersect and Subtract",
    text: `## How and when to use Set’s Union, Intersect and Subtract methods – Untangled

An Immutable \`Set\` provides powerful Set operations such as \`intersect\`, \`union\` and \`subtract\`. This tutorial shows you how to use them, and when to use them instead of merging Lists.

## When to use Sets and the Union, Intersect and Subtract methods

The unique property of a Set is that its values are always unique. Immutable's \`Set\` methods enforce this uniqueness, and will automatically prevent duplicates from being added to a Set, without throwing an exception.

A Set really comes into own when using the three Set-specific methods, \`union\`, \`intersect\` and \`subtract\`.

* \`Set.union()\` combines the values of two Sets together, ensuring no duplicates exist. Union returns the values of Set B combined with those of Set A with duplicates removed. It differs from \`List.merge()\`, which _overwrites_ the values of List A with the values of List B that exist at the same index. In contrast, \`Set.union()\` _combines_ two Sets of values.
* \`Set.intersect()\` takes two Sets, A and B, and returns a Set that contains only those values that exist in A _and_ B.
* \`Set.subtract()\` takes two Sets, A and B, and returns a Set that contains only those values that exist in A, but do _not_ exist in B.

This ability to manipulate data and ensure uniqueness makes Sets extremely powerful, something we'll look at in more detail in a forthcoming tutorial on Immutable recipes (or 'how to actually use Immutable.js'!). In the meantime, let's look at how you actually use them.

## How to operate on an Immutable Set

### Working with Primitive Values (numbers, strings, etc.)

When performing Set manipulation operations (i.e. \`subtract\`, \`intersect\` or \`union\`), you need to understand how JavaScript deals with equality. With JavaScript primitive values (booleans, numbers, strings, null, and undefined), equality is as you'd expect: 2 always equals 2, for example, while \`'string' === string'\`.

### Working with JavaScript Objects

With JavaScript objects, however, it's very different. Specifically, an object is only ever equal to itself. Creating two separate objects with identical keys and values will not make them equal.

This is because objects are compared by _reference_ (i.e. their location in memory), whereas primitives are compared by value. If two numbers have the same value, they are deemed to be equal. Two object with the same value, though, will always reside in two different memory locations, and so cannot be equal.

> An object is only ever equal to itself. Creating two separate objects with identical keys and values will not make them equal.

For example, these two objects are _not_ equal:
    const obj1 = { key: 'value' };
    const obj2 = { key: 'value' }

    // The values assigned obj1 and obj2 reside in two different memory locations.
    // They are therefore not equal:
    obj1 === obj2;      Why is this important? Because a Set must have unique values, and in order to check for duplicates, it needs to know (and so do you!) what makes one value 'equal to' another. In the case of primitives, it's the value itself, but in the case of objects, equality is down to memory location.

This can cause confusion when using Set's methods (such as \`subtract\`, as \`intersect\` and as \`union\`) on a Set of unassigned JavaScript objects, as there is no way to reference the individual objects in the Set, and so no way for the \`subtract()\` function to operate on them.

For example, the following will _not_ work:
    // NOTE: does NOT work

    // Create a Set of objects, none of which are assigned to a variable
    const avengersSet = Immutable.Set([{ blackWidow: 'Natasha Romanov' }, { captainAmerica: 'Steve Rogers' }]);

    // Try to remove blackWidow using the key/value pair, and it won't work
    avengersSet.subtract([{ blackWidow: 'Natasha Romanov' }]);      Each object passed to Set in this example exists in a specific memory location, but because it's not been assigned to a variable, there is no way to reference it. Simply using the key/value pair as an argument in the \`subtract()\` method is not enough, as this just creates a separate object in a different memory location, and so has a different identity.

For two objects to be treated as equal, you must create one object, assign two different variables to it, and then compare the _variables_ for equality. This way, there is only one object in memory, and each variable assigned to it is pointing to the single location in memory; thus, the two _variables_ are equal, as they both reference the same object.

For example, the following variable assignment makes \`obj2\` equal to \`obj1\`:

    const obj1 = { key: 'value' };
    const obj2 = obj1;
    obj1 === obj2;      Applying this to Set's functions, in order to safely use \`subtract\`, \`intersect\` or \`union\` on a Set of objects, we must create a Set of assigned objects: that is, a Set of _variables_, each of which is assigned to an object, rather than a Set of objects directly.

In other words, do this:
    // Create variables and assign them to objects
    const blackWidow = {
      blackWidow: 'Natasha Romanov'
    };

    const captainAmerica = {
      captainAmerica: 'Steve Rogers'
    }

    // Create a Set of variables, each of which is assigned to an object
    const avengersSet = Immutable.Set([captainAmerica, blackWidow]);
    // Output:
    avengersSet.subtract([blackWidow]);
    `,
    code: () => {
      // Create variables and assign them to objects
      const blackWidow = {
        blackWidow: "Natasha Romanov",
      };
      const captainAmerica = {
        captainAmerica: "Steve Rogers",
      };
      // Create a Set of variables, each of which is assigned to an object
      const avengersSet = Immutable.Set([captainAmerica, blackWidow]);
      // Output:
      return avengersSet.subtract([blackWidow]);
    },
  },
  {
    text: `> To use a Set of objects, assign each object to a variable and create a Set of variables instead.

### Working with Immutable objects (Map, List, Set, etc.)

Because of the difficulty of working with JavaScript objects, Immutable has its own equality method for its objects (Map, List, Set, etc.) in the form of the \`Immutable.is()\` method, which _will_ treat two Immutable objects as equal if their _values_ are equal.

That is, the following two Immutable Maps are treated as equal, even though they're two different objects (i.e. they reside in different memory locations):

    // Create variables and assign them to objects
    const obj1 = Immutable.Map({ key: 'value' });
    const obj2 = Immutable.Map({ key: 'value' });

    Immutable.is(obj1, obj2);`,
    code: () => {
      // Create variables and assign them to objects
      const obj1 = Immutable.Map({ key: "value" });
      const obj2 = Immutable.Map({ key: "value" });

      return Immutable.is(obj1, obj2);
    },
  },
  {
    text: `This works with any Immutable object, not just Maps. The \`Immutable.is()\` method is used internally by Set's methods to determine equality when acting on Immutable objects, which makes working with Sets of such objects much easier to work with than Sets of plain JavaScript objects.

So with all that in mind, let's see some examples of how Immutable's Set operations actually work.

_(Note: this has been quite a deep dive into the mechanics of JavaScript assignment. If you're looking for more punishment, read [Dr. Axel Rauschmayer's][1] excellent book 'Speaking JavaScript' on [JavaScript Assignment][2]. It's applicable to both ES5 and ES6)._

## Subtract

Subtract works either with an array of Immutable Iterables (e.g. Map, List, Set, etc), or a JavaScript array:

* \`const subtractedSet = originalSet.subtract([aList])\`
* \`const subtractedSet = originalSet.subtract([anArray])\`

### …a string from a Set of strings

Remember, the argument in \`Set.subtract()\` must always be an array, even if there's only one value you want to subtract.




    // Subtract an string from a Set of strings
    const avengersSet = Immutable.Set(['ironMan', 'captainAmerica', 'blackWidow']);

    // Output:
    avengersSet.subtract(['blackWidow']);`,
    code: () => {
      const avengersSet = Immutable.Set([
        "ironMan",
        "captainAmerica",
        "blackWidow",
      ]);
      return avengersSet.subtract(["blackWidow"]);
    },
  },
  {
    text: `### …an array of strings from a Set of strings
    // Subtract an string from a Set of strings
    const avengersSet = Immutable.Set(['ironMan', 'captainAmerica', 'blackWidow']);

    // Output:
    avengersSet.subtract(['blackWidow', 'captainAmerica']);`,
    code: () => {
      const avengersSet = Immutable.Set([
        "ironMan",
        "captainAmerica",
        "blackWidow",
      ]);
      return avengersSet.subtract(["blackWidow", "captainAmerica"]);
    },
  },
  {
    text: `### …an object from a Set of objects
    // Subtract an object from a Set of objects

    // Subtract blackWidow from avengersSet
    const blackWidow = {
      blackWidow: 'Natasha Romanov'
    };

    const avengersSet = Immutable.Set([{
      ironMan: 'Tony Stark'
    }, {
      captainAmerica: 'Steve Rogers'
    }, blackWidow]);

    // Output:
    avengersSet.subtract([blackWidow]);

Note that the variable named \`blackWidow\` is assigned to the object \`{ blackWidow: 'Natasha Romanova' }\` first, and then added as part of \`avengersSet\`. We do this so that \`blackWidow\` can be used in the \`subtract()\` method to identify the object we want to subtract.

_It's worth repeating that you cannot use a key/value pair to identify an object to subtract from a Set of objects: you must first assign a variable to an object and use that variable name in the \`subtract()\` method._`,
    code: () => {
      const blackWidow = {
        blackWidow: "Natasha Romanov",
      };

      const avengersSet = Immutable.Set([
        {
          ironMan: "Tony Stark",
        },
        {
          captainAmerica: "Steve Rogers",
        },
        blackWidow,
      ]);

      // Output:
      return avengersSet.subtract([blackWidow]);
    },
  },
  {
    text: `### …an array of objects from a Set of objects

    // Subtract an object from a Set of objects

    // Subtract blackWidow and captainAmerica from avengersSet
    const blackWidow = {
      blackWidow: 'Natasha Romanov'
    };

    const captainAmerica = {
      captainAmerica: 'Steve Rogers'
    }

    const avengersSet = Immutable.Set([{
      ironMan: 'Tony Stark'
    }, captainAmerica, blackWidow]);

    // Output:
    avengersSet.subtract([blackWidow, captainAmerica]);`,
    code: () => {
      const blackWidow = {
        blackWidow: "Natasha Romanov",
      };

      const captainAmerica = {
        captainAmerica: "Steve Rogers",
      };

      const avengersSet = Immutable.Set([
        {
          ironMan: "Tony Stark",
        },
        captainAmerica,
        blackWidow,
      ]);
      return avengersSet.subtract([blackWidow, captainAmerica]);
    },
  },
  {
    text: `### …a Map from a Set of Maps
    // Subtract a Map from a Set of Maps

    // First, create our Maps
    const ironMan = Immutable.fromJS([{
      ironMan: 'Tony Stark'
    }, {
      captainAmerica: 'Steve Rogers'
    }, {
      blackWidow: 'Natasha Romanov'
    }]);

    // Create a Set of Maps
    const avengersSet = Immutable.Set(ironMan);

    // Now subtract blackWidow (sorry Natasha)
    avengersSet.subtract([Immutable.fromJS({
      blackWidow: 'Natasha Romanov'
    })]);
`,
    code: () => {
      const ironMan = Immutable.fromJS([
        {
          ironMan: "Tony Stark",
        },
        {
          captainAmerica: "Steve Rogers",
        },
        {
          blackWidow: "Natasha Romanov",
        },
      ]);
      // Create a Set of Maps
      const avengersSet = Immutable.Set(ironMan);
      // Now subtract blackWidow (sorry Natasha)
      return avengersSet.subtract([
        Immutable.fromJS({
          blackWidow: "Natasha Romanov",
        }),
      ]);
    },
  },
  {
    text: `### …a List from a Set of Lists
    // Subtract a List from a Set of Lists

    // First, create our Lists
    const avengers = Immutable.fromJS([
      ['ironMan', 'Tony Stark'],
      ['captainAmerica', 'Steve Rogers'],
      ['blackWidow', 'Natasha Romanov']]);

    // Create a Set of Lists
    const avengersSet = Immutable.Set(avengers);

    // Now subtract ironMan (so long, Tony)
    const ironMan = Immutable.List(['ironMan', 'Tony Stark'])

    // Remember, subtract requires its arguments to be placed in an array
    avengersSet.subtract([ironMan]);`,
    code: () => {
      const avengers = Immutable.fromJS([
        ["ironMan", "Tony Stark"],
        ["captainAmerica", "Steve Rogers"],
        ["blackWidow", "Natasha Romanov"],
      ]);
      // Create a Set of Lists
      const avengersSet = Immutable.Set(avengers);
      // Now subtract ironMan (so long, Tony)
      const ironMan = Immutable.List(["ironMan", "Tony Stark"]);
      // Remember, subtract requires its arguments to be placed in an array
      return avengersSet.subtract([ironMan]);
    },
  },
  {
    text: `### …one Set from another

    // Subtract a Set from another Set

    // First, create our Sets
    const ironMan = Immutable.Set(['ironMan', 'Tony Stark']);

    const captainAmerica = Immutable.Set(['captainAmerica', 'Steve Rogers']);

    const blackWidow = Immutable.Set(['blackWidow', 'Natasha Romanov']);

    // Create a Set of Sets
    const avengersSet = Immutable.Set([ironMan, captainAmerica, blackWidow]);

    // Now subtract captainAmerica (bye Steve)
    avengersSet.subtract([Immutable.Set(['captainAmerica', 'Steve Rogers'])]);`,
    code: () => {
      const ironMan = Immutable.Set(["ironMan", "Tony Stark"]);
      const captainAmerica = Immutable.Set(["captainAmerica", "Steve Rogers"]);
      const blackWidow = Immutable.Set(["blackWidow", "Natasha Romanov"]);
      // Create a Set of Sets
      const avengersSet = Immutable.Set([ironMan, captainAmerica, blackWidow]);
      // Now subtract captainAmerica (bye Steve)
      return avengersSet.subtract([
        Immutable.Set(["captainAmerica", "Steve Rogers"]),
      ]);
    },
  },
  {
    text: `## Union

\`Set.Union()\` merges two Sets together, ensuring there are no duplicates in the resulting Set. It works either with an array of Immutable Iterables (e.g. Map, List, Set, etc), or a JavaScript array:

* \`const subtractedSet = originalSet.union([aList])\`
* \`const subtractedSet = originalSet.union([anArray])\`

Like \`Set.subtract()\`, all arguments for \`Set.union()\` must be arrays.

### Create a Union of…

#### …two sets of strings
    // Create a union of two Sets of strings
    const avengersCast = Immutable.Set(['ironMan', 'captainAmerica', 'blackWidow']);
    const civilWarCast = Immutable.Set(['ironMan', 'antMan', 'spiderMan']);

    // Output:
    avengersCast.union(civilWarCast);`,
    code: () => {
      const avengersCast = Immutable.Set([
        "ironMan",
        "captainAmerica",
        "blackWidow",
      ]);
      const civilWarCast = Immutable.Set(["ironMan", "antMan", "spiderMan"]);
      return avengersCast.union(civilWarCast);
    },
  },
  {
    text: `#### …a Set of strings and an array of strings
    // Create a union of two Sets of strings
    const avengersCast = Immutable.Set(['ironMan', 'captainAmerica', 'blackWidow']);

    // Output:
    avengersCast.union(['ironMan', 'antMan', 'spiderMan']);`,
    code: () => {
      const avengersCast = Immutable.Set([
        "ironMan",
        "captainAmerica",
        "blackWidow",
      ]);
      return avengersCast.union(["ironMan", "antMan", "spiderMan"]);
    },
  },
  {
    text: `#### …a Set of objects and an object
    // Add an object to a set of objects with union

    // Add blackWidow to avengersSet
    const blackWidow = {
      blackWidow: 'Natasha Romanov'
    };

    const avengersSet = Immutable.Set([{
      ironMan: 'Tony Stark'
    }, {
      captainAmerica: 'Steve Rogers'
    }, blackWidow]);

    // Output:
    avengersSet.union([blackWidow]);`,
    code: () => {
      const blackWidow = {
        blackWidow: "Natasha Romanov",
      };

      const avengersSet = Immutable.Set([
        {
          ironMan: "Tony Stark",
        },
        {
          captainAmerica: "Steve Rogers",
        },
        blackWidow,
      ]);
      return avengersSet.union([blackWidow]);
    },
  },
  {
    text: `#### …a Set of Maps and a Map
    // Add a Map to a Set of Maps

    // First, create our Maps
    const ironMan = Immutable.fromJS([{
      ironMan: 'Tony Stark'
    },{
      captainAmerica: 'Steve Rogers'
    }]);

    // Create a Set of Maps
    const avengersSet = Immutable.Set(ironMan);

    // Now add blackWidow (hello Natasha)
    avengersSet.union([Immutable.Map({
      blackWidow: 'Natasha Romanov'
    })]);`,
    code: () => {
      const ironMan = Immutable.fromJS([
        {
          ironMan: "Tony Stark",
        },
        {
          captainAmerica: "Steve Rogers",
        },
      ]);
      const avengersSet = Immutable.Set(ironMan);
      return avengersSet.union([
        Immutable.Map({
          blackWidow: "Natasha Romanov",
        }),
      ]);
    },
  },
  {
    text: `#### …a Set of Maps and an object
    // Add a Map to a Set of Maps

    // First, create our Maps
    const ironMan = Immutable.fromJS([{
      ironMan: 'Tony Stark'
    },{
      captainAmerica: 'Steve Rogers'
    }]);

    // Create a Set of Maps
    const avengersSet = Immutable.Set(ironMan);

    // Now add blackWidow (hello Natasha)
    avengersSet.union([{
      blackWidow: 'Natasha Romanov'
    }]);`,
    code: () => {
      const ironMan = Immutable.fromJS([
        {
          ironMan: "Tony Stark",
        },
        {
          captainAmerica: "Steve Rogers",
        },
      ]);
      const avengersSet = Immutable.Set(ironMan);
      return avengersSet.union([
        {
          blackWidow: "Natasha Romanov",
        },
      ]);
    },
  },
  {
    text: `#### …a Set of Lists and a List
    // Add a List to a Set of Lists

    // First, create our Lists
    const ironMan = Immutable.List(['ironMan', 'Tony Stark']);

    const captainAmerica = Immutable.List(['captainAmerica', 'Steve Rogers']);

    const blackWidow = Immutable.List(['blackWidow', 'Natasha Romanov']);

    // Create a Set of Lists
    const avengersSet = Immutable.Set([captainAmerica, blackWidow]);

    // Now add ironMan (Hi, Tony)
    avengersSet.union([ironMan]);`,
    code: () => {
      const ironMan = Immutable.List(["ironMan", "Tony Stark"]);
      const captainAmerica = Immutable.List(["captainAmerica", "Steve Rogers"]);
      const blackWidow = Immutable.List(["blackWidow", "Natasha Romanov"]);
      const avengersSet = Immutable.Set([captainAmerica, blackWidow]);
      return avengersSet.union([ironMan]);
    },
  },
  {
    text: `#### …two Sets
    // Add a Set to another Set

    // First, create our Sets
    const ironMan = Immutable.Set(['ironMan', 'Tony Stark']);

    const captainAmerica = Immutable.Set(['captainAmerica', 'Steve Rogers']);

    const blackWidow = Immutable.Set(['blackWidow', 'Natasha Romanov']);

    // Create a union of two Sets
    const avengersSet = Immutable.Set([ironMan, blackWidow]);

    // Now add captainAmerica
    avengersSet.union([captainAmerica]);`,
    code: () => {
      const ironMan = Immutable.Set(["ironMan", "Tony Stark"]);
      const captainAmerica = Immutable.Set(["captainAmerica", "Steve Rogers"]);
      const blackWidow = Immutable.Set(["blackWidow", "Natasha Romanov"]);
      const avengersSet = Immutable.Set([ironMan, blackWidow]);
      return avengersSet.union([captainAmerica]);
    },
  },
  {
    text: `## Intersect

The intersection of two Sets is a Set containing only those values that exist in both Sets. If a value exists in Set A, but not Set B (or vice versa), then it is not included in the returned intersected Set.

Like Subtract and Union, Intersect works either with an array of Immutable Iterables (e.g. Map, List, Set, etc), or a JavaScript array:

* \`const intersectedSet = originalSet.intersect([aList])\`
* \`const intersectedSet = originalSet.intersect([anArray])\`

### …two Sets of objects
    // Intersect two Sets of objects

    // intersect avengersCast with civilWar cast
    const blackWidow = {
      blackWidow: 'Natasha Romanov'
    };

    const ironMan = {
      ironMan: 'Tony Stark'
    };

    const captainAmerica = {
        captainAmerica: 'Steve Rogers'
    };

    const theHulk = {
        theHulk: 'Bruce Banner'
    };

    const antMan = {
        antMan: 'Scott Lang'
    };

    const spiderMan = {
        spiderMan: 'Peter Parker'
    };

    const avengersCast = Immutable.Set([ironMan, captainAmerica, blackWidow, theHulk]);
    const civilWarCast = Immutable.Set([ironMan, captainAmerica, blackWidow, antMan, spiderMan]);

    // Output: who was in Avengers and Civil War?
    avengersCast.intersect(civilWarCast);

_Note: this is a horrible way of achieving this! It's much easier to use \`fromJS()\` and convert everything to Immutable first. Take a look at the [intersection of two Maps][3] for an easier example._`,
    code: () => {
      const blackWidow = {
        blackWidow: "Natasha Romanov",
      };
      const ironMan = {
        ironMan: "Tony Stark",
      };
      const captainAmerica = {
        captainAmerica: "Steve Rogers",
      };
      const theHulk = {
        theHulk: "Bruce Banner",
      };
      const antMan = {
        antMan: "Scott Lang",
      };
      const spiderMan = {
        spiderMan: "Peter Parker",
      };
      const avengersCast = Immutable.Set([
        ironMan,
        captainAmerica,
        blackWidow,
        theHulk,
      ]);
      const civilWarCast = Immutable.Set([
        ironMan,
        captainAmerica,
        blackWidow,
        antMan,
        spiderMan,
      ]);
      return avengersCast.intersect(civilWarCast);
    },
  },
  {
    text: `### …two Sets of arrays
    // Intersect two Sets of arrays

    const ironCapArray = ['ironMan', 'captainAmerica'];
    const blackHulkArray = ['blackWidow', 'theHulk'];
    const spiderAntArray = ['spiderMan', 'antMan'];

    const avengersCast = Immutable.Set([ironCapArray, blackHulkArray]);
    const civilWarCast = Immutable.Set([ironCapArray, spiderAntArray]);

    // Output:
    avengersCast.intersect(civilWarCast);`,
    code: () => {
      const ironCapArray = ["ironMan", "captainAmerica"];
      const blackHulkArray = ["blackWidow", "theHulk"];
      const spiderAntArray = ["spiderMan", "antMan"];
      const avengersCast = Immutable.Set([ironCapArray, blackHulkArray]);
      const civilWarCast = Immutable.Set([ironCapArray, spiderAntArray]);
      return avengersCast.intersect(civilWarCast);
    },
  },
  {
    text: `### …two Sets of Maps
    // Intersect two Sets of Maps

    // First, use fromJS() to create a List of Maps
    const avengersCast = Immutable.fromJS([{
      blackWidow: 'Natasha Romanov'
    }, {
      ironMan: 'Tony Stark'
    }, {
      captainAmerica: 'Steve Rogers'
    }, {
      theHulk: 'Bruce Banner'
    }]);

    const civilWarCast = Immutable.fromJS([{
      blackWidow: 'Natasha Romanov'
    }, {
      ironMan: 'Tony Stark'
    }, {
      captainAmerica: 'Steve Rogers'
    }, {
      antMan: 'Scott Lang'
    }, {
      spiderMan: 'Peter Parker'
    }]);

    // Now create two Sets of Maps
    const avengersSet = Immutable.Set(avengersCast);
    const civilWarSet = Immutable.Set(civilWarCast);

    // Output: who was in Avengers and Civil War?
    avengersSet.intersect(civilWarSet);`,
    code: () => {
      const avengersCast = Immutable.fromJS([
        {
          blackWidow: "Natasha Romanov",
        },
        {
          ironMan: "Tony Stark",
        },
        {
          captainAmerica: "Steve Rogers",
        },
        {
          theHulk: "Bruce Banner",
        },
      ]);
      const civilWarCast = Immutable.fromJS([
        {
          blackWidow: "Natasha Romanov",
        },
        {
          ironMan: "Tony Stark",
        },
        {
          captainAmerica: "Steve Rogers",
        },
        {
          antMan: "Scott Lang",
        },
        {
          spiderMan: "Peter Parker",
        },
      ]);
      const avengersSet = Immutable.Set(avengersCast);
      const civilWarSet = Immutable.Set(civilWarCast);
      return avengersSet.intersect(civilWarSet);
    },
  },
  {
    text: `### …two Sets of Lists
    // Intersect two Sets of arrays

    const ironCapList = Immutable.List(['ironMan', 'captainAmerica']);
    const blackHulkList = Immutable.List(['blackWidow', 'theHulk']);
    const spiderAntList = Immutable.List(['spiderMan', 'antMan']);

    const avengersCast = Immutable.Set([ironCapList, blackHulkList]);
    const civilWarCast = Immutable.Set([ironCapList, spiderAntList]);

    // Output:
    avengersCast.intersect(civilWarCast);`,
    code: () => {
      const ironCapList = Immutable.List(["ironMan", "captainAmerica"]);
      const blackHulkList = Immutable.List(["blackWidow", "theHulk"]);
      const spiderAntList = Immutable.List(["spiderMan", "antMan"]);
      const avengersCast = Immutable.Set([ironCapList, blackHulkList]);
      const civilWarCast = Immutable.Set([ironCapList, spiderAntList]);
      return avengersCast.intersect(civilWarCast);
    },
  },
  {
    text: `### …two Sets of Sets
    // Intersect two Sets of arrays

    const ironCapSet = Immutable.Set(['ironMan', 'captainAmerica']);
    const blackHulkSet = Immutable.Set(['blackWidow', 'theHulk']);
    const spiderAntSet = Immutable.Set(['spiderMan', 'antMan']);

    const avengersCast = Immutable.Set([ironCapSet, blackHulkSet]);
    const civilWarCast = Immutable.Set([ironCapSet, spiderAntSet]);

    // Output:
    avengersCast.intersect(civilWarCast);`,
    code: () => {
      const ironCapSet = Immutable.Set(["ironMan", "captainAmerica"]);
      const blackHulkSet = Immutable.Set(["blackWidow", "theHulk"]);
      const spiderAntSet = Immutable.Set(["spiderMan", "antMan"]);
      const avengersCast = Immutable.Set([ironCapSet, blackHulkSet]);
      const civilWarCast = Immutable.Set([ironCapSet, spiderAntSet]);
      return avengersCast.intersect(civilWarCast);
    },
  },
];

export default sets;
