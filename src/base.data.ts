import { z } from 'zod';

export const IdSchema = z.object({
  id: z.string()
});

export type IdData = z.infer<typeof IdSchema>;

export const IdsSchema = z.object({
  ids: z.string().array().optional()
});

export type IdsData = z.infer<typeof IdsSchema>;

const MaximumTakeCount = 100;

export const SkipTakeSchema = z.object({
  skip: z.number().optional().transform((value: number | undefined): number | undefined => value ? Math.max(value, 0) : value),
  take: z.number().optional().transform((value: number | undefined): number | undefined => value ? Math.min(Math.max(value, 0), MaximumTakeCount) : value)
});

export type SkipTakeData = z.infer<typeof SkipTakeSchema>;