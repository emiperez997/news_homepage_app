import PropTypes from "prop-types";
import "./TopNew.css";

function TopNew({ topNew }) {
  return (
    <div className="top-new">
      <div className="img-container">
        <img className="top-img" src={topNew.img} alt="Image" />
      </div>

      <div className="top-info">
        <small className="top-id">0{topNew.id}</small>
        <h3 className="top-title">{topNew.title}</h3>
        <p className="top-description">{topNew.description}</p>
      </div>
    </div>
  );
}

export { TopNew };

TopNew.propTypes = {
  topNew: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }),
};
