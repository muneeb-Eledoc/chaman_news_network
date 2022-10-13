import Link from 'next/link'
import React from 'react'
import Copyright from './Copyright'

const Footer = ({links}) => {
  return (
    <div className='flex'>

      <footer className="p-4 bg-slate-100 sm:p-6 w-full font-sans border-t border-gray-200">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a className="flex items-center" >
              <img src="/index.jpg" className="mr-3 h-24 shadow rounded" alt="Truth Speaks" />
            </a>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-1">
            {/* <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-slate-600">Resources</h2>
              <ul className="text-gray-600 dark:text-gray-600">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-slate-600
">Follow us</h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                </li>
                <li>
                  <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                </li>
              </ul>
            </div> */}
            <div>
              <h2 className="mb-4 text-lg font-semibold text-gray-900 uppercase dark:text-slate-800 text-right">اقسام</h2>
              <ul className="text-gray-600 dark:text-gray-400">
                {links.map((link)=>(
                <li key={link._id} className="my-1 py-2 flex justify-end">
                  <Link href={`/category/${link._id}`}>
                    <a className="hover:underline cursor-pointer text-sm text-slate-600 text-right">{link.title}</a>
                  </Link>
                </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-300 sm:mx-auto lg:my-6" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-600 font-sans">© {new Date().getFullYear()} Truth Speaks News™. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-3 sm:justify-center sm:mt-0">
            <div className='bg-white p-1 rounded-full shadow hover:scale-110 transition-all duration-100'>
              <a href="https://www.facebook.com/truthspeaknews/" target='blank'>
                  <img className='w-6 h-6 grayscale' src="/facebook.png" alt="facebook" />
              </a>
            </div>
            <div className='bg-white p-1 rounded-full shadow hover:scale-110 transition-all duration-100'>
              <a href="https://www.youtube.com/c/TruthSpeaksNews" target='blank'>
                  <img className='w-6 h-6 grayscale' src="/youtube.png" alt="facebook" />
              </a>
            </div>
            <div className='bg-white p-1 rounded-full shadow hover:scale-110 transition-all duration-100'>
              <a href="https://www.instagram.com/truthspeaksnews/" target='blank'>
                  <img className='w-6 h-6 grayscale' src="/instagram.png" alt="facebook" />
              </a>
            </div>
            <div className='bg-white p-1 rounded-full shadow hover:scale-110 transition-all duration-100'>
              <a href="https://twitter.com/truthspeaknews" target='blank'>
                  <img className='w-6 h-6 grayscale' src="/twitter.png" alt="facebook" />
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer