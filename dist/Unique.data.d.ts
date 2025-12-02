import z from 'zod';
export declare const UniqueSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export type UniqueData = z.infer<typeof UniqueSchema>;
