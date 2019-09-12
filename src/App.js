import React from "react";
import Immutable from "immutable";
import "./App.css";

import { examples } from "./examples";
import MainSection from "./components/MainSection";
import TableOfContents from "./components/TableOfContents";

// install immutable dev tools (Chrome -> Dev Tools -> Enable Custom Formatters)
require("immutable-devtools")(Immutable);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Immutable Tutorial and Sandbox</h1>
        <h2 className="subtitle">
          {"Brought to you by "}
          <a
            href="http://untangled.io/immutable-js-an-introduction-with-examples-written-for-humans/"
            target="_blank"
            rel="noopener noreferrer"
          >
            untangled.io
          </a>
        </h2>
      </header>
      <TableOfContents examples={examples} />
      <MainSection examples={examples} />
    </div>
  );
}

export default App;
