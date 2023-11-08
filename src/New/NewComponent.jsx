import "./New.css";
import PropTypes from "prop-types";

function NewComponent({ newObject, isLast }) {
  return (
    <div className="new">
      <div className="new-info">
        <h4 className="new-title"> {newObject.title} </h4>
        <p className="new-description"> {newObject.description} </p>
      </div>
      {isLast && <hr />}
    </div>
  );
}

export { NewComponent };

NewComponent.propTypes = {
  newObject: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  isLast: PropTypes.bool.isRequired,
};
