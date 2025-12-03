import z from 'zod';
export declare const Schema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodTransform<Date, string | Date>;
    updatedAt: z.ZodTransform<Date, string | Date>;
    fileSystem: z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodTransform<Date, string | Date>;
        updatedAt: z.ZodTransform<Date, string | Date>;
        rootFileSystemObjectId: z.ZodString;
    }, z.core.$strip>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Data = z.infer<typeof Schema>;
export declare const IdSchema: z.ZodObject<{
    projectId: z.ZodString;
}, z.core.$strip>;
export type IdData = z.infer<typeof IdSchema>;
export declare const CreateSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateData = z.infer<typeof CreateSchema>;
export declare const GetSchema: z.ZodObject<{
    skip: z.ZodPipe<z.ZodDefault<z.ZodPipe<z.ZodTransform<number | undefined, string | number | undefined>, z.ZodNumber>>, z.ZodTransform<number, number>>;
    take: z.ZodPipe<z.ZodDefault<z.ZodPipe<z.ZodTransform<number | undefined, string | number | undefined>, z.ZodNumber>>, z.ZodTransform<number, number>>;
    ids: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>, z.ZodTransform<string[] | undefined, string | string[] | undefined>>;
    accountId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type GetData = z.infer<typeof GetSchema>;
export declare const UpdateSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type UpdateData = z.infer<typeof UpdateSchema>;
