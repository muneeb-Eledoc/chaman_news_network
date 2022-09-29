import React from 'react'
import Headline from '../home/Headline'
import NewsCardHorizontal from '../home/NewsCardHorizontal'
import CategoryBar from './CategoryBar'

const MainPage = ({links, categoryNews, catId}) => {
  return (
    <div className='flex flex-col-reverse lg:flex-row sm:px-1 py-3 lg:space-x-2'>
        <CategoryBar links={links} catId={catId}/>
        <div className='flex-1'>
            {categoryNews.length> 0 ? <>
            <div className='w-full'>
                <Headline headline={categoryNews[0]} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-3 gap-2 place-items-center">
            {categoryNews.slice(1).map((post)=>(
                <div className="w-full" key={post._id}>
                    <NewsCardHorizontal latest={post}/>
                </div>
            ))}
            </div>
            </> : <>
             <div className='flex flex-1 justify-center'>
                <img className='h-56' src="/404.jpg" alt="" />
             </div>
            </>}
        </div>
    </div>
  )
}

export default MainPage


