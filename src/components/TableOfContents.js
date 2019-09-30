import React from "react";
import { examples } from "../utils/reusablePropTypes";
import { getSlug } from "../utils/getSlug";

const TableOfContents = ({ examples }) => {
  return (
    <nav>
      <ul>
        {examples
          .filter(ex => Boolean(ex.anchor))
          .map(ex => (
            <li key={`toc-${ex.anchor}`}>
              <a href={getSlug(ex.anchor)}>{ex.anchor}</a>
            </li>
          ))}
      </ul>
    </nav>
  );
};

TableOfContents.propTypes = {
  examples,
};

export default TableOfContents;
