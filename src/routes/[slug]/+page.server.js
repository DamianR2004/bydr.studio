import { client } from "$lib/sanity";

export async function load({ params }) {
  const query = `*[_type == "project" && slug.current == $slug][0]{
    title,
    year,
    intro,
    gallery,
    outro,
    stack
  }`;

  const project = await client.fetch(query, { slug: params.slug });

  return { project };
}