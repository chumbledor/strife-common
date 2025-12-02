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
            : value.split(',')
          : undefined
    )
});

export type IdsData = z.infer<typeof IdsSchema>;

const MinimumSkipCount = 0;
const MaximumTakeCount = 100;

const CoerceStringToNumber = z.preprocess(
  (value: string | number | undefined): number | undefined => {
    if (!value)
      return undefined;

    const number = Number(value);
    return !Number.isNaN(number)
      ? number
      : undefined;
  },
  z.number()
);

export const SkipTakeSchema = z.object({
  skip: CoerceStringToNumber.default(MinimumSkipCount).transform((value: number): number => value ? Math.max(value, MinimumSkipCount) : MinimumSkipCount),
  take: CoerceStringToNumber.default(MaximumTakeCount).transform((value: number): number => value ? Math.min(Math.max(value, 0), MaximumTakeCount) : MaximumTakeCount)
});

export type SkipTakeInput = z.input<typeof SkipTakeSchema>;
export type SkipTakeData = z.infer<typeof SkipTakeSchema>;