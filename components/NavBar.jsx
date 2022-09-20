import { Bars3Icon } from '@heroicons/react/24/outline'
import React from 'react'

const links = [
    'مرکزی صفحہ',
    'اخبار',
    'پاکستان',
    '1 مرکزی صفحہ',
    'اخبار 1',
    'پاکستان 1',
    '2 مرکزی صفحہ',
    'اخبار2 1',
    'پاکستان 21'
]

const NavBar = ({yoffset}) => {
  return (
    <div className={`flex z-20 flex-row-reverse min-h-[60px] py-2 bg-green-700 sticky top-0 flex-wrap `} style={{
      boxShadow: yoffset > 117 ? '0 4px 7px rgba(0,0,0,0.35)' : '0 0px 0px rgba(0,0,0,0.35)'
    }}>
        {yoffset > 117 && <div className="shadow absolute left-2 top-[7px] ">
          <img className='h-11' src="/index.jpg" alt="" />
        </div>}
        {links.map((link)=>(
            <div key={link} className='text-white py-3 px-3 mr-2 rounded hover:bg-yellow-400 hover:text-black transition-all duration-300 hover:shadow cursor-pointer text-sm hidden md:block'>
                {link}
            </div>
        ))}
        <div className='block md:hidden absolute right-2 top-[16px] shadow cursor-pointer bg-green-500 rounded active:bg-gray-800'>
          <Bars3Icon className='w-8 h-8 text-white' />
        </div>
    </div>
  )
}

export default NavBar