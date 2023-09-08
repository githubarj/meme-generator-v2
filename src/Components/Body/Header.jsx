import "./body.css"
import PropTypes from "prop-types"

function Header(props) {
    
  return (
    <div className="header-container page">
      <div className="form">
        <div className="inputs">
          <input type="text" placeholder="" />
          <input type="text" placeholder="" />
        </div>
        <button className="submit " type="submit" onClick={props.buttonClick}>
          Get a new meme image
        </button>
      </div>
    </div>
  );
}

Header.propTypes = {
    buttonClick: PropTypes.func.isRequired
}

export default Header