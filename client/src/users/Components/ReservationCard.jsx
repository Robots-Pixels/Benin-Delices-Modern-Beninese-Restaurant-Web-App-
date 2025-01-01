import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquare} from "@fortawesome/free-solid-svg-icons"


export default function ReservationCard() {
  return (
    <div className='mx-auto max-w-6xl p-2 bg-[#402e32b3]
    pt-14
    sm:p-4'>
        <div className='bg-third p-4 rounded-lg shadow-lg text-white border-black border-4 text-center'>
            <h2 className='text-3xl font-semibold'>Reservation en ligne</h2>

            <p className='text-sm mb-4'>Contactez-nous au <span className='text-black'>+229 01 40 82 04 93</span> <br />
            ou remplissez le formulaire suivant
            </p>

            <form className='space-y-4'>

            <div className='flex flex-col space-y-2'>
                <input type='text' id='nom' placeholder='Nom' required className='p-2 border border-gray-300 rounded' />
            </div>

            <div className='flex flex-col space-y-2'>
                <input type='text' id='prenom' required placeholder='Prénom' className='p-2 border border-gray-300 rounded' />
            </div>

            <div className='flex flex-col space-y-2'>
                <input type='tel' id='phone' required 
                placeholder='Téléphone'
                className='p-2 border border-gray-300 rounded' />
            </div>

            <div className='flex flex-col space-y-2'>
                <input type='email' id='email'
                placeholder='Email' className='p-2 border border-gray-300 rounded' />
            </div>
           
            <div className='flex flex-col space-y-2'>
                <input value="2024-12-31" type='date' id='date' required className='p-2 border border-gray-300 rounded w-full text-black' />
            </div>

            <div className='flex flex-col space-y-2'>
                <input value="00:00" type='time' id='heure' required className='p-2 border bg-white border-gray-300 rounded w-full text-black' />
            </div>

            <div className='flex flex-col space-y-2'>
                <input type='number' id='invites' required className='p-2 border border-gray-300 rounded' placeholder='Nombre de personnes' />
            </div>


            <div className='flex flex-col space-y-2 text-gray-400 rounded mb-2'>

                <select id="special" className='p-2 rounded'>
                    <option>Occasion spéciale ?</option>
                    <option value="anniversaire">Anniversaire</option>
                    <option value="réunion">Réunion d'affaire</option>
                    <option value="romantique">Diner Romantique</option>
                </select>

            </div>

            <div className='flex flex-col space-y-2 text-black rounded mb-2'>
                <textarea type='text' id='message'  placeholder='Restrictions alimentaires ?' className='p-2 border border-gray-300 rounded' />
            </div>


            <div className='flex flex-col space-y-2 text-black rounded mb-2'>
                <textarea type='text' id='restriction' placeholder='Message particulier ?' className='p-2 border border-gray-300 rounded' />
            </div>

            <button className='bg-primary text-white p-2 rounded hover:bg-opacity-85 w-full'>Réserver</button>
            </form>

        </div>

        <div className='p-4 text-white text-center'>
        <h2 className='text-3xl font-semibold mb-2'>Contactez Nous</h2>

        <p className='text-sm mb-2'>
            Requetes de réservation
        </p>

        <h3 className='text-black text-2xl mb-2'>+229 01 40 82 04 93</h3>
        </div>
        

        <div className="relative w-full mb-4">
        <FontAwesomeIcon
            className="absolute top-1/2 left-1/2 text-[#d3d3d3] text-sm rotate-[45deg] transform -translate-x-1/2 -translate-y-1/2"
            icon={faSquare}
        />
        </div>


        <p className='text-lg font-medium text-white mb-2 text-center'>
            Horaires d'ouverture
        </p>

        <p className='text-sm mb-4 text-white text-center'>
            Du Lundi au Samedi <br />
            09h - 23h
        </p>


        <div className="relative w-full mb-8">
        <FontAwesomeIcon
            className="absolute top-1/2 left-1/2 text-[#d3d3d3] text-sm rotate-[45deg] transform -translate-x-1/2 -translate-y-1/2"
            icon={faSquare}
        />
        </div>

        <p className='text-lg font-medium text-white mb-2 text-center'>
            Localisation
        </p>

        <p className='text-sm mb-10 text-white text-center'>
            BeninDelice, Rue de la Marina <br />
            Cotonou, Benin
        </p>

        <div className="relative w-full">
            <hr />
        <FontAwesomeIcon
            className="absolute top-1/2 left-1/2 text-[#FFF] text-sm rotate-[45deg] transform -translate-x-1/2 -translate-y-1/2"
            icon={faSquare}
        />
        </div>

    </div>
  )
}
