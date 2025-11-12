import { z } from 'zod';
export declare const FileSystemObjectIdSchema: z.ZodObject<{
    fileSystemObjectId: z.ZodString;
}, z.core.$strip>;
export type FileSystemObjectIdData = z.infer<typeof FileSystemObjectIdSchema>;
export declare const FileSystemObjectSchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    parentId: z.ZodString;
}, z.core.$strip>;
export declare const CreateFileSystemObjectSchema: z.ZodObject<{
    projectId: z.ZodString;
    parentId: z.ZodString;
    name: z.ZodString;
}, z.core.$strip>;
export type CreateFileSystemObjectData = z.infer<typeof CreateFileSystemObjectSchema>;
export declare const CreateFileSystemDirectorySchema: z.ZodObject<{
    projectId: z.ZodString;
    parentId: z.ZodString;
    name: z.ZodString;
}, z.core.$strip>;
export type CreateFileSystemDirectoryData = z.infer<typeof CreateFileSystemDirectorySchema>;
export declare const CreateFileSystemFileSchema: z.ZodIntersection<z.ZodObject<{
    size: z.ZodNumber;
    mimeType: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    projectId: z.ZodString;
    parentId: z.ZodString;
    name: z.ZodString;
}, z.core.$strip>>;
export type CreateFileSystemFileData = z.infer<typeof CreateFileSystemFileSchema>;
