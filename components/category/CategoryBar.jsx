import Link from 'next/link'
import React from 'react'

const CategoryBar = ({links, catId}) => {
  return (
    <div className='w-full lg:w-[25%] bg-gray-100'>
        <h1 className='section__Heading'>اقسام</h1>
        <div className="flex flex-col space-y-1">
            {links.map((link)=>(
                <Link key={link._id} href={`/category/${link._id}`}>
                    <div className={`w-full text-right py-3 border-b border-gray-200 px-2 hover:text-green-600 cursor-pointer hover:bg-gray-200 ${catId===link._id && 'bg-gray-200'}`}>{link.title}</div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default CategoryBar