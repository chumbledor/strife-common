import { z } from 'zod';

export const AuthenticationSchema = z.object({
  account_id: z.string().optional(),
  accessToken: z.string().optional(),
  refreshToken: z.string().optional()
});

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