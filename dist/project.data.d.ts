import { z } from 'zod';
export declare const ProjectIdSchema: z.ZodString;
export type ProjectIdData = z.infer<typeof ProjectIdSchema>;
export declare const ProjectSchema: z.ZodIntersection<z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>>;
export type ProjectData = z.infer<typeof ProjectSchema>;
export declare const CreateProjectSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateProjectData = z.infer<typeof CreateProjectSchema>;
export declare const GetProjectsSchema: z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
    account_id: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodOptional<z.ZodObject<{
    ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>>>, z.ZodOptional<z.ZodObject<{
    skip: z.ZodOptional<z.ZodNumber>;
    take: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>>>;
export type GetProjectsData = z.infer<typeof GetProjectsSchema>;
export declare const UpdateProjectSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type UpdateProjectData = z.infer<typeof UpdateProjectSchema>;
