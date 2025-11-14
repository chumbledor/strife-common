import z from 'zod';
import { IdsSchema, SkipTakeSchema } from './BaseData.js';
import { UniqueSchema } from './UniqueData.js';

export const ProjectIdSchema = z.object({
  projectId: z.string()
});

export type ProjectIdData = z.infer<typeof ProjectIdSchema>;

export const ProjectSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  rootFileSystemObjectId: z.string(),
  ...UniqueSchema.shape
}).strip();

export type ProjectData = z.infer<typeof ProjectSchema>;

export const CreateProjectSchema = z.object({
  name: z.string(),
  description: z.string().optional()
});

export type CreateProjectData = z.infer<typeof CreateProjectSchema>;

export const GetProjectsSchema = z.object({
  account_id: z.string().optional(),
  name: z.string().optional(),
  ...IdsSchema.shape,
  ...SkipTakeSchema.shape
});

export type GetProjectsData = z.infer<typeof GetProjectsSchema>;

export const UpdateProjectSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional()
});

export type UpdateProjectData = z.infer<typeof UpdateProjectSchema>;