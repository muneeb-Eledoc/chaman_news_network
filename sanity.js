import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const config = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: process.env.NEXT_PUBLIC_API_VERSION,
    useCdn: false,
    token: process.env.NEXT_PUBLIC_API_TOKEN,
}

const builder = imageUrlBuilder(config)

export const sanityClient = createClient(config)

export function urlFor(source) {
    return builder.image(source)
}
