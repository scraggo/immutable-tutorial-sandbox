import slugify from "slugify";

export const getSlug = str => slugify(str, { lower: true });
