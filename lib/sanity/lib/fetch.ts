import type { QueryParams } from "next-sanity";
import { client } from "@/lib/sanity/lib/client";

export async function sanityFetch<T>(
  query: string,
  options: QueryParams = {},
): Promise<T> {
  const {
    tags = [],
    revalidate = 300,
    useCdn = true,
    perspective = "published",
    ...params
  } = options;

  return client.fetch<T>(query, params, {
    useCdn,
    perspective,
    next: { revalidate, tags },
  });
}
