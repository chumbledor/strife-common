import { z } from 'zod';
export const AuthenticationSchema = z.object({
    accessToken: z.string().optional()
}).strip();
export const LoginAuthenticationSchema = z.object({
    email: z.string(),
    password: z.string()
});
export const UpdateAuthenticationSchema = z.object({
    password: z.string().optional()
});
//# sourceMappingURL=authentication.data.js.map