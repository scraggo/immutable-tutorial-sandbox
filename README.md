# Immutable Tutorial

<http://untangled.io/immutable-js-an-introduction-with-examples-written-for-humans/>

## About

These include code examples from the above tutorial with some clarifying notes as well as other handpicked examples. The code is evaluated to get the displayed result.

Examples can be added to, modified, or removed. Check the `src/examples` directory.

## Immutable Version

All examples use immutable > 3.7.0. Immutable 4 has breaking changes and sometimes doesn't conform with these examples.

## Adding an Example

`examples` are an array of objects. Each object has the following signature:

```js
{
  /** @returns {any} the result of a code block which will be displayed in documentation page */
  code: Function;
  /** @returns {Boolean} based on if two params are equal via deep equality check. See `codeTest` documentation for more. */
  codeTest: Function;
  /** This text may include markdown syntax which will be rendered as html */
  text: String(Required);
  /** Text to be displayed in table of contents as link content */
  anchor: String;
}
```

## Local

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

`npm start` to view the application (live reloading.)
