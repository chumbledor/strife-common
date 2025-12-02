import z from 'zod';
import * as Base from './Base.data.js';
import * as FileSystem from './FileSystem.data.js';
import * as Unique from './Unique.data.js';

export const Schema = z.object({
  fileSystem: FileSystem.Schema,
  name: z.string(),
  description: z.string().optional(),
  ...Unique.Schema.shape
}).strip();

export type Data = z.infer<typeof Schema>;

export const IdSchema = z.object({
  projectId: z.string()
});

export type IdData = z.infer<typeof IdSchema>;

export const CreateSchema = z.object({
  name: z.string(),
  description: z.string().optional()
});

export type CreateData = z.infer<typeof CreateSchema>;

export const GetSchema = z.object({
  accountId: z.string().optional(),
  name: z.string().optional(),
  ...Base.IdsSchema.shape,
  ...Base.SkipTakeSchema.shape
});

export type GetData = z.infer<typeof GetSchema>;

export const UpdateSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional()
});

export type UpdateData = z.infer<typeof UpdateSchema>;