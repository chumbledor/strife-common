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

export type AccountData = z.infer<typeof AccountSchema>;

export const AccountIdSchema = z.object({
  accountId: z.string()
});

export type AccountIdData = z.infer<typeof AccountIdSchema>;

export const CreateAccountSchema = z.object({
  email: z.string(),
  username: z.string(),
  password: z.string()
});

export type CreateAccountData = z.infer<typeof CreateAccountSchema>;

export const GetAccountsSchema = z.object({
  username: z.string().optional(),
  ...IdsSchema.shape,
  ...SkipTakeSchema.shape
});

export type GetAccountsData = z.infer<typeof GetAccountsSchema>;

export const UpdateAccountSchema = z.object({
  email: z.string().optional(),
  username: z.string().optional()
});

export type UpdateAccountsData = z.infer<typeof UpdateAccountSchema>;