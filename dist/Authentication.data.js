import z from 'zod';
export const Schema = z.object({
    accessToken: z.string().optional()
}).strip();
export const LoginSchema = z.object({
    email: z.string(),
    password: z.string()
});
export const UpdateSchema = z.object({
    password: z.string().optional()
});
//# sourceMappingURL=Authentication.data.js.map