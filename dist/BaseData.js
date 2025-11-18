import z from 'zod';
export const IdSchema = z.object({
    id: z.string()
});
export const IdsSchema = z.object({
    ids: z
        .union([z.string(), z.string().array()])
        .optional()
        .transform((value) => value
        ? Array.isArray(value)
            ? value
            : [value]
        : undefined)
});
const MaximumTakeCount = 100;
export const SkipTakeSchema = z.object({
    skip: z.preprocess((value) => Number(value), z.number()).optional().default(0).transform((value) => value ? Math.max(value, 0) : 0),
    take: z.preprocess((value) => Number(value), z.number()).optional().default(MaximumTakeCount).transform((value) => value ? Math.min(Math.max(value, 0), MaximumTakeCount) : MaximumTakeCount)
});
//# sourceMappingURL=BaseData.js.map