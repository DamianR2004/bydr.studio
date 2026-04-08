import { client } from '$lib/sanity';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  // 'params.slug' comes directly from the folder name [slug]
  const query = `*[_type == "project" && slug.current == $slug][0]{
    title,
    year,
    description,
    gallery,
    stack
  }`;

  const project = await client.fetch(query, { slug: params.slug });

  if (!project) {
    // If someone types /fake-project, show a 404
    throw error(404, 'That project hasn’t been built yet!');
  }

  return { project };
}