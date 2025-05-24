import {defineField, defineType} from 'sanity'

export const clientType = defineType({
  name: 'client',
  title: 'Clients',
  type: 'document',
  fields: [
    defineField({
      name: 'number',
      type: 'number', // Changed to number
      validation: (Rule) => Rule.required().min(0).integer(), // Ensure non-negative integers
    }),
    defineField({
      name: 'client',
      type: 'string',
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image', // Use the image type
      options: {
        hotspot: true, // Enable image hotspot for cropping
      },
    }),
    
  ],
  preview: {
    select: {
      title: 'client',
      media: 'photo',
    },
  }
})