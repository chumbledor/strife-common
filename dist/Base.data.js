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
            : value.split(',')
        : undefined)
});
const MinimumSkipCount = 0;
const MaximumTakeCount = 100;
const CoerceStringToNumber = z.preprocess((value) => {
    if (!value)
        return undefined;
    const number = Number(value);
    return !Number.isNaN(number)
        ? number
        : undefined;
}, z.number());
export const SkipTakeSchema = z.object({
    skip: CoerceStringToNumber.default(MinimumSkipCount).transform((value) => value ? Math.max(value, MinimumSkipCount) : MinimumSkipCount),
    take: CoerceStringToNumber.default(MaximumTakeCount).transform((value) => value ? Math.min(Math.max(value, 0), MaximumTakeCount) : MaximumTakeCount)
});
//# sourceMappingURL=Base.data.js.map