import { defineCollection } from 'astro:content';
import { RouteSchema } from '../schemas/route';

const routeCollection = defineCollection({
  type: 'content',
  schema: RouteSchema,
});

export const collections = {
  route: routeCollection,
};
