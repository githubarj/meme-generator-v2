// Desc: This is the main entry point for the application
import './App.css'
import Header from './Components/Body/Header'
import Meme from './Components/Body/Meme'
import Navbar from './Components/Navbar/Navbar'
import memesData from './Data/memesData'
import { useState } from 'react'  

function App() {

    const [meme, setMemeImage] = useState({
      topText: "",
      bottomText: "",
      url: "http://i.imgflip.com/1bij.jpg",
    });
    const [allMemeImages, setAllMemeImages] = useState(memesData);

    function getMemeImage() {
      const memesArray = memesData.data.memes;
      const randomNumber = Math.floor(Math.random() * memesArray.length);
      setMemeImage((prev) => {
        return {
          ...prev,
          url: memesArray[randomNumber].url,
        };
      });
    }
    
 

  return (
    <div className="app-container">
      <Navbar />
      <Header buttonClick={getMemeImage} />
      <Meme meme={meme.url} />
    </div>
  );
}

export default App
