import { z } from 'zod';
export const IdSchema = z.object({
    id: z.string()
});
export const IdsSchema = z.object({
    ids: z.string().array().optional()
});
const MaximumTakeCount = 100;
export const SkipTakeSchema = z.object({
    skip: z.number().optional().transform((value) => value ? Math.max(value, 0) : value),
    take: z.number().optional().transform((value) => value ? Math.min(Math.max(value, 0), MaximumTakeCount) : value)
});
//# sourceMappingURL=base.data.js.map