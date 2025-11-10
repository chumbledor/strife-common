import { z } from 'zod';
import { IdsSchema, SkipTakeSchema } from './BaseData.js';
import { UniqueSchema } from './UniqueData.js';
import { AuthenticationSchema } from './AuthenticationData.js';
export const AccountIdSchema = z.string();
export const AccountSchema = z.object({
    authentication: AuthenticationSchema.optional(),
    email: z.string(),
    username: z.string(),
}).strip().and(UniqueSchema.strip());
export const CreateAccountSchema = z.object({
    email: z.string(),
    username: z.string(),
    password: z.string()
});
export const GetAccountsSchema = z.object({
    username: z.string().optional()
}).and(IdsSchema.optional()).and(SkipTakeSchema.optional());
export const UpdateAccountSchema = z.object({
    email: z.string().optional(),
    username: z.string().optional()
});
//# sourceMappingURL=AccountData.js.map