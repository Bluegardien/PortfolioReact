import './App.css'
import MainPage from './components/MainPage'
import NavBar from './components/NavBar'
import ParcoursPage from './components/ParcoursPage'
import Browse from './components/Browse'
import Contact from './components/Contact'
import { SpeedInsights } from '@vercel/speed-insights/react';
function App() {
  return (
    <>
    <link href="https://fonts.googleapis.com/css2?family=Vina+Sans&display=swap" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet"></link>
    <NavBar></NavBar>
    <div className='bg-gray-300 p-[5vw] pb-[0] pt-[0]'>
      <div className="bg-white">
        <MainPage />
        <ParcoursPage/>
        <Browse/>
        <Contact/>
      </div>
    </div>
    <SpeedInsights/>
    </>
  )
}

export default App
