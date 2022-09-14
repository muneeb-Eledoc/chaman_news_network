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
    <div className={`flex flex-row-reverse min-h-[55px] py-2 bg-green-800 sticky top-0 flex-wrap ${yoffset > 117 && 'shadow-md'}`}>
        {yoffset > 117 && <div className="shadow absolute left-2 top-[3px] ">
          <img className='h-11' src="/index.jpg" alt="" />
        </div>}
        {links.map((link)=>(
            <div key={link} className='text-white py-3 px-3 mr-2 rounded hover:bg-yellow-500 cursor-pointer text-sm hidden md:block'>
                {link}
            </div>
        ))}
    </div>
  )
}

export default NavBar