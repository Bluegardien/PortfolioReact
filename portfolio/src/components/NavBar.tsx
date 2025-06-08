import React from 'react';

export default function NavBar() {
  return (
    <nav className="w-full h-[7vh] bg-white shadow-md px-8 py-4 text-center fixed top-0 z-50">
        <div className='w-[60%] h-full flex mx-auto items-center justify-around'>
            <a href="#mainpage"><h2 className='text-2xl' style={{ fontFamily: "'Vina Sans', sans-serif" }}> Me Connaitre</h2></a>
            <a href="#parcourspage"><h2 className='text-2xl' style={{ fontFamily: "'Vina Sans', sans-serif" }}> Mon Parcours</h2></a>
            <a href="#projetspage"><h2 className='text-2xl' style={{ fontFamily: "'Vina Sans', sans-serif" }}> Mes Projets</h2></a>
            <a href="#contactpage"><h2 className='text-2xl' style={{ fontFamily: "'Vina Sans', sans-serif" }}> Me Contacter</h2></a>
        </div>
    </nav>
  );
}