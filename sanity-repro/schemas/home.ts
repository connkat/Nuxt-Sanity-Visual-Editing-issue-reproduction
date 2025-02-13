import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: () => '🏠',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
  ],
})
