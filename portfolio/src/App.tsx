import './App.css'
import MainPage from './components/MainPage'
import NavBar from './components/NavBar'
import ParcoursPage from './components/ParcoursPage'
import ProjectPage from './components/ProjectPage'
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
        <ProjectPage/>
      </div>
    </div>
    </>
  )
}

export default App
