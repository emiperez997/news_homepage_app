import PropTypes from "prop-types";
import "./Wrapper.css";

function Wrapper({ children, type }) {
  return <div className={`wrapper-${type}`}>{children}</div>;
}

export { Wrapper };

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
};
