import z from 'zod';
import { IdsSchema, SkipTakeSchema } from './Base.data.js';
import { FileSystemSchema } from './FileSystem.data.js';
import { UniqueSchema } from './Unique.data.js';
export const ProjectIdSchema = z.object({
    projectId: z.string()
});
export const ProjectSchema = z.object({
    fileSystem: FileSystemSchema,
    name: z.string(),
    description: z.string().optional(),
    ...UniqueSchema.shape
}).strip();
export const CreateProjectSchema = z.object({
    name: z.string(),
    description: z.string().optional()
});
export const GetProjectsSchema = z.object({
    accountId: z.string().optional(),
    name: z.string().optional(),
    ...IdsSchema.shape,
    ...SkipTakeSchema.shape
});
export const UpdateProjectSchema = z.object({
    name: z.string().optional(),
    description: z.string().optional()
});
//# sourceMappingURL=Project.data.js.map