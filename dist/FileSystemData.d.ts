import { z } from 'zod';
export declare enum FileSystemObjectType {
    Directory = "directory",
    File = "file"
}
export declare const FileSystemObjectIdSchema: z.ZodObject<{
    fileSystemObjectId: z.ZodString;
}, z.core.$strip>;
export type FileSystemObjectIdData = z.infer<typeof FileSystemObjectIdSchema>;
export declare const FileSystemObjectSchema: z.ZodObject<{
    fileSystemObjectType: z.ZodEnum<typeof FileSystemObjectType>;
    id: z.ZodString;
    projectId: z.ZodString;
    name: z.ZodString;
}, z.core.$strip>;
export declare const FileSystemDirectorySchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    name: z.ZodString;
    fileSystemObjectType: z.ZodDefault<z.ZodLiteral<FileSystemObjectType.Directory>>;
    childrenIds: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type FileSystemDirectoryData = z.infer<typeof FileSystemDirectorySchema>;
export type FileSystemObjectData = z.infer<typeof FileSystemObjectSchema>;
export declare const FileSystemFileSchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    name: z.ZodString;
    fileSystemObjectType: z.ZodDefault<z.ZodLiteral<FileSystemObjectType.File>>;
    size: z.ZodNumber;
    mimeType: z.ZodString;
}, z.core.$strip>;
export type FileSystemFileData = z.infer<typeof FileSystemFileSchema>;
export declare const CreateFileSystemObjectSchema: z.ZodObject<{
    fileSystemObjectType: z.ZodEnum<typeof FileSystemObjectType>;
    name: z.ZodString;
}, z.core.$strip>;
export type CreateFileSystemObjectData = z.infer<typeof CreateFileSystemObjectSchema>;
export declare const CreateFileSystemDirectorySchema: z.ZodObject<{
    name: z.ZodString;
    fileSystemObjectType: z.ZodDefault<z.ZodLiteral<FileSystemObjectType.Directory>>;
}, z.core.$strip>;
export type CreateFileSystemDirectoryData = z.infer<typeof CreateFileSystemDirectorySchema>;
export declare const CreateFileSystemFileSchema: z.ZodObject<{
    name: z.ZodString;
    fileSystemObjectType: z.ZodDefault<z.ZodLiteral<FileSystemObjectType.File>>;
    size: z.ZodNumber;
    mimeType: z.ZodString;
}, z.core.$strip>;
export type CreateFileSystemFileData = z.infer<typeof CreateFileSystemFileSchema>;
