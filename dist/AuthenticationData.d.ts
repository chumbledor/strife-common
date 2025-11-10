import { z } from 'zod';
export declare const AuthenticationSchema: z.ZodObject<{
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
