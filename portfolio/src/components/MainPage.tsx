import DonutScene from './Scenes/DonutScene'
import { useEffect, useState } from 'react'

function MainPage() {
  const [visible, setVisible] = useState([false, false, false])

  useEffect(() => {
    const timers = [
      setTimeout(() => setVisible(() => [true, false, false]), 100),
      setTimeout(() => setVisible(() => [true, true, false]), 600),
      setTimeout(() => setVisible(() => [true, true, true]), 1100),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <>
      <style>
        {`
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s cubic-bezier(0.22, 1, 0.36, 1), transform 1s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
        `}
      </style>
      <div id="mainpage" className='h-[100vh] w-full flex flex-col items-center justify-center relative'>

        <div className='bgc1 w-full h-full flex flex-wrap items-start justify-center pt-0 m-0'>
          <div className="relative w-full flex flex-col items-center">
            <h1
              className={`w-full text-center txtc1 m-0 leading-none text-[clamp(10rem,30vw,40rem)] fade-in${visible[0] ? ' visible' : ''}`}
              style={{ fontFamily: "'Vina Sans', sans-serif" }}
            >
              Loucas
            </h1>
            <h2
              className={`absolute left-1/2 -translate-x-1/2 top-[50%] txtc2 text-center m-0 leading-none text-[clamp(5rem,10vw,10rem)] opacity-50 z-20 fade-in${visible[2] ? ' visible' : ''}`}
              style={{ fontFamily: "'Outfit', sans-serif", fontStyle: 'italic', fontWeight: 'bold' }}
            >
              BURELLIER
            </h2>
          </div>

          <div className='flex justify-between items-center w-full h-auto pl-15 pr-15 fade-in' style={{ opacity: visible[2] ? 1 : 0, transform: visible[2] ? 'translateY(0)' : 'translateY(30px)' }}>
            <div className=" w-[30%] bgc3 p-5 txtc1 rounded-xl  shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-[clamp(0.5rem,3vw,1.5rem)]"  style={{ fontFamily: "'Outfit', sans-serif" }}>
              <p>Je m'appelle Loucas et l'informatique me passionne. Et si on apprennait à se connaitre ? </p>
            </div>
            <div className=" w-[30%] bgc3 p-5 rounded-xl txtc1 shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-[clamp(0.5rem,3vw,1.2rem)]"  style={{ fontFamily: "'Outfit', sans-serif" }}>
              <p>Originaire des montagnes des hautes-alpes, Je suis actuellement étudiant à l'IUT2 de Grenoble en BUT Informatique.</p>
            </div>

            {/* <div className='flex flex-wrap justify-around w-[30%] item-start'>
              <h2 className='text-2xl bg-gray-300 p-3 rounded-xl m-5' style={{ fontFamily: "'Outfit', sans-serif" }}>Web</h2>
              <h2 className='text-2xl bg-gray-300 p-3 rounded-xl m-5' style={{ fontFamily: "'Outfit', sans-serif" }}>Bas-Niveau</h2>
              <h2 className='text-2xl bg-gray-300 p-3 rounded-xl m-5' style={{ fontFamily: "'Outfit', sans-serif" }}>Administration systeme</h2>
              <h2 className='text-2xl bg-gray-300 p-3 rounded-xl m-5' style={{ fontFamily: "'Outfit', sans-serif" }}>Réseau</h2>
              <h2 className='text-2xl bg-gray-300 p-3 rounded-xl m-5' style={{ fontFamily: "'Outfit', sans-serif" }}>Game Developpement</h2>
            </div> 
            <div className='flex flex-wrap justify-around w-[30%] item-start'>
              <h2 className='text-2xl bg-gray-300 p-3 rounded-xl m-5' style={{ fontFamily: "'Outfit', sans-serif" }}>Cybersécurité</h2>
              <h2 className='text-2xl bg-gray-300 p-3 rounded-xl m-5' style={{ fontFamily: "'Outfit', sans-serif" }}>3D</h2>
              <h2 className='text-2xl bg-gray-300 p-3 rounded-xl m-5' style={{ fontFamily: "'Outfit', sans-serif" }}>Analyse de données</h2>
              <h2 className='text-2xl bg-gray-300 p-3 rounded-xl m-5' style={{ fontFamily: "'Outfit', sans-serif" }}>UX</h2>
              <h2 className='text-2xl bg-gray-300 p-3 rounded-xl m-5' style={{ fontFamily: "'Outfit', sans-serif" }}>Gestion de projet</h2>
            </div>*/}
          </div>
        </div>
        <div
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[65%] w-full fade-in${visible[1] ? ' visible' : ''}`}
        >
          <DonutScene />
        </div>

      </div>
    </>
  )
}

export default MainPage