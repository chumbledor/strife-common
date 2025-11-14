import z from 'zod';
export declare const ProjectIdSchema: z.ZodObject<{
    projectId: z.ZodString;
}, z.core.$strip>;
export type ProjectIdData = z.infer<typeof ProjectIdSchema>;
export declare const ProjectSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    rootFileSystemObjectId: z.ZodString;
}, z.core.$strip>;
export type ProjectData = z.infer<typeof ProjectSchema>;
export declare const CreateProjectSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateProjectData = z.infer<typeof CreateProjectSchema>;
export declare const GetProjectsSchema: z.ZodObject<{
    skip: z.ZodPipe<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, z.ZodTransform<number, number>>;
    take: z.ZodPipe<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, z.ZodTransform<number, number>>;
    ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
    account_id: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type GetProjectsData = z.infer<typeof GetProjectsSchema>;
export declare const UpdateProjectSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type UpdateProjectData = z.infer<typeof UpdateProjectSchema>;
