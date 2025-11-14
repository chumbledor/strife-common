import mongoose from 'mongoose';
import z from 'zod';
import { IdsSchema, SkipTakeSchema } from './BaseData.js';
import { UniqueSchema } from './UniqueData.js';
export var FileSystemObjectType;
(function (FileSystemObjectType) {
    FileSystemObjectType["Object"] = "FileSystemObjectModel";
    FileSystemObjectType["Directory"] = "FileSystemDirectoryModel";
    FileSystemObjectType["File"] = "FileSystemFileModel";
})(FileSystemObjectType || (FileSystemObjectType = {}));
export const FileSystemObjectIdSchema = z.object({
    fileSystemObjectId: z.string()
});
export const FileSystemObjectSchema = z.object({
    fileSystemObjectType: z.enum(FileSystemObjectType),
    projectId: z.string(),
    parentId: z.string().optional(),
    name: z.string(),
    ...UniqueSchema.shape
}).strip();
export const FileSystemDirectorySchema = FileSystemObjectSchema.extend({
    fileSystemObjectType: z.literal(FileSystemObjectType.Directory).default(FileSystemObjectType.Directory),
    childrenIds: z.union([z.string(), z.instanceof(mongoose.Types.ObjectId)]).transform((childId) => childId.toString()).array()
}).strip();
export const FileSystemFileSchema = FileSystemObjectSchema.extend({
    fileSystemObjectType: z.literal(FileSystemObjectType.File).default(FileSystemObjectType.File),
    size: z.number(),
    mimeType: z.string(),
}).strip();
export const CreateFileSystemObjectSchema = z.object({
    fileSystemObjectType: z.enum(FileSystemObjectType),
    name: z.string()
});
export const AnyFileSystemObjectSchema = z.discriminatedUnion('fileSystemObjectType', [FileSystemDirectorySchema, FileSystemFileSchema]);
export const CreateFileSystemDirectorySchema = CreateFileSystemObjectSchema.extend({
    fileSystemObjectType: z.literal(FileSystemObjectType.Directory).default(FileSystemObjectType.Directory)
});
export const CreateFileSystemFileSchema = CreateFileSystemObjectSchema.extend({
    fileSystemObjectType: z.literal(FileSystemObjectType.File).default(FileSystemObjectType.File),
    size: z.number(),
    mimeType: z.string()
});
export const GetFileSystemObjectsSchema = z.object({
    parentId: z.string().optional(),
    name: z.string().optional(),
    ...IdsSchema.shape,
    ...SkipTakeSchema.shape
});
export const GetFileSystemDirectoriesSchema = GetFileSystemObjectsSchema;
export const GetFileSystemFilesSchema = GetFileSystemObjectsSchema.extend({
    mimeType: z.string().optional()
});
//# sourceMappingURL=FileSystemData.js.map