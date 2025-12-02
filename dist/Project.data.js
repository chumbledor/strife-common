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
export const IdSchema = z.object({
    projectId: z.string()
});
export const CreateSchema = z.object({
    name: z.string(),
    description: z.string().optional()
});
export const GetSchema = z.object({
    accountId: z.string().optional(),
    name: z.string().optional(),
    ...Base.IdsSchema.shape,
    ...Base.SkipTakeSchema.shape
});
export const UpdateSchema = z.object({
    name: z.string().optional(),
    description: z.string().optional()
});
//# sourceMappingURL=Project.data.js.map