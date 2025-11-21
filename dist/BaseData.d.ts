import z from 'zod';
export declare const IdSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export type IdData = z.infer<typeof IdSchema>;
export declare const IdsSchema: z.ZodObject<{
    ids: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>, z.ZodTransform<string[] | undefined, string | string[] | undefined>>;
}, z.core.$strip>;
export type IdsData = z.infer<typeof IdsSchema>;
export declare const SkipTakeSchema: z.ZodObject<{
    skip: z.ZodPipe<z.ZodDefault<z.ZodPipe<z.ZodTransform<number | undefined, string | number | undefined>, z.ZodNumber>>, z.ZodTransform<number, number>>;
    take: z.ZodPipe<z.ZodDefault<z.ZodPipe<z.ZodTransform<number | undefined, string | number | undefined>, z.ZodNumber>>, z.ZodTransform<number, number>>;
}, z.core.$strip>;
export type SkipTakeData = z.infer<typeof SkipTakeSchema>;
