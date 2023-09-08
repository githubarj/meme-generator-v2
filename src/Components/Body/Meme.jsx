import "./body.css";
import PropTypes from "prop-types";
function Meme(props) {
 
  return (
    <div className="meme-container page">
      <div
        className="meme-main"
        style={{ backgroundImage: `url(${props.meme})` }}
      >
        <h1 className="part1">SHUT UP</h1>
        <h1 className="part2">AND TAKE MY MONEY</h1>
      </div>
    </div>
  );
}

Meme.propTypes = {
    meme: PropTypes.string.isRequired,
}

export default Meme;
