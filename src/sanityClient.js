// sanityClient.js
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Configure the Sanity client
const client = createClient({
  projectId: 'ep3z0p88', // Replace with your project ID
  dataset: 'production', // Replace with your dataset name (e.g., "production")
  useCdn: true, // Use the CDN for faster response times
  apiVersion: '2023-10-21', // Use the latest version of the API
});

// Configure the image URL builder
const builder = imageUrlBuilder(client);

// Helper function to get image URLs
export const urlFor = (source) => builder.image(source);

export default client;
