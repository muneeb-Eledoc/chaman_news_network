import { FacebookIcon, FacebookShareButton, PinterestIcon, PinterestShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'next-share'
import Link from 'next/link'
import React from 'react'
import { urlFor } from '../../sanity'
import { currentUrl } from '../../utils/currentURL'

const Headline = ({ headline }) => {
  return headline && (
    <div className='flex flex-col'>
      <Link href={`/newspost/${headline.slug.current}`}>
        <div className=' flex cursor-pointer rounded-md overflow-hidden shadow-[0_0px_10px_rgba(0,0,0,0.4)]'>
          <div className="flex group relative overflow-hidden flex-1 rounded-r-[2px]">
            <img loading='lazy' className='h-[260px] w-full object-cover object-top' src={urlFor(headline.mainImage).url()} alt="" />
            <div className="absolute top-0 w-full h-full bg-gradient-to-t from-slate-800 to-transparent flex items-end">
              <div className='pb-3 px-4 w-full h-[88px] overflow-hidden'>
                <h1 className='text-shadow text-right leading-[78px] text-[24px] text-white tracking-wide'>{headline.title}</h1>
              </div>
            </div>
            <div className="absolute top-[30%] left-1 flex space-y-1 flex-col">
              <div className="opacity-40 hover:opacity-100 transition-all duration-200">
                <TwitterShareButton
                  url={`${currentUrl}/newspost/${headline.slug.current}`}
                >
                  <TwitterIcon size={25} round />
                </TwitterShareButton>
              </div>
              <div className="opacity-40 hover:opacity-100 transition-all duration-200">
                <FacebookShareButton
                  url={`${currentUrl}/newspost/${headline.slug.current}`}
                >
                  <FacebookIcon size={25} round />
                </FacebookShareButton>
              </div>
              <div className="opacity-40 hover:opacity-100 transition-all duration-200">
                <WhatsappShareButton
                  url={`${currentUrl}/newspost/${headline.slug.current}`}
                >
                  <WhatsappIcon size={25} round />
                </WhatsappShareButton>           </div>
              <div className="opacity-40 hover:opacity-100 transition-all duration-200">
                <PinterestShareButton
                  url={`${currentUrl}/newspost/${headline.slug.current}`}
                >
                  <PinterestIcon size={25} round />
                </PinterestShareButton>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Headline