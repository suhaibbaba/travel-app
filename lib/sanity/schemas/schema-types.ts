export const SCHEMA_TYPES = {
  HOME_PAGE: "homePage",
  HEADER: "header",
  FOOTER: "footer",
  ARTICLE: "article",
  ARTICLES_LIST: "articlesList",
  DICTIONARIES: "dictionaries",
} as const;

export type SchemaType = (typeof SCHEMA_TYPES)[keyof typeof SCHEMA_TYPES];
