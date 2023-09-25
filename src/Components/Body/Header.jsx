import "./body.css";
import PropTypes from "prop-types";

function Header(props) {
  const { meme, handleChange, buttonClick } = props;

  return (
    <div className="header-container page">
      <div className="form">
        <div className="inputs">
          <input
            type="text"
            placeholder=""
            name="topText"
            onChange={handleChange}
            value={meme.topText}
          />
          <input
            type="text"
            placeholder=""
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
        <button className="submit " type="submit" onClick={buttonClick}>
          Get a new meme image
        </button>
      </div>
    </div>
  );
}

Header.propTypes = {
  buttonClick: PropTypes.func.isRequired,
  handleChange: PropTypes.func,
  meme: PropTypes.object,
};

export default Header;
