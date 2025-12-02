import z from 'zod';
export declare const Schema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export type Data = z.infer<typeof Schema>;
