import { z } from 'zod';
export declare enum FileSystemObjectType {
    Directory = 0,
    File = 1
}
export declare const FileSystemObjectIdSchema: z.ZodObject<{
    fileSystemObjectId: z.ZodString;
}, z.core.$strip>;
export type FileSystemObjectIdData = z.infer<typeof FileSystemObjectIdSchema>;
export declare const FileSystemObjectSchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    parentId: z.ZodString;
}, z.core.$strip>;
export type FileSystemObjectData = z.infer<typeof FileSystemObjectSchema>;
export declare const FileSystemDirectorySchema: z.ZodIntersection<z.ZodObject<{
    childrenIds: z.ZodArray<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    parentId: z.ZodString;
}, z.core.$strip>>;
export type FileSystemDirectoryData = z.infer<typeof FileSystemDirectorySchema>;
export declare const FileSystemFileSchema: z.ZodIntersection<z.ZodObject<{
    size: z.ZodNumber;
    mimeType: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    parentId: z.ZodString;
}, z.core.$strip>>;
export declare const CreateFileSystemObjectSchema: z.ZodObject<{
    type: typeof FileSystemObjectType;
    projectId: z.ZodString;
    parentId: z.ZodString;
    name: z.ZodString;
}, z.core.$strip>;
export type CreateFileSystemObjectData = z.infer<typeof CreateFileSystemObjectSchema>;
export declare const CreateFileSystemDirectorySchema: z.ZodObject<{
    projectId: z.ZodString;
    parentId: z.ZodString;
    name: z.ZodString;
    type: z.ZodDefault<z.ZodLiteral<FileSystemObjectType.Directory>>;
}, z.core.$strip>;
export type CreateFileSystemDirectoryData = z.infer<typeof CreateFileSystemDirectorySchema>;
export declare const CreateFileSystemFileSchema: z.ZodObject<{
    projectId: z.ZodString;
    parentId: z.ZodString;
    name: z.ZodString;
    type: z.ZodDefault<z.ZodLiteral<FileSystemObjectType.File>>;
    size: z.ZodNumber;
    mimeType: z.ZodString;
}, z.core.$strip>;
export type CreateFileSystemFileData = z.infer<typeof CreateFileSystemFileSchema>;
