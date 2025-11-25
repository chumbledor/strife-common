import mongoose from 'mongoose';
import z from 'zod';
export declare const FileSystemIdSchema: z.ZodObject<{
    fileSystemId: z.ZodString;
}, z.core.$strip>;
export type FileSystemIdData = z.infer<typeof FileSystemIdSchema>;
export declare const FileSystemSchema: z.ZodObject<{
    id: z.ZodString;
    rootFileSystemObjectId: z.ZodString;
}, z.core.$strip>;
export type FileSystemData = z.infer<typeof FileSystemSchema>;
export declare enum FileSystemObjectType {
    Object = "FileSystemObject",
    Directory = "FileSystemDirectory",
    File = "FileSystemFile"
}
export declare const FileSystemObjectIdSchema: z.ZodObject<{
    fileSystemObjectId: z.ZodString;
}, z.core.$strip>;
export type FileSystemObjectIdData = z.infer<typeof FileSystemObjectIdSchema>;
export declare const FileSystemObjectSchema: z.ZodObject<{
    id: z.ZodString;
    type: z.ZodEnum<typeof FileSystemObjectType>;
    fileSystemId: z.ZodString;
    parentId: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodCustom<mongoose.Types.ObjectId, mongoose.Types.ObjectId>]>, z.ZodTransform<string, string | mongoose.Types.ObjectId>>>;
    name: z.ZodString;
}, z.core.$strip>;
export type FileSystemObjectData = z.infer<typeof FileSystemObjectSchema>;
export declare const FileSystemDirectorySchema: z.ZodObject<{
    id: z.ZodString;
    fileSystemId: z.ZodString;
    parentId: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodCustom<mongoose.Types.ObjectId, mongoose.Types.ObjectId>]>, z.ZodTransform<string, string | mongoose.Types.ObjectId>>>;
    name: z.ZodString;
    type: z.ZodDefault<z.ZodLiteral<FileSystemObjectType.Directory>>;
    childrenIds: z.ZodArray<z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodCustom<mongoose.Types.ObjectId, mongoose.Types.ObjectId>]>, z.ZodTransform<string, string | mongoose.Types.ObjectId>>>;
}, z.core.$strip>;
export type FileSystemDirectoryData = z.infer<typeof FileSystemDirectorySchema>;
export declare const FileSystemFileSchema: z.ZodObject<{
    id: z.ZodString;
    fileSystemId: z.ZodString;
    parentId: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodCustom<mongoose.Types.ObjectId, mongoose.Types.ObjectId>]>, z.ZodTransform<string, string | mongoose.Types.ObjectId>>>;
    name: z.ZodString;
    type: z.ZodDefault<z.ZodLiteral<FileSystemObjectType.File>>;
    size: z.ZodNumber;
    mimeType: z.ZodString;
}, z.core.$strip>;
export type FileSystemFileData = z.infer<typeof FileSystemFileSchema>;
export declare const AnyFileSystemObjectSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    id: z.ZodString;
    fileSystemId: z.ZodString;
    parentId: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodCustom<mongoose.Types.ObjectId, mongoose.Types.ObjectId>]>, z.ZodTransform<string, string | mongoose.Types.ObjectId>>>;
    name: z.ZodString;
    type: z.ZodDefault<z.ZodLiteral<FileSystemObjectType.Directory>>;
    childrenIds: z.ZodArray<z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodCustom<mongoose.Types.ObjectId, mongoose.Types.ObjectId>]>, z.ZodTransform<string, string | mongoose.Types.ObjectId>>>;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodString;
    fileSystemId: z.ZodString;
    parentId: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodCustom<mongoose.Types.ObjectId, mongoose.Types.ObjectId>]>, z.ZodTransform<string, string | mongoose.Types.ObjectId>>>;
    name: z.ZodString;
    type: z.ZodDefault<z.ZodLiteral<FileSystemObjectType.File>>;
    size: z.ZodNumber;
    mimeType: z.ZodString;
}, z.core.$strip>], "type">;
export type AnyFileSystemObjectData = z.infer<typeof AnyFileSystemObjectSchema>;
export declare const CreateFileSystemObjectSchema: z.ZodObject<{
    type: z.ZodEnum<typeof FileSystemObjectType>;
    parentId: z.ZodString;
    name: z.ZodString;
}, z.core.$strip>;
export type CreateFileSystemObjectData = z.infer<typeof CreateFileSystemObjectSchema>;
export declare const CreateFileSystemDirectorySchema: z.ZodObject<{
    parentId: z.ZodString;
    name: z.ZodString;
    type: z.ZodDefault<z.ZodLiteral<FileSystemObjectType.Directory>>;
}, z.core.$strip>;
export type CreateFileSystemDirectoryData = z.infer<typeof CreateFileSystemDirectorySchema>;
export declare const CreateFileSystemFileSchema: z.ZodObject<{
    parentId: z.ZodString;
    name: z.ZodString;
    type: z.ZodDefault<z.ZodLiteral<FileSystemObjectType.File>>;
    size: z.ZodNumber;
    mimeType: z.ZodString;
}, z.core.$strip>;
export type CreateFileSystemFileData = z.infer<typeof CreateFileSystemFileSchema>;
export declare const AnyCreateFileSystemObjectSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    parentId: z.ZodString;
    name: z.ZodString;
    type: z.ZodDefault<z.ZodLiteral<FileSystemObjectType.Directory>>;
}, z.core.$strip>, z.ZodObject<{
    parentId: z.ZodString;
    name: z.ZodString;
    type: z.ZodDefault<z.ZodLiteral<FileSystemObjectType.File>>;
    size: z.ZodNumber;
    mimeType: z.ZodString;
}, z.core.$strip>], "type">;
export type AnyCreateFileSystemObjectData = z.infer<typeof AnyCreateFileSystemObjectSchema>;
export declare const GetFileSystemObjectsSchema: z.ZodObject<{
    skip: z.ZodPipe<z.ZodDefault<z.ZodPipe<z.ZodTransform<number | undefined, string | number | undefined>, z.ZodNumber>>, z.ZodTransform<number, number>>;
    take: z.ZodPipe<z.ZodDefault<z.ZodPipe<z.ZodTransform<number | undefined, string | number | undefined>, z.ZodNumber>>, z.ZodTransform<number, number>>;
    ids: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>, z.ZodTransform<string[] | undefined, string | string[] | undefined>>;
    parentId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type GetFileSystemObjectsData = z.infer<typeof GetFileSystemObjectsSchema>;
export declare const GetFileSystemDirectoriesSchema: z.ZodObject<{
    skip: z.ZodPipe<z.ZodDefault<z.ZodPipe<z.ZodTransform<number | undefined, string | number | undefined>, z.ZodNumber>>, z.ZodTransform<number, number>>;
    take: z.ZodPipe<z.ZodDefault<z.ZodPipe<z.ZodTransform<number | undefined, string | number | undefined>, z.ZodNumber>>, z.ZodTransform<number, number>>;
    ids: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>, z.ZodTransform<string[] | undefined, string | string[] | undefined>>;
    parentId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type GetFileSystemDirectoriesData = z.infer<typeof GetFileSystemDirectoriesSchema>;
export declare const GetFileSystemFilesSchema: z.ZodObject<{
    skip: z.ZodPipe<z.ZodDefault<z.ZodPipe<z.ZodTransform<number | undefined, string | number | undefined>, z.ZodNumber>>, z.ZodTransform<number, number>>;
    take: z.ZodPipe<z.ZodDefault<z.ZodPipe<z.ZodTransform<number | undefined, string | number | undefined>, z.ZodNumber>>, z.ZodTransform<number, number>>;
    ids: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>, z.ZodTransform<string[] | undefined, string | string[] | undefined>>;
    parentId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    mimeType: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type GetFileSystemFilesData = z.infer<typeof GetFileSystemFilesSchema>;
export declare const AnyGetFileSystemObjectsSchema: z.ZodUnion<readonly [z.ZodObject<{
    skip: z.ZodPipe<z.ZodDefault<z.ZodPipe<z.ZodTransform<number | undefined, string | number | undefined>, z.ZodNumber>>, z.ZodTransform<number, number>>;
    take: z.ZodPipe<z.ZodDefault<z.ZodPipe<z.ZodTransform<number | undefined, string | number | undefined>, z.ZodNumber>>, z.ZodTransform<number, number>>;
    ids: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>, z.ZodTransform<string[] | undefined, string | string[] | undefined>>;
    parentId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    skip: z.ZodPipe<z.ZodDefault<z.ZodPipe<z.ZodTransform<number | undefined, string | number | undefined>, z.ZodNumber>>, z.ZodTransform<number, number>>;
    take: z.ZodPipe<z.ZodDefault<z.ZodPipe<z.ZodTransform<number | undefined, string | number | undefined>, z.ZodNumber>>, z.ZodTransform<number, number>>;
    ids: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>, z.ZodTransform<string[] | undefined, string | string[] | undefined>>;
    parentId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    mimeType: z.ZodOptional<z.ZodString>;
}, z.core.$strip>]>;
export type AnyGetFileSystemObjectsData = z.infer<typeof AnyGetFileSystemObjectsSchema>;
