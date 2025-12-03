import z from 'zod';
export declare const Schema: z.ZodObject<{
    createdAt: z.ZodTransform<Date, string | Date>;
    updatedAt: z.ZodTransform<Date, string | Date>;
}, z.core.$strip>;
export type Input = z.input<typeof Schema>;
export type Data = z.infer<typeof Schema>;
