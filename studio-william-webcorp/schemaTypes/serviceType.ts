import {defineField, defineType} from 'sanity'

export const serviceType = defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'number',
      type: 'number', // Changed to number
      validation: (Rule) => Rule.required().min(0).integer(), // Ensure non-negative integers
    }),
    defineField({
      name: 'title',
      type: 'text',
    }),
    defineField({
      name: 'titleID',
      type: 'text',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'descriptionID',
      type: 'text',
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
      title: 'title',
      media: 'photo',
    },
  }
})