import z from 'zod';
import * as Authentication from './Authentication.data.js';
import * as Base from './Base.data.js';
import * as Unique from './Unique.data.js';

export const Schema = z.object({
  authentication: Authentication.Schema.optional(),
  email: z.string(),
  username: z.string(),
  ...Unique.Schema.shape
}).strip();

export type Data = z.infer<typeof Schema>;

export const IdSchema = z.object({
  accountId: z.string()
});

export type IdData = z.infer<typeof IdSchema>;

export const CreateSchema = z.object({
  email: z.string(),
  username: z.string(),
  password: z.string()
});

export type CreateData = z.infer<typeof CreateSchema>;

export const GetSchema = z.object({
  username: z.string().optional(),
  ...Base.IdsSchema.shape,
  ...Base.SkipTakeSchema.shape
});

export type GetData = z.infer<typeof GetSchema>;

export const UpdateSchema = z.object({
  email: z.string().optional(),
  username: z.string().optional()
});

export type UpdateData = z.infer<typeof UpdateSchema>;