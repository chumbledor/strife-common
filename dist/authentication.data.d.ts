import { z } from 'zod';
export declare const AuthenticationSchema: z.ZodObject<{
    account_id: z.ZodPipe<z.ZodOptional<z.ZodIntersection<z.ZodObject<{
        email: z.ZodString;
        username: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        id: z.ZodString;
    }, z.core.$strip>>>, z.ZodTransform<string | undefined, ({
        email: string;
        username: string;
    } & {
        id: string;
    }) | undefined>>;
    accessToken: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AuthenticationData = z.infer<typeof AuthenticationSchema>;
export declare const LoginAuthenticationSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export type LoginAuthenticationData = z.infer<typeof LoginAuthenticationSchema>;
export declare const UpdateAuthenticationSchema: z.ZodObject<{
    password: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type UpdateAuthenticationData = z.infer<typeof UpdateAuthenticationSchema>;
