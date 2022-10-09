import { Bars3Icon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
// 'مرکزی صفحہ',

const NavBar = ({ yoffset, links }) => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <div className='flex z-20 flex-row-reverse min-h-[60px] py-2 md:px-2 space-x-1 bg-gradient-to-b to-green-600 via-green-700 from-green-800 sticky top-0 flex-wrap' style={{
        boxShadow: yoffset > 117 ? '0 5px 7px -2px rgba(0,0,0,0.35)' : '0 0px 0px rgba(0,0,0,0.35)'
      }}>
        {yoffset > 117 && <div className="shadow absolute left-2 top-[7px] ">
          <img className='h-11 shadow' src="/index.jpg" alt="" />
        </div>}
        <div className='flex flex-row-reverse items-center'>
          <Link href='/'>
            <a>
              <div className='text-white pb-1 pt-2 px-2 rounded hover:text-yellow-400 transition-all duration-300 cursor-pointer text-sm hidden md:block'>
                مرکزی صفحہ
              </div>
            </a>
          </Link>
          {links.map((link) => (
            <Link key={link._id} href={`/category/${link._id}`}>
              <a>
                <div className='text-white pb-1 pt-2 px-2 rounded hover:text-yellow-400 transition-all duration-300 text-sm hidden md:block'>
                  {link.title}
                </div>
              </a>
            </Link>
          ))}
        </div>
        <div onClick={() => setShowMenu(true)} className='block md:hidden absolute right-2 top-[16px] shadow cursor-pointer bg-green-500 rounded active:bg-gray-800'>
          <Bars3Icon className='w-8 h-8 text-white' />
        </div>
      </div>
      <div className={`fixed block h-screen md:hidden w-64 top-0 z-30 shadow-[0_0px_15px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out bg-green-600 ${showMenu ? 'right-0 opacity-100' : '-right-64 opacity-50'}`}>
        <svg onClick={() => setShowMenu(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white absolute top-2 right-2 shadow rounded-full cursor-pointer hover:scale-125 transition-all duration-100 ease-out">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

        <div className='flex flex-col space-y-2 mt-12 px-1'>
          <Link href='/'>
            <a>
              <div className='text-white text-center pb-1 pt-2 px-2 rounded hover:text-yellow-400 transition-all duration-300 cursor-pointer text-sm block md:hidden'>
                مرکزی صفحہ
              </div>
            </a>
          </Link>
          {links.map((link) => (
            <Link key={link._id} href={`/category/${link._id}`}>
              <a>
                <div className='text-white text-center pb-1 pt-2 px-2 rounded hover:text-yellow-400 transition-all duration-300 cursor-pointer text-sm block md:hidden'>
                  {link.title}
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default NavBar