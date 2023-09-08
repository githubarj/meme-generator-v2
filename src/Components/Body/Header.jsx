import "./body.css"
function Header() {
  return (
    <div className="header-container page">
      <form action="">
        <div className="inputs">
          <input type="text" placeholder="" />
          <input type="text" placeholder="" />
        </div>
        <button className="submit" type="submit">
          Get a new meme image
        </button>
      </form>
    </div>
  );
}

export default Header