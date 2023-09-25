import "./body.css";
import PropTypes from "prop-types";
function Meme(props) {

  const {meme} = props
 
  return (
    <div className="meme-container page">
      <div
        className="meme-main"
        style={{ backgroundImage: `url(${meme.url})` }}
      >
        <h1 className="part1">{meme.topText}</h1>
        <h1 className="part2">{meme.bottomText}</h1>
      </div>
    </div>
  );
}

Meme.propTypes = {
    meme: PropTypes.object.isRequired,
}

export default Meme;
