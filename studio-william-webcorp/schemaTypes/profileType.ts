import {defineField, defineType} from 'sanity'

export const profileType = defineType({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'location',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      type: 'string',
    }),
    defineField({
      name: 'whatsapp',
      type: 'string',
    }),
    defineField({
      name: 'facebook',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      type: 'string',
    }),
  ],
})