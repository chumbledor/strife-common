import z from 'zod';
import { IdsSchema, SkipTakeSchema } from './BaseData.js';
import { UniqueSchema } from './UniqueData.js';
import { AuthenticationSchema } from './AuthenticationData.js';
export const AccountIdSchema = z.object({
    accountId: z.string()
});
export const AccountSchema = z.object({
    authentication: AuthenticationSchema.optional(),
    email: z.string(),
    username: z.string(),
    ...UniqueSchema.shape
}).strip();
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
//# sourceMappingURL=AccountData.js.map