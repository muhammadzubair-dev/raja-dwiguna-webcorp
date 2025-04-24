import { defineField, defineType } from 'sanity';

export const aboutType = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'projectDone',
      title: 'Projects Done',
      type: 'number', // Changed to number
      validation: (Rule) => Rule.required().min(0).integer(), // Ensure non-negative integers
    }),
    defineField({
      name: 'projectDoneWithPlus',
      title: 'Projects Done With Plus',
      type: 'boolean', // Changed to boolean
      description: 'Indicates if projects were completed with an additional bonus/plus.',
    }),
    // defineField({
    //   name: 'qualityProvide',
    //   title: 'Quality Provided (%)',
    //   type: 'number',
    //   validation: (Rule) => Rule.required().min(1).max(100), // Restrict to 1-100 range
    // }),
    // defineField({
    //   name: 'projectPlanning',
    //   title: 'Project Planning (%)',
    //   type: 'number',
    //   validation: (Rule) => Rule.required().min(1).max(100), // Restrict to 1-100 range
    // }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
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
  },
});
