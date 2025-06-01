import BookScene from './Scenes/BookScene'
import ComputerScene from './Scenes/ComputerScene'
import SittedScene from './Scenes/SittedScene'
function ParcoursPage() {
  return (
    <>
      <div className='h-[100vh] w-full flex flex-col items-center justify-center relative'>
        <h1
              className="m-0 leading-none text-[clamp(5rem,10vw,10rem)]"
              style={{ fontFamily: "'Vina Sans', sans-serif" }}
            >
              Mon parcours
            </h1>
        <div className='relative mt-[10%]'>
            <img src="/testbgportfolio.png" alt="" />
            <div className='absolute left-[67%] top-[-30%] w-[30%] h-[100%]'>
                <SittedScene/>
            </div>
            <h2 className='text-center left-[42%] top-[-20%] absolute text-2xl bg-gray-300 p-3 rounded-xl m-5 border-4 border-black' style={{ fontFamily: "'Outfit', sans-serif" }}>IUT2 Informatique<br/>Grenoble</h2>
            <div className='absolute left-[36%] top-[-10%] w-[30%] h-[100%]'>
                <ComputerScene/>
            </div>
            <h2 className='text-center left-[14%] top-[0%] absolute text-2xl bg-gray-300 p-3 rounded-xl m-5 border-4 border-black' style={{ fontFamily: "'Outfit', sans-serif" }}>Lycée d'altitude<br/>Briancon</h2>
            <div className='absolute left-[7%] top-[10%] w-[30%] h-[100%]'>
                <BookScene/>
            </div>
        </div>
      </div>
    </>
  )
}

export default ParcoursPage