import z from 'zod';
import { IdsSchema, SkipTakeSchema } from './BaseData.js';
import { UniqueSchema } from './UniqueData.js';
export const ProjectIdSchema = z.object({
    projectId: z.string()
});
export const ProjectSchema = z.object({
    name: z.string(),
    description: z.string().optional(),
    rootFileSystemObjectId: z.string(),
    ...UniqueSchema.shape
}).strip();
export const CreateProjectSchema = z.object({
    name: z.string(),
    description: z.string().optional()
});
export const GetProjectsSchema = z.object({
    account_id: z.string().optional(),
    name: z.string().optional(),
    ...IdsSchema.shape,
    ...SkipTakeSchema.shape
});
export const UpdateProjectSchema = z.object({
    name: z.string().optional(),
    description: z.string().optional()
});
//# sourceMappingURL=ProjectData.js.map