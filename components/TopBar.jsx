import Link from 'next/link'
import React from 'react'

export const TopBar = () => {
  return (
    <div className='py-2 md:py-3 flex justify-center md:justify-start'>
      <Link href='/'>
        <a>
          <img className='h-[90px] rounded cursor-pointer ml-2 shadow animate-logo' src="/index.jpg" alt="Truth Speaks News" />
        </a>
      </Link>
    </div>
  )
}
