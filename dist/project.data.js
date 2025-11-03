import { z } from 'zod';
import { AccountSchema } from './account.data.js';
import { IdsSchema, SkipTakeSchema } from './base.data.js';
import { UniqueSchema } from './unique.data.js';
export const ProjectIdSchema = z.string();
export const ProjectSchema = z.object({
    account: AccountSchema.optional().transform((accountData) => ({ account_id: accountData?.id })),
    name: z.string(),
    description: z.string().optional()
}).strip().and(UniqueSchema.strip());
export const CreateProjectSchema = z.object({
    name: z.string(),
    description: z.string().optional()
});
export const GetProjectsSchema = z.object({
    account_id: z.string().optional(),
    name: z.string().optional()
}).and(IdsSchema.optional()).and(SkipTakeSchema.optional());
export const UpdateProjectSchema = z.object({
    name: z.string().optional(),
    description: z.string().optional()
});
//# sourceMappingURL=project.data.js.map