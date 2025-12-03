import mongoose from 'mongoose';
import z from 'zod';
export declare const ObjectDiscriminator = "type";
export declare enum ObjectType {
    Unknown = "FileSystemObject",
    Directory = "FileSystemDirectory",
    File = "FileSystemFile"
}
export declare const FileContentDiscriminator = "type";
export declare enum FileContentType {
    Unknown = "FileSystemContent",
    Text = "FileSystemTextContent",
    Binary = "FileSystemBinaryContent"
}
export declare const FileContentVersionDiscriminator = "type";
export declare enum FileContentVersionType {
    Unknown = "FileSystemFileContentVersion",
    Binary = "FileSystemFileBinaryContentVersion"
}
export declare const Schema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodTransform<Date, string | Date>;
    updatedAt: z.ZodTransform<Date, string | Date>;
    rootFileSystemObjectId: z.ZodString;
}, z.core.$strip>;
export type Data = z.infer<typeof Schema>;
export declare const IdSchema: z.ZodObject<{
    fileSystemId: z.ZodString;
}, z.core.$strip>;
export type IdData = z.infer<typeof IdSchema>;
export declare const ObjectIdSchema: z.ZodObject<{
    fileSystemObjectId: z.ZodString;
}, z.core.$strip>;
export type ObjectIdData = z.infer<typeof ObjectIdSchema>;
export declare const ObjectSchema: z.ZodObject<{
    createdAt: z.ZodTransform<Date, string | Date>;
    updatedAt: z.ZodTransform<Date, string | Date>;
    id: z.ZodString;
    type: z.ZodEnum<typeof ObjectType>;
    fileSystemId: z.ZodString;
    parentFileSystemObjectId: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodCustom<mongoose.Types.ObjectId, mongoose.Types.ObjectId>]>, z.ZodTransform<string, string | mongoose.Types.ObjectId>>>;
    name: z.ZodString;
}, z.core.$strip>;
export type ObjectData = z.infer<typeof ObjectSchema>;
export declare const DirectoryObjectSchema: z.ZodObject<{
    createdAt: z.ZodTransform<Date, string | Date>;
    updatedAt: z.ZodTransform<Date, string | Date>;
    id: z.ZodString;
    fileSystemId: z.ZodString;
    parentFileSystemObjectId: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodCustom<mongoose.Types.ObjectId, mongoose.Types.ObjectId>]>, z.ZodTransform<string, string | mongoose.Types.ObjectId>>>;
    name: z.ZodString;
    type: z.ZodDefault<z.ZodLiteral<ObjectType.Directory>>;
    childrenFileSystemObjectIds: z.ZodArray<z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodCustom<mongoose.Types.ObjectId, mongoose.Types.ObjectId>]>, z.ZodTransform<string, string | mongoose.Types.ObjectId>>>;
}, z.core.$strip>;
export type DirectoryObjectData = z.infer<typeof DirectoryObjectSchema>;
export declare const FileObjectSchema: z.ZodObject<{
    createdAt: z.ZodTransform<Date, string | Date>;
    updatedAt: z.ZodTransform<Date, string | Date>;
    id: z.ZodString;
    fileSystemId: z.ZodString;
    parentFileSystemObjectId: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodCustom<mongoose.Types.ObjectId, mongoose.Types.ObjectId>]>, z.ZodTransform<string, string | mongoose.Types.ObjectId>>>;
    name: z.ZodString;
    type: z.ZodDefault<z.ZodLiteral<ObjectType.File>>;
}, z.core.$strip>;
export type FileObjectData = z.infer<typeof FileObjectSchema>;
export declare const AnyObjectSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    createdAt: z.ZodTransform<Date, string | Date>;
    updatedAt: z.ZodTransform<Date, string | Date>;
    id: z.ZodString;
    fileSystemId: z.ZodString;
    parentFileSystemObjectId: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodCustom<mongoose.Types.ObjectId, mongoose.Types.ObjectId>]>, z.ZodTransform<string, string | mongoose.Types.ObjectId>>>;
    name: z.ZodString;
    type: z.ZodDefault<z.ZodLiteral<ObjectType.Directory>>;
    childrenFileSystemObjectIds: z.ZodArray<z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodCustom<mongoose.Types.ObjectId, mongoose.Types.ObjectId>]>, z.ZodTransform<string, string | mongoose.Types.ObjectId>>>;
}, z.core.$strip>, z.ZodObject<{
    createdAt: z.ZodTransform<Date, string | Date>;
    updatedAt: z.ZodTransform<Date, string | Date>;
    id: z.ZodString;
    fileSystemId: z.ZodString;
    parentFileSystemObjectId: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodCustom<mongoose.Types.ObjectId, mongoose.Types.ObjectId>]>, z.ZodTransform<string, string | mongoose.Types.ObjectId>>>;
    name: z.ZodString;
    type: z.ZodDefault<z.ZodLiteral<ObjectType.File>>;
}, z.core.$strip>], "type">;
export type AnyObjectData = z.infer<typeof AnyObjectSchema>;
export declare const CreateObjectSchema: z.ZodObject<{
    type: z.ZodEnum<typeof ObjectType>;
    parentFileSystemObjectId: z.ZodString;
    name: z.ZodString;
}, z.core.$strip>;
export type CreateObjectData = z.infer<typeof CreateObjectSchema>;
export declare const CreateDirectoryObjectSchema: z.ZodObject<{
    parentFileSystemObjectId: z.ZodString;
    name: z.ZodString;
    type: z.ZodDefault<z.ZodLiteral<ObjectType.Directory>>;
}, z.core.$strip>;
export type CreateDirectoryObjectData = z.infer<typeof CreateDirectoryObjectSchema>;
export declare const CreateFileObjectSchema: z.ZodObject<{
    parentFileSystemObjectId: z.ZodString;
    name: z.ZodString;
    type: z.ZodDefault<z.ZodLiteral<ObjectType.File>>;
}, z.core.$strip>;
export type CreateFileObjectData = z.infer<typeof CreateFileObjectSchema>;
export declare const AnyCreateObjectSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    parentFileSystemObjectId: z.ZodString;
    name: z.ZodString;
    type: z.ZodDefault<z.ZodLiteral<ObjectType.Directory>>;
}, z.core.$strip>, z.ZodObject<{
    parentFileSystemObjectId: z.ZodString;
    name: z.ZodString;
    type: z.ZodDefault<z.ZodLiteral<ObjectType.File>>;
}, z.core.$strip>], "type">;
export type AnyCreateObjectData = z.infer<typeof AnyCreateObjectSchema>;
export declare const GetObjectsSchema: z.ZodObject<{
    skip: z.ZodPipe<z.ZodDefault<z.ZodPipe<z.ZodTransform<number | undefined, string | number | undefined>, z.ZodNumber>>, z.ZodTransform<number, number>>;
    take: z.ZodPipe<z.ZodDefault<z.ZodPipe<z.ZodTransform<number | undefined, string | number | undefined>, z.ZodNumber>>, z.ZodTransform<number, number>>;
    ids: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>, z.ZodTransform<string[] | undefined, string | string[] | undefined>>;
    parentFileSystemObjectId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type GetObjectsData = z.infer<typeof GetObjectsSchema>;
export declare const GetDirectoryObjectsSchema: z.ZodObject<{
    skip: z.ZodPipe<z.ZodDefault<z.ZodPipe<z.ZodTransform<number | undefined, string | number | undefined>, z.ZodNumber>>, z.ZodTransform<number, number>>;
    take: z.ZodPipe<z.ZodDefault<z.ZodPipe<z.ZodTransform<number | undefined, string | number | undefined>, z.ZodNumber>>, z.ZodTransform<number, number>>;
    ids: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>, z.ZodTransform<string[] | undefined, string | string[] | undefined>>;
    parentFileSystemObjectId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type GetDirectoryObjectsData = z.infer<typeof GetDirectoryObjectsSchema>;
export declare const GetFileObjectsSchema: z.ZodObject<{
    skip: z.ZodPipe<z.ZodDefault<z.ZodPipe<z.ZodTransform<number | undefined, string | number | undefined>, z.ZodNumber>>, z.ZodTransform<number, number>>;
    take: z.ZodPipe<z.ZodDefault<z.ZodPipe<z.ZodTransform<number | undefined, string | number | undefined>, z.ZodNumber>>, z.ZodTransform<number, number>>;
    ids: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>, z.ZodTransform<string[] | undefined, string | string[] | undefined>>;
    parentFileSystemObjectId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type GetFileObjectsData = z.infer<typeof GetFileObjectsSchema>;
export declare const AnyGetObjectsSchema: z.ZodUnion<readonly [z.ZodObject<{
    skip: z.ZodPipe<z.ZodDefault<z.ZodPipe<z.ZodTransform<number | undefined, string | number | undefined>, z.ZodNumber>>, z.ZodTransform<number, number>>;
    take: z.ZodPipe<z.ZodDefault<z.ZodPipe<z.ZodTransform<number | undefined, string | number | undefined>, z.ZodNumber>>, z.ZodTransform<number, number>>;
    ids: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>, z.ZodTransform<string[] | undefined, string | string[] | undefined>>;
    parentFileSystemObjectId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    skip: z.ZodPipe<z.ZodDefault<z.ZodPipe<z.ZodTransform<number | undefined, string | number | undefined>, z.ZodNumber>>, z.ZodTransform<number, number>>;
    take: z.ZodPipe<z.ZodDefault<z.ZodPipe<z.ZodTransform<number | undefined, string | number | undefined>, z.ZodNumber>>, z.ZodTransform<number, number>>;
    ids: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>, z.ZodTransform<string[] | undefined, string | string[] | undefined>>;
    parentFileSystemObjectId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>]>;
export type AnyGetObjectsData = z.infer<typeof AnyGetObjectsSchema>;
