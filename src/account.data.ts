import { z } from 'zod';
import { IdsSchema, SkipTakeSchema } from './base.data.js';
import { UniqueSchema } from './unique.data.js';
import { AuthenticationSchema } from './authentication.data.js';

export const AccountIdSchema = z.string();

export type AccountIdData = z.infer<typeof AccountIdSchema>;

export const AccountSchema = z.object({
  authentication: AuthenticationSchema.optional(),
  email: z.string(),
  username: z.string(),
}).strip().and(UniqueSchema.strip());

export type AccountData = z.infer<typeof AccountSchema>;

export const CreateAccountSchema = z.object({
  email: z.string(),
  username: z.string(),
  password: z.string()
});

export type CreateAccountData = z.infer<typeof CreateAccountSchema>;

export const GetAccountsSchema = z.object({
  username: z.string().optional()
}).and(IdsSchema.optional()).and(SkipTakeSchema.optional());

export type GetAccountsData = z.infer<typeof GetAccountsSchema>;

export const UpdateAccountSchema = z.object({
  email: z.string().optional(),
  username: z.string().optional()
});

export type UpdateAccountData = z.infer<typeof UpdateAccountSchema>;