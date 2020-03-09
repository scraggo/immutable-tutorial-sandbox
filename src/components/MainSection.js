import React from "react";
import ReactMarkdown from "react-markdown";
import uniqueId from "lodash.uniqueid";

import { examples } from "../utils/reusablePropTypes";
import { getSlug } from "../utils/getSlug";

const getCodeTestResultEmoji = result => {
  return result === true ? "✅" : "❌";
};

const getCodeString = example => {
  const { codeTest, code: getCode } = example;
  if (!getCode) {
    return null;
  }
  if (typeof getCode !== "function") {
    throw Error("code should be a function");
  }
  const code = getCode();
  return (
    <div>
      <span>
        Result:
        {codeTest && ` ${getCodeTestResultEmoji(codeTest(code))}`}
      </span>
      <pre>{JSON.stringify(code, null, 2)}</pre>
    </div>
  );
};

const getAnchorAndText = example => {
  const { anchor, text } = example;
  const textMarkdown = <ReactMarkdown source={text} />;
  if (!anchor) {
    return textMarkdown;
  }
  const slug = getSlug(anchor);

  return (
    <React.Fragment>
      <div className="anchor-links">
        <a id={slug} href={`#${slug}`} name={slug}>
          Permalink
        </a>
        <span>{" | "}</span>
        {/* eslint-disable jsx-a11y/anchor-is-valid */}
        <a href="#">Top</a>
        {/* eslint-enable jsx-a11y/anchor-is-valid */}
      </div>
      {textMarkdown}
    </React.Fragment>
  );
};

const getExample = example => {
  return (
    <section key={uniqueId("example")}>
      {getAnchorAndText(example)}
      {getCodeString(example)}
      <hr />
    </section>
  );
};

const MainExample = ({ examples }) => {
  return <article>{examples.map(getExample)}</article>;
};

MainExample.propTypes = {
  examples,
};

export default MainExample;
