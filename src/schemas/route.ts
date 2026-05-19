import { z } from 'zod';

export const MooringTypeSchema = z.enum(['marina', 'buoy', 'anchor', 'marina_or_anchor']);

export const MooringSchema = z.object({
  type: MooringTypeSchema,
  name: z.string().optional(),
  phones: z.array(z.string()).default([]),
  vhf: z.string().optional(),
  google_map: z.string().url().optional(),
  booking_urls: z.array(z.string().url()).default([]),
  notes: z.string().optional(),
});

export const WarningSeveritySchema = z.enum(['info', 'warning', 'critical']);

export const WarningSchema = z.object({
  severity: WarningSeveritySchema,
  text: z.string(),
});

export const POISchema = z.object({
  name: z.string(),
  description: z.string(),
  tripadvisor_url: z.string().optional(),
});

export const PlanSchema = z.object({
  trigger: z.string().optional(),
  destinations: z.array(z.string()),
  moorings: z.array(MooringSchema).min(1),
  activities: z.array(z.string()).default([]),
  pois: z.array(POISchema).default([]),
  warnings: z.array(WarningSchema).default([]),
  scirocco_note: z.string().optional(),
});

export const DaySchema = z.object({
  day: z.number(),
  date: z.string(),
  title: z.string(),
  departure_time: z.string().optional(),
  notes: z.string().optional(),
  morning_pois: z.array(POISchema).default([]),
  plan_a: PlanSchema,
  plan_b: PlanSchema.optional(),
});

export const SciroccoVariantSchema = z.object({
  title: z.string(),
  condition: z.string(),
  shelter: z.string(),
  moorings: z.array(MooringSchema).min(1),
  pois: z.array(POISchema).default([]),
  return_notes: z.string().optional(),
});

export const BoatSchema = z.object({
  name: z.string(),
  link: z.string().optional(),
  length_m: z.number(),
  beam_m: z.number(),
  draft_m: z.number(),
  water_tank_l: z.number().optional(),
  fuel_tank_l: z.number().optional(),
  ac: z.boolean().optional(),
  inverter: z.boolean().optional(),
});

export const CrewSchema = z.object({
  adults: z.number(),
  children: z.number(),
  children_ages: z.string().optional(),
});

export const RouteSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  dates: z.string(),
  home_base: z.string().optional(),
  boat: BoatSchema,
  crew: CrewSchema,
  rules: z.array(z.string()).default([]),
  days: z.array(DaySchema),
  scirocco_branch: z.array(SciroccoVariantSchema).default([]),
});

export type MooringType = z.infer<typeof MooringTypeSchema>;
export type Mooring = z.infer<typeof MooringSchema>;
export type WarningSeverity = z.infer<typeof WarningSeveritySchema>;
export type Warning = z.infer<typeof WarningSchema>;
export type POI = z.infer<typeof POISchema>;
export type Plan = z.infer<typeof PlanSchema>;
export type Day = z.infer<typeof DaySchema>;
export type SciroccoVariant = z.infer<typeof SciroccoVariantSchema>;
export type Boat = z.infer<typeof BoatSchema>;
export type Crew = z.infer<typeof CrewSchema>;
export type Route = z.infer<typeof RouteSchema>;
