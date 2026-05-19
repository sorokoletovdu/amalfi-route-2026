import { z } from 'zod';

export const POITypeSchema = z.enum([
  'cultural',
  'beach',
  'restaurant',
  'nature',
  'marina',
  'viewpoint',
  'other',
]);

export const POISchema = z.object({
  name: z.string(),
  type: POITypeSchema,
  description: z.string(),
  rating: z.number().min(0).max(5).optional(),
  link: z.string().url().optional(),
});

export const AnchoringSchema = z.object({
  bay: z.string(),
  coordinates: z.string(),
  depth_m: z.string(),
  shelter: z.string().optional(),
  notes: z.string().optional(),
});

export const DestinationSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  coordinates: z.string().optional(),
});

export const DaySchema = z.object({
  day: z.number(),
  title: z.string(),
  description: z.string().optional(),
  from: z.string().optional(),
  to: z.string().optional(),
  distance_nm: z.number().optional(),
  destinations: z.array(DestinationSchema).default([]),
  pois: z.array(POISchema).default([]),
  anchoring: AnchoringSchema.optional(),
});

export const RouteSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  days: z.array(DaySchema),
});

export type POIType = z.infer<typeof POITypeSchema>;
export type POI = z.infer<typeof POISchema>;
export type Anchoring = z.infer<typeof AnchoringSchema>;
export type Destination = z.infer<typeof DestinationSchema>;
export type Day = z.infer<typeof DaySchema>;
export type Route = z.infer<typeof RouteSchema>;
