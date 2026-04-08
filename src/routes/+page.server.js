import { client } from "$lib/sanity";

export async function load() {
  // 1. Change _type to "project"
  // 2. We pull the specific fields needed for the list view
  const query = `*[_type == "project" && defined(slug.current)] | order(year desc)[0...12]{
    title,
    year,
    stack,
    "slug": slug.current
  }`;
  
  const projects = await client.fetch(query);

  return {
    projects // Returning "projects" makes more sense than "posts"
  };
}