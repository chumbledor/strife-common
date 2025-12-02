import z from 'zod';
export declare const Schema: z.ZodObject<{
    accessToken: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Data = z.infer<typeof Schema>;
export declare const LoginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export type LoginData = z.infer<typeof LoginSchema>;
export declare const UpdateSchema: z.ZodObject<{
    password: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type UpdateData = z.infer<typeof UpdateSchema>;
