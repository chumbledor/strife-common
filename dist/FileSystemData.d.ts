import z from 'zod';
import mongoose from 'mongoose';
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
    parentId: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
}, z.core.$strip>;
export type FileSystemObjectData = z.infer<typeof FileSystemObjectSchema>;
export declare const FileSystemDirectorySchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    parentId: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    fileSystemObjectType: z.ZodDefault<z.ZodLiteral<FileSystemObjectType.Directory>>;
    childrenIds: z.ZodArray<z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodCustom<mongoose.Types.ObjectId, mongoose.Types.ObjectId>]>, z.ZodTransform<string, string | mongoose.Types.ObjectId>>>;
}, z.core.$strip>;
export type FileSystemDirectoryData = z.infer<typeof FileSystemDirectorySchema>;
export declare const FileSystemFileSchema: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    parentId: z.ZodOptional<z.ZodString>;
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
export declare const AnyFileSystemObjectSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    parentId: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    fileSystemObjectType: z.ZodDefault<z.ZodLiteral<FileSystemObjectType.Directory>>;
    childrenIds: z.ZodArray<z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodCustom<mongoose.Types.ObjectId, mongoose.Types.ObjectId>]>, z.ZodTransform<string, string | mongoose.Types.ObjectId>>>;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    parentId: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    fileSystemObjectType: z.ZodDefault<z.ZodLiteral<FileSystemObjectType.File>>;
    size: z.ZodNumber;
    mimeType: z.ZodString;
}, z.core.$strip>], "fileSystemObjectType">;
export type AnyFileSystemObjectData = z.infer<typeof AnyFileSystemObjectSchema>;
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
export declare const GetFileSystemObjectsSchema: z.ZodObject<{
    parentId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type GetFileSystemObjectsData = z.infer<typeof GetFileSystemObjectsSchema>;
export declare const GetFileSystemDirectoriesSchema: z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
    parentId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodOptional<z.ZodObject<{
    ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>>>, z.ZodOptional<z.ZodObject<{
    skip: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodNumber>, z.ZodTransform<number | undefined, number | undefined>>>;
    take: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodNumber>, z.ZodTransform<number | undefined, number | undefined>>>;
}, z.core.$strip>>>;
export type GetFileSystemDirectoriesData = z.infer<typeof GetFileSystemDirectoriesSchema>;
export declare const GetFileSystemFilesSchema: z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
    parentId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    mimeType: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodOptional<z.ZodObject<{
    ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>>>, z.ZodOptional<z.ZodObject<{
    skip: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodNumber>, z.ZodTransform<number | undefined, number | undefined>>>;
    take: z.ZodOptional<z.ZodPipe<z.ZodOptional<z.ZodNumber>, z.ZodTransform<number | undefined, number | undefined>>>;
}, z.core.$strip>>>;
export type GetFileSystemFilesData = z.infer<typeof GetFileSystemFilesSchema>;
