import { useState, useEffect } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Slogan from './components/Slogan/Slogan';
import Content from './components/Content/Content';
function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  })
  const [isMobile, setMobile] = useState(false)
  useEffect(() => {
    const hangleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener('resize', hangleSize)
    hangleSize()
    return () => {
      window.removeEventListener('resize', hangleSize)
    }
  }, [])

  useEffect(() => {
    windowSize.width < 769 ? setMobile(true) : setMobile(false)
    console.log(windowSize.width)
  }, [windowSize])

  return (
    <div className="h-screen font-sora overflow-x-hidden overflow-y-scroll px-4 py-8 bg-gradient-to-b dark:from-purple-900 dark:to-purple-600 dark:text-white from-white to-pink-500 text-black">
      <NavBar isMobile={isMobile}/>
      <Slogan />
      <Content />
    </div>
  );
}

export default App;
