import { z } from 'zod';
import { IdsSchema, SkipTakeSchema } from './base.data.js';
import { UniqueSchema } from './unique.data.js';
export const AccountIdSchema = z.string();
export const AccountSchema = z.object({
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
//# sourceMappingURL=account.data.js.map