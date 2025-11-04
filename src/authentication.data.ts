import { z } from 'zod';
import { AccountSchema, type AccountData } from './account.data.js';

export const AuthenticationSchema = z.object({
  accessToken: z.string().optional()
}).strip();

export type AuthenticationData = z.infer<typeof AuthenticationSchema>;

export const LoginAuthenticationSchema = z.object({
  email: z.string(),
  password: z.string()
});

export type LoginAuthenticationData = z.infer<typeof LoginAuthenticationSchema>;

export const UpdateAuthenticationSchema = z.object({
  password: z.string().optional()
});

export type UpdateAuthenticationData = z.infer<typeof UpdateAuthenticationSchema>;