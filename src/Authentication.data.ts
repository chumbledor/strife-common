import z from 'zod';
import * as Base from './Base.data.js';

export const Schema = z.object({
  accessToken: z.string().optional(),
  ...Base.Schema.shape,
}).strip();

export type Data = z.infer<typeof Schema>;

export const LoginSchema = z.object({
  email: z.string(),
  password: z.string()
});

export type LoginData = z.infer<typeof LoginSchema>;

export const UpdateSchema = z.object({
  password: z.string().optional()
});

export type UpdateData = z.infer<typeof UpdateSchema>;