import z from 'zod';
import { AuthenticationSchema } from './Authentication.data.js';
import { IdsSchema, SkipTakeSchema } from './Base.data.js';
import { UniqueSchema } from './Unique.data.js';
export const AccountSchema = z.object({
    authentication: AuthenticationSchema.optional(),
    email: z.string(),
    username: z.string(),
    ...UniqueSchema.shape
}).strip();
export const AccountIdSchema = z.object({
    accountId: z.string()
});
export const CreateAccountSchema = z.object({
    email: z.string(),
    username: z.string(),
    password: z.string()
});
export const GetAccountsSchema = z.object({
    username: z.string().optional(),
    ...IdsSchema.shape,
    ...SkipTakeSchema.shape
});
export const UpdateAccountSchema = z.object({
    email: z.string().optional(),
    username: z.string().optional()
});
//# sourceMappingURL=Account.data.js.map