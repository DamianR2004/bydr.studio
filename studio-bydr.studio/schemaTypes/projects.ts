export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Project Name', type: 'string' },
    { name: 'year', title: 'Project Year', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    // BOVENKANT
    {
      name: 'intro',
      title: 'Introductie (Boven de beelden)',
      type: 'array',
      of: [{ type: 'block' }], 
    },
    // MIDDEN
    {
      name: 'gallery',
      title: 'Project Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }], 
    },
    // ONDERKANT
    {
      name: 'outro',
      title: 'Outro (Onder de beelden)',
      type: 'array',
      of: [{ type: 'block' }], 
    },
    {
      name: 'stack',
      title: 'Jamstack Tools',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags', 
        list: [
          { title: 'SvelteKit', value: 'SvelteKit' },
          { title: 'Sanity', value: 'Sanity' },
          { title: 'Vercel', value: 'Vercel' },
          { title: 'Directus', value: 'Directus' },
          { title: 'Netlify', value: 'Netlify' },
        ]
      }
    },
  ],
}