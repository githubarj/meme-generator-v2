// Desc: This is the main entry point for the application
import './App.css'
import Header from './Components/Body/Header'
import Meme from './Components/Body/Meme'
import Navbar from './Components/Navbar/Navbar'
import { useEffect, useState } from 'react'  

function App() {

    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
      fetch("https://api.imgflip.com/get_memes")
      .then(res =>res.json() )
      .then(data => setAllMemes(data.data.memes))
    },[])


    const [meme, setMeme] = useState({
      topText: "",
      bottomText: "",
      url: "http://i.imgflip.com/1bij.jpg",
    });

    function setMemeText(e) {
      const { name, value } = e.target;
      setMeme((prev) => {
        return { ...prev, [name]: value };
      });
      console.log("hi")
    }


    function getMemeImage() {
      const memesArray = allMemes;
      const randomNumber = Math.floor(Math.random() * memesArray.length);
      setMeme((prev) => {
        return {
          ...prev,
          url: memesArray[randomNumber].url,
        };
      });
    }
    
 

  return (
    <div className="app-container">
      <Navbar />
      <Header
        buttonClick={getMemeImage}
        handleChange={setMemeText}
        meme={meme}
      />
      <Meme meme={meme} />
    </div>
  );
}

export default App
