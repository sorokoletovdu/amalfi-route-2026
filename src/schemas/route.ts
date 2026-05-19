import { z } from 'zod';

export const MooringTypeSchema = z.enum(['marina', 'buoy', 'anchor', 'marina_or_anchor']);

export const MooringSchema = z.object({
  type: MooringTypeSchema,
  name: z.string().optional(),
  phone: z.string().optional(),
  booking_urls: z.array(z.string().url()).default([]),
  notes: z.string().optional(),
});

export const WarningSeveritySchema = z.enum(['info', 'warning', 'critical']);

export const WarningSchema = z.object({
  severity: WarningSeveritySchema,
  text: z.string(),
});

export const PlanSchema = z.object({
  trigger: z.string().optional(),
  destinations: z.array(z.string()),
  mooring: MooringSchema,
  activities: z.array(z.string()).default([]),
  warnings: z.array(WarningSchema).default([]),
  scirocco_note: z.string().optional(),
});

export const DaySchema = z.object({
  day: z.number(),
  date: z.string(),
  title: z.string(),
  departure_time: z.string().optional(),
  notes: z.string().optional(),
  plan_a: PlanSchema,
  plan_b: PlanSchema.optional(),
});

export const SciroccoDaySchema = z.object({
  day_ref: z.string(),
  title: z.string(),
  destination: z.string(),
  mooring: MooringSchema,
  activities: z.array(z.string()).default([]),
  merges_to: z.string().optional(),
});

export const BoatSchema = z.object({
  name: z.string(),
  length_m: z.number(),
  beam_m: z.number(),
  draft_m: z.number(),
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
  boat: BoatSchema,
  crew: CrewSchema,
  rules: z.array(z.string()).default([]),
  days: z.array(DaySchema),
  scirocco_branch: z.array(SciroccoDaySchema).default([]),
});

export type MooringType = z.infer<typeof MooringTypeSchema>;
export type Mooring = z.infer<typeof MooringSchema>;
export type WarningSeverity = z.infer<typeof WarningSeveritySchema>;
export type Warning = z.infer<typeof WarningSchema>;
export type Plan = z.infer<typeof PlanSchema>;
export type Day = z.infer<typeof DaySchema>;
export type SciroccoDay = z.infer<typeof SciroccoDaySchema>;
export type Boat = z.infer<typeof BoatSchema>;
export type Crew = z.infer<typeof CrewSchema>;
export type Route = z.infer<typeof RouteSchema>;
