import z from 'zod';
import * as Authentication from './Authentication.data.js';
import * as Base from './Base.data.js';
import * as Unique from './Unique.data.js';
export const Schema = z.object({
    authentication: Authentication.Schema.optional(),
    email: z.string(),
    username: z.string(),
    ...Base.Schema.shape,
    ...Unique.Schema.shape
}).strip();
export const IdSchema = z.object({
    accountId: z.string()
});
export const CreateSchema = z.object({
    email: z.string(),
    username: z.string(),
    password: z.string()
});
export const GetSchema = z.object({
    username: z.string().optional(),
    ...Base.IdsSchema.shape,
    ...Base.SkipTakeSchema.shape
});
export const UpdateSchema = z.object({
    email: z.string().optional(),
    username: z.string().optional()
});
//# sourceMappingURL=Account.data.js.map