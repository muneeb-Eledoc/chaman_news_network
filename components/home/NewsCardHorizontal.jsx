import React from 'react'

const NewsCardHorizontal = () => {
  return (
    <div className='flex flex-row-reverse mb-3 p-1 cursor-pointer bg-white rounded border border-gray-200 mx-1 hover:bg-gray-100 active:scale-95 transition-all duration-75'>
        <img className='w-20 h-20 rounded object-cover ml-3 shadow' src='https://photo-cdn.urdupoint.com/show_img_new/daily/todayNewsLive/2022/400x200/pic_ffafc_1662922335.jpg._1' alt=''/>
        <div className='flex flex-col'>
            <h4 className='text-right text-md max-h-[36px]'>{'سیلاب نے حسین شہر بحرین کو اجاڑ کر رکھ دیا، جنگ زدہ شہر کا منظر پیش کرنے لگا'.substring(0,60)}</h4>
            <p className='text-right mt-3 text-xs text-gray-600 leading-6'>{'سیلاب نے حسین شہر بحرین کو اجاڑ کر رکھ دیا، جنگ زدہ شہر کا منظر پیسیلاب نے حسین شہر بحرین کو اجاڑ کر رکھ دیا، جنگ زدہ شہر کا منظر پیش کسیلاب نے حسین شہر بحرین کو اجاڑ کر رکھ دیا، جنگ زدہ شہر کا منظر پیش ک'.substring(0, 155)}</p>
        </div>
    </div>
  )
}

export default NewsCardHorizontal