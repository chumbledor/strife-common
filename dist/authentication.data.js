import { z } from 'zod';
import { AccountSchema } from './account.data.js';
export const AuthenticationSchema = z.object({
    account: AccountSchema.optional().transform((accountData) => ({ account_id: accountData?.id })),
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