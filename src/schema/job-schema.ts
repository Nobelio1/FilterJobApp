import { z } from "zod";

export const CharacteristicSchema = z.object({
  characteristic: z.string(),
});

export const FilterSchema = z.object({
  filter: z.string(),
});

export const JobSchema = z.object({
  name: z.string(),
  characteristics: z.string().array().optional(),
  position: z.string(),
  experience: z.string(),
  modality: z.string(),
  locality: z.string(),
  filters: z.string().array(),
});
