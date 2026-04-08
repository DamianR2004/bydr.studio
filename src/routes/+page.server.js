import { client } from "$lib/sanity";

export async function load() {
  const query = `*[_type == "project"] | order(year desc) {
    title,
    year,
    "slug": slug.current,
    "mainImage": gallery[0].asset->url,
    stack
  }`;

  try {
    const projects = await client.fetch(query);
    return {
      projects
    };
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return {
      projects: [],
      error: "Kon projecten niet laden"
    };
  }
}