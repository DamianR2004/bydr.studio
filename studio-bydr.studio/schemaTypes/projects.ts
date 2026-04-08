export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Name',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Project Year',
      type: 'string', // Use string so you can write "2024" or "2024—2026"
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    },
    {
      name: 'description',
      title: 'About the Project',
      type: 'array',
      of: [{ type: 'block' }], // This is for the "Text about the project"
    },
    {
      name: 'gallery',
      title: 'Project Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }], // Multiple images!
    },
    {
      name: 'stack',
      title: 'Jamstack Tools (Badges)',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags', // Makes it look like badges in the CMS
        list: [
          { title: 'SvelteKit', value: 'sveltekit' },
          { title: 'Sanity', value: 'sanity' },
          { title: 'Vercel', value: 'vercel' },
          { title: 'Directus', value: 'directus' },
          { title: 'Netlify', value: 'netlify' },
        ]
      }
    },
  ],
}