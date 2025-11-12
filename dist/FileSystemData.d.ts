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
    id: z.ZodString;
    projectId: z.ZodString;
    parentId: z.ZodString;
    childrenIds: z.ZodArray<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    parentId: z.ZodString;
}, z.core.$strip>>;
export type FileSystemDirectoryData = z.infer<typeof FileSystemDirectorySchema>;
export declare const FileSystemFileSchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    parentId: z.ZodString;
    size: z.ZodNumber;
    mimeType: z.ZodString;
}, z.core.$strip>;
export type FileSystemFileData = z.infer<typeof FileSystemFileSchema>;
export declare const CreateFileSystemObjectSchema: z.ZodObject<{
    type: z.ZodEnum<typeof FileSystemObjectType>;
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
