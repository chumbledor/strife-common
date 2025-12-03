import z from 'zod';
export declare const Schema: z.ZodObject<{
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
export type Data = z.infer<typeof Schema>;
