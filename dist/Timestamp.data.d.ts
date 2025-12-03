import z from 'zod';
export declare const Schema: z.ZodObject<{
    createdAt: z.ZodPipe<z.ZodTransform<Date, string | Date | undefined>, z.ZodDate>;
    updatedAt: z.ZodPipe<z.ZodTransform<Date, string | Date | undefined>, z.ZodDate>;
}, z.core.$strip>;
export type Data = z.infer<typeof Schema>;
