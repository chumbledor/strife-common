import z from 'zod';
import * as Base from './Base.data.js';
export const Schema = z.object({
    accessToken: z.string().optional(),
    ...Base.Schema.shape,
}).strip();
export const LoginSchema = z.object({
    email: z.string(),
    password: z.string()
});
export const UpdateSchema = z.object({
    password: z.string().optional()
});
//# sourceMappingURL=Authentication.data.js.map