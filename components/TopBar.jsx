import Link from 'next/link'
import React from 'react'

export const TopBar = () => {
  return (
    <div className='py-3 '>
      <Link href='/'>
        <img className='h-[90px] rounded cursor-pointer ml-2' src="/index.jpg" alt="" />
      </Link>
    </div>
  )
}
