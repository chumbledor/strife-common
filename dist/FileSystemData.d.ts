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
    type: z.ZodEnum<typeof FileSystemObjectType>;
    id: z.ZodString;
    projectId: z.ZodString;
}, z.core.$strip>;
export type FileSystemObjectData = z.infer<typeof FileSystemObjectSchema>;
export declare const FileSystemFileSchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    type: z.ZodDefault<z.ZodLiteral<FileSystemObjectType.File>>;
    size: z.ZodNumber;
    mimeType: z.ZodString;
}, z.core.$strip>;
export type FileSystemFileData = z.infer<typeof FileSystemFileSchema>;
export declare const FileSystemDirectorySchema: z.ZodType<{
    type: FileSystemObjectType.Directory;
    id: string;
    projectId: string;
    children: (FileSystemDirectoryData | FileSystemFileData)[];
}>;
export type FileSystemDirectoryData = z.infer<typeof FileSystemDirectorySchema>;
export declare const CreateFileSystemObjectSchema: z.ZodObject<{
    type: z.ZodEnum<typeof FileSystemObjectType>;
    name: z.ZodString;
}, z.core.$strip>;
export type CreateFileSystemObjectData = z.infer<typeof CreateFileSystemObjectSchema>;
export declare const CreateFileSystemDirectorySchema: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodDefault<z.ZodLiteral<FileSystemObjectType.Directory>>;
}, z.core.$strip>;
export type CreateFileSystemDirectoryData = z.infer<typeof CreateFileSystemDirectorySchema>;
export declare const CreateFileSystemFileSchema: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodDefault<z.ZodLiteral<FileSystemObjectType.File>>;
    size: z.ZodNumber;
    mimeType: z.ZodString;
}, z.core.$strip>;
export type CreateFileSystemFileData = z.infer<typeof CreateFileSystemFileSchema>;
