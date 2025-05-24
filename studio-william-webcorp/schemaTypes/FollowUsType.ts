import { defineField, defineType } from 'sanity';

export const followUsType = defineType({
  name: 'followUs',
  title: 'Follow Us',
  type: 'document',
  fields: [
    defineField({
        name: 'number',
        type: 'number', // Changed to number
        validation: (Rule) => Rule.required().min(0).integer(), // Ensure non-negative integers
    }),
    defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
    }),
    defineField({
        name: 'link',
        title: 'link',
        type: 'string', // Changed to boolean
    }),
    defineField({
        name: 'enabled',
        title: 'Enabled',
        type: 'boolean', // Changed to boolean
        description: 'If enabled, this social media will be visible on the website.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});