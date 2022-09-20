import { FacebookIcon, FacebookShareButton, PinterestIcon, PinterestShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'next-share'
import React from 'react'
import { currentUrl } from '../../utils/currentURL'
import { ClockIcon } from '@heroicons/react/24/outline'
import moment from 'moment';
import 'moment/locale/ur'
import PortableText from "react-portable-text"
import { urlFor } from '../../sanity';
import NewsCard from './NewsCard';
import NewsCardHorizontal from '../home/NewsCardHorizontal';

const NewsPostPage = ({ newspost, latestnews }) => {
    moment.locale('ur')
    return (
        <div className='flex flex-col'>
            <hr className='my-3 mx-1' />
            <div className="flex flex-col lg:flex-row-reverse pb-2">
                <div className="flex w-full lg:w-[65%] flex-col">
                    <div className='p-4'>
                        <h1 className='text-right font-semibold text-2xl leading-[50px]'>{newspost.title}</h1>
                    </div>
                    <div className='flex flex-row-reverse items-center px-2'>
                        <div className='mt-3 space-x-1'>
                            <FacebookShareButton
                                url={`${currentUrl}/newspost/${newspost.slug.current}`}
                            >
                                <FacebookIcon size={35} round />
                            </FacebookShareButton>

                            <TwitterShareButton
                                url={`${currentUrl}/newspost/${newspost.slug.current}`}
                            >
                                <TwitterIcon size={35} round />
                            </TwitterShareButton>

                            <WhatsappShareButton
                                url={`${currentUrl}/newspost/${newspost.slug.current}`}
                            >
                                <WhatsappIcon size={35} round />
                            </WhatsappShareButton>

                            <PinterestShareButton
                                url={`${currentUrl}/newspost/${newspost.slug.current}`}
                            >
                                <PinterestIcon size={35} round />
                            </PinterestShareButton>
                        </div>
                        <div className='flex items-center space-x-1 mr-3'>
                            <span className='text-gray-500'>
                                {moment(newspost.publishedAt).format('LL')}
                            </span>
                            <ClockIcon className='w-6 h-6 mt-1 text-gray-500' />
                        </div>
                    </div>
                    <div className="flex justify-end p-2">
                        <img className='w-full lg:w-[90%] max-h-[500px] rounded' src={urlFor(newspost.mainImage).url()} alt='' />
                    </div>
                    <div className='newsPost__Content'>
                        <PortableText
                            content={newspost.body}
                            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                        />
                    </div>
                    <hr className="my-3 mx-2" />
                    <div className="flex flex-col p-1">
                        <h1 className='text-right text-xl font-semibold pb-2 border-r-4 border-teal-700 pr-2'>مزید</h1>
                        <hr className="my-2 mx-2" />
                        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 justify-items-center">
                            <NewsCard newspost={newspost} />
                            <NewsCard newspost={newspost} />
                            <NewsCard newspost={newspost} />
                            <NewsCard newspost={newspost} />
                            <NewsCard newspost={newspost} />
                        </div>
                    </div>
                </div>
                <div className="flex w-full lg:w-[35%] flex-col">
                    <h1 className='text-right text-xl font-semibold pb-2 border-r-4 border-teal-700 pr-2'>تازہ ترین</h1>
                    <hr className="my-2 mx-2" />
                    {latestnews.map((post)=>(
                        <NewsCardHorizontal key={post._id} latest={post} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NewsPostPage