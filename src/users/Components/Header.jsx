import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Navlink from './Navlink.jsx'

export default function Header() {

  return (
    <header className='bg-third text-white sticky top-0'>
      <div className='flex justify-between items-center max-w-6xl mx-auto px-4 relative'>

        <Link to={'/'}>
          <h1 className='text-5xl sm:text-6xl md:text-7xl font-island'>BeninDelice</h1>
        </Link>

        <div className='hidden text-xl items-center space-x-4 md:flex z-20'>
          <Navlink to={'/'}>Accueil</Navlink>
          <Navlink to={'/nous'}>Nous</Navlink>
          <Navlink to={'/menu'}>Menu</Navlink>
          <Navlink to={'/contact'}>Contact</Navlink>
          <Link className='bg-primary text-black p-2 rounded hover:bg-opacity-85' to={'/reserver'}>Réserver une table</Link>
        </div>

      </div>
    </header>
  )
}
