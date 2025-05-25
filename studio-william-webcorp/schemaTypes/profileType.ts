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
      name: 'fullLocation',
      type: 'text',
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
      name: 'email',
      type: 'string',
    }),
    defineField({
      name: 'footerText',
      type: 'text',
    }),
    defineField({
      name: 'footerTextID',
      type: 'text',
    }),
  ],
})