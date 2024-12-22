import {defineField, defineType} from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'number',
      type: 'number', // Changed to number
      validation: (Rule) => Rule.required().min(0).integer(), // Ensure non-negative integers
    }),
    defineField({
      name: 'clientName',
      type: 'string',
    }),
    defineField({
      name: 'position',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5), // Restrict to 1-100 range
    }),
    defineField({
      name: 'testimonial',
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
      title: 'clientName',
      media: 'photo',
    },
  }
})