import React, { useState } from 'react';
import PanelScene from './Scenes/PanelScene'

const projets = [
  {
    title: 'Projet 1',
    description: 'Description du projet 1',
    image: '/testbgportfolio.png',
  },
  {
    title: 'Projet 2',
    description: 'Description du projet 2',
    image: '/forests-beech.jpg',
  },
  // Ajoute d'autres projets ici
]

export default function ProjectPage() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((prev) => (prev === 0 ? projets.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === projets.length - 1 ? 0 : prev + 1));

  return (
    <div className="h-[100vh] w-full flex flex-col items-start justify-center relative bg-white">
        <h1
              className="m-0 ml-[10%] p-0 leading-none text-[clamp(5rem,10vw,10rem)]"
              style={{ fontFamily: "'Vina Sans', sans-serif" }}
            >
              Mes projets
            </h1>
        <div className="relative w-full h-[80%] mx-auto flex p-10">
          <div>
            <p>{projets[current].description}</p>
          </div>
          <div className="w-[80%] h-full flex flex-col items-center ">
            <h1 className="text-3xl" style={{ fontFamily: "'Outfit', sans-serif" }}>{projets[current].title}</h1>
            <div className="h-[90%] w-full">
              <PanelScene imageUrl={projets[current].image} />
            </div>
          </div>


          <div className="absolute top-[70%] left-[27%] h-full w-full -translate-y-1/2 flex">
            <button onClick={prev} className="w-[50%] h-[60%] bg-yellow-500 mr-[4%] opacity-50"></button>
            <div className="w-[13%] h-[60%]">
              <button onClick={prev} className="w-full h-[50%] bg-red-500 opacity-50" ></button>
              <button onClick={next} className="w-full h-[50%] bg-blue-500 opacity-50"></button>
            </div>
          </div>

        </div>
    </div>
  );
}