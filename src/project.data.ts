import { z } from 'zod';
import { IdsSchema, SkipTakeSchema } from './base.data.js';
import { UniqueSchema } from './unique.data.js';

export const ProjectIdSchema = z.string();

export type ProjectIdData = z.infer<typeof ProjectIdSchema>;

export const ProjectSchema = z.object({
  account_id: z.string().optional(),
  name: z.string(),
  description: z.string().optional()
}).strip().and(UniqueSchema.strip());

export type ProjectData = z.infer<typeof ProjectSchema>;

export const CreateProjectSchema = z.object({
  name: z.string(),
  description: z.string().optional()
});

export type CreateProjectData = z.infer<typeof CreateProjectSchema>;

export const GetProjectsSchema = z.object({
  account_id: z.string().optional(),
  name: z.string().optional()
}).and(IdsSchema.optional()).and(SkipTakeSchema.optional());

export type GetProjectsData = z.infer<typeof GetProjectsSchema>;

export const UpdateProjectSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional()
});

export type UpdateProjectData = z.infer<typeof UpdateProjectSchema>;