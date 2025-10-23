import { z } from 'zod';
export declare const IdSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export type IdData = z.infer<typeof IdSchema>;
export declare const IdsSchema: z.ZodObject<{
    ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type IdsData = z.infer<typeof IdsSchema>;
export declare const SkipTakeSchema: z.ZodObject<{
    skip: z.ZodPipe<z.ZodOptional<z.ZodNumber>, z.ZodTransform<number | undefined, number | undefined>>;
    take: z.ZodPipe<z.ZodOptional<z.ZodNumber>, z.ZodTransform<number | undefined, number | undefined>>;
}, z.core.$strip>;
export type SkipTakeData = z.infer<typeof SkipTakeSchema>;
