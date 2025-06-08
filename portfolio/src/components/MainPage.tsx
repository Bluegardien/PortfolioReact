import DonutScene from './Scenes/DonutScene'

function MainPage() {
  return (
    <>
    
      <div id="mainpage" className='h-[100vh] w-full flex flex-col items-center justify-center relative'>

        <div className='bg-white w-full h-full flex flex-wrap items-start justify-center pt-0 m-0'>
          <div className="relative w-full flex flex-col items-center">
            <h1
              className="w-full text-center m-0 leading-none text-[clamp(10rem,30vw,40rem)]"
              style={{ fontFamily: "'Vina Sans', sans-serif" }}
            >
              Loucas
            </h1>
            <h2
              className="absolute left-1/2 -translate-x-1/2 top-[50%] text-center m-0 leading-none text-[clamp(5rem,10vw,10rem)] opacity-50 z-20"
              style={{ fontFamily: "'Outfit', sans-serif", color: 'grey', fontStyle: 'italic', fontWeight: 'bold' }}
            >
              BURELLIER
            </h2>
          </div>

          <div className='flex justify-between items-start w-full h-auto pl-15 pr-15'>
            <div className='flex flex-wrap justify-around w-[30%] item-start'>
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
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[65%] w-full">
            <DonutScene />
        </div>

      </div>
    </>
  )
}

export default MainPage