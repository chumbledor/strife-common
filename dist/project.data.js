import { z } from 'zod';
import { IdsSchema, SkipTakeSchema } from '../src/base.data.js';
import { UniqueSchema } from './unique.data.js';
export const ProjectIdSchema = z.string();
export const ProjectSchema = z.object({
    account_id: z.string().optional(),
    name: z.string(),
    description: z.string().optional()
}).and(UniqueSchema);
export const CreateProjectSchema = z.object({
    name: z.string(),
    description: z.string().optional()
});
export const GetProjectsSchema = z.object({
    name: z.string().optional()
}).and(IdsSchema).and(SkipTakeSchema);
export const UpdateProjectSchema = z.object({
    name: z.string().optional(),
    description: z.string().optional()
});
//# sourceMappingURL=project.data.js.map