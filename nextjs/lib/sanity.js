import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'm98tc3qs', // from sanity.json or sanity.io
  dataset: 'production', // or your chosen dataset
  apiVersion: '2023-05-01', // use current date
  useCdn: true,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
