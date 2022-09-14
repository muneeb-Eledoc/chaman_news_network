import React from 'react'

const NewsCard = () => {
  return (
    <div className='cursor-pointer p-1 bg-gray-50 shadow max-w-[288px] border border-gray-300 active:bg-gray-100 rounded md:hover:scale-105 transition-all duration-100'>
      <div className="flex flex-col active:scale-95 transition-all duration-100">
        <div className="flex">
          <img className=' w-72 h-32 sm:h-48 rounded object-cover' loading='lazy' src="https://urdu.geo.tv/assets/uploads/updates/2022-09-12/t_299283_090956_updates.jpg" alt="" />
        </div>
        <div className="flex mt-2 mb-2 flex-row-reverse">
          <h3 className='text-right text-xs leadings-4'>کراچی میں آج اور کل آندھی اور بارش کی پیشگوئی</h3>
        </div>
      </div>
    </div>
  )
}

export default NewsCard