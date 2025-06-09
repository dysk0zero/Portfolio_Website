import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'm98tc3qs', // your projectId
  dataset: 'production', // or your dataset
  apiVersion: '2025-06-08', // today’s date — safe default
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
