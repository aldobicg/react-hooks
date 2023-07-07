import PropTypes from "prop-types";

export const Blockquote = ({ quote, author }) => {
  return (
    <blockquote className="blockquote text-end">
      <p className="mb-3">{quote}</p>
      <footer className="blockquote-footer">{author}</footer>
    </blockquote>
  );
};

Blockquote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
