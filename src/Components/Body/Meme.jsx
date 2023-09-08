import "./body.css"

function Meme() {
  return (
    <div className="meme-container page">
      <div
        className="meme-main"
        style={{ backgroundImage: `url(/images/meme1.png)` }}
      >
        <h1 className="part1">SHUT UP</h1>
        <h1 className="part2">AND TAKE MY MONEY</h1>
      </div>
    </div>
  );
}

export default Meme