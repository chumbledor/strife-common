import mongoose from 'mongoose';
import z from 'zod';
import { IdsSchema, SkipTakeSchema } from './BaseData.js';
import { UniqueSchema } from './UniqueData.js';
export var FileSystemObjectType;
(function (FileSystemObjectType) {
    FileSystemObjectType["Object"] = "FileSystemObject";
    FileSystemObjectType["Directory"] = "FileSystemDirectory";
    FileSystemObjectType["File"] = "FileSystemFile";
})(FileSystemObjectType || (FileSystemObjectType = {}));
export const FileSystemObjectIdSchema = z.object({
    fileSystemObjectId: z.string()
});
export const FileSystemObjectSchema = z.object({
    type: z.enum(FileSystemObjectType),
    projectId: z.string(),
    parentId: z.union([z.string(), z.instanceof(mongoose.Types.ObjectId)]).transform((parentId) => parentId.toString()).optional(),
    name: z.string(),
    ...UniqueSchema.shape
}).strip();
export const FileSystemDirectorySchema = FileSystemObjectSchema.extend({
    type: z.literal(FileSystemObjectType.Directory).default(FileSystemObjectType.Directory),
    childrenIds: z.union([z.string(), z.instanceof(mongoose.Types.ObjectId)]).transform((childId) => childId.toString()).array()
}).strip();
export const FileSystemFileSchema = FileSystemObjectSchema.extend({
    type: z.literal(FileSystemObjectType.File).default(FileSystemObjectType.File),
    size: z.number(),
    mimeType: z.string(),
}).strip();
export const AnyFileSystemObjectSchema = z.discriminatedUnion('type', [FileSystemDirectorySchema, FileSystemFileSchema]);
export const CreateFileSystemObjectSchema = z.object({
    type: z.enum(FileSystemObjectType),
    projectId: z.string(),
    name: z.string()
});
export const CreateFileSystemDirectorySchema = CreateFileSystemObjectSchema.extend({
    type: z.literal(FileSystemObjectType.Directory).default(FileSystemObjectType.Directory)
});
export const CreateFileSystemFileSchema = CreateFileSystemObjectSchema.extend({
    type: z.literal(FileSystemObjectType.File).default(FileSystemObjectType.File),
    size: z.number(),
    mimeType: z.string()
});
export const GetFileSystemObjectsSchema = z.object({
    parentId: z.string().optional(),
    projectId: z.string().optional(),
    name: z.string().optional(),
    ...IdsSchema.shape,
    ...SkipTakeSchema.shape
});
export const GetFileSystemDirectoriesSchema = GetFileSystemObjectsSchema;
export const GetFileSystemFilesSchema = GetFileSystemObjectsSchema.extend({
    mimeType: z.string().optional()
});
//# sourceMappingURL=FileSystemData.js.map