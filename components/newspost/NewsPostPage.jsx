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

const NewsPostPage = ({ newspost, latestnews, relatedNews }) => {
    moment.locale('en')
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
                        <div className='flex items-center space-x-1 mr-3 mt-2'>
                            <span className='text-gray-500 font-sans'>
                                {moment(newspost.publishedAt).format('LL')}
                            </span>
                            <ClockIcon className='w-6 h-6 text-gray-500' />
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
                        <h1 className='section__Heading'>مزید</h1>
                        <hr className="my-2 mx-2" />
                        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 justify-items-center">
                            {relatedNews.map((post)=>(
                                <NewsCard key={post._id} newspost={post} />
                            ))}
                        </div>
                        {relatedNews.length === 0 && (
                            <p className='text-center mt-2 text-red-500'>معذرت مزید کوئی نتیجہ نہیں</p>
                        )}
                    </div>
                </div>
                <div className="flex w-full lg:w-[35%] flex-col">
                    <h1 className='section__Heading'>تازہ ترین</h1>
                    <hr className="my-2 mx-2" />
                    <div className="flex flex-col space-y-3">
                        {latestnews.map((post)=>(
                            <NewsCardHorizontal key={post._id} latest={post} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsPostPage