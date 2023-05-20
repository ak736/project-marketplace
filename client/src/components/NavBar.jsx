import React from 'react'
import { useSelector } from 'react-redux';

const NavBar = () => {
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <div className='flex justify-between items-center mt-8 bg-transparent '>
        <div className={`${darkMode?`bg-gray-700`:`bg-white`} flex rounded-3xl overflow-hidden`}>
            <div className='bg-blue-500 px-4 py-2 rounded-3xl'>
               <p className={`${darkMode?`text-white`:`text-black`}`}>Login</p>
            </div>
            <div className={`${darkMode?`bg-gray-700`:`bg-white`} pr-4 py-2 ml-2`}>
                <p className={`${darkMode?`text-white`:`text-black`}`}>Sign Up</p>
            </div>
        </div>
        <div className='flex items-center gap-2'>
            <p className={`${darkMode?`text-white`:`text-black`} font-semibold`}>Hire a freelancer</p>
            <p className='font-extrabold text-lg'>・</p>
            <p className={`${darkMode?`text-white`:`text-black`} font-semibold`}>Search for freelancers</p>
        </div>
    </div>
  )
}

export default NavBar