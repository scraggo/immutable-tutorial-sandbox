import PropTypes from "prop-types";

export const examples = PropTypes.arrayOf(
  PropTypes.shape({
    anchor: PropTypes.string,
    code: PropTypes.function,
    codeTest: PropTypes.function,
    text: PropTypes.string.isRequired,
  })
).isRequired;
