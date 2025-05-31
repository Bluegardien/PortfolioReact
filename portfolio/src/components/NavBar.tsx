import React from 'react';

export default function NavBar() {
  return (
    <nav className="w-full h-[7vh] bg-white shadow-md px-8 py-4 text-center fixed top-0 z-50">
        <div className='w-[60%] h-full flex mx-auto items-center justify-around'>
            <h2 className='text-2xl' style={{ fontFamily: "'Vina Sans', sans-serif" }}> Mon Parcours</h2>
            <h2 className='text-2xl' style={{ fontFamily: "'Vina Sans', sans-serif" }}> Mon Parcours</h2>
            <h2 className='text-2xl' style={{ fontFamily: "'Vina Sans', sans-serif" }}> Mon Parcours</h2>
            <h2 className='text-2xl' style={{ fontFamily: "'Vina Sans', sans-serif" }}> Mon Parcours</h2>
        </div>
    </nav>
  );
}