import { defineType, defineField } from 'sanity'

export default defineType({
  title: 'Video blog post',
  name: 'videoBlogPost',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title'
    }),
    defineField({
      name: 'video',
      type: 'mux.video',
      title: 'Video file'
    })
  ]
})