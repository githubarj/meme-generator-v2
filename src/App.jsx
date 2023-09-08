// Desc: This is the main entry point for the application
import './App.css'
import Header from './Components/Body/Header'
import Meme from './Components/Body/Meme'
import Navbar from './Components/Navbar/Navbar'

function App() {
 

  return (
    <div className='app-container'>
      <Navbar />
      <Header />
      <Meme />
      
    </div>
  )
}

export default App
