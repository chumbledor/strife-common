import z from 'zod';

export const IdSchema = z.object({
  id: z.string()
});

export type IdData = z.infer<typeof IdSchema>;

export const IdsSchema = z.object({
  ids: z
    .union([ z.string(), z.string().array() ])
    .optional()
    .transform(
      (value?: string | string[]): string[] | undefined => 
        value
          ? Array.isArray(value)
            ? value
            : [ value ]
          : undefined
    )
});

export type IdsData = z.infer<typeof IdsSchema>;

const MaximumTakeCount = 100;

export const SkipTakeSchema = z.object({
  skip: z.number().optional().default(0).transform((value: number): number => value ? Math.max(value, 0) : 0),
  take: z.number().optional().default(MaximumTakeCount).transform((value: number): number => value ? Math.min(Math.max(value, 0), MaximumTakeCount) : MaximumTakeCount)
});

export type SkipTakeData = z.infer<typeof SkipTakeSchema>;