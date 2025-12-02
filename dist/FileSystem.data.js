import mongoose from 'mongoose';
import z from 'zod';
import * as Base from './Base.data.js';
import * as Unique from './Unique.data.js';
export const ObjectDiscriminator = 'type';
export var FileSystemObjectType;
(function (FileSystemObjectType) {
    FileSystemObjectType["Unknown"] = "FileSystemObject";
    FileSystemObjectType["Directory"] = "FileSystemDirectory";
    FileSystemObjectType["File"] = "FileSystemFile";
})(FileSystemObjectType || (FileSystemObjectType = {}));
export const FileContentDiscriminator = 'type';
export var FileContentType;
(function (FileContentType) {
    FileContentType["Unknown"] = "FileSystemContent";
    FileContentType["Text"] = "FileSystemTextContent";
    FileContentType["Binary"] = "FileSystemBinaryContent";
})(FileContentType || (FileContentType = {}));
export const FileContentVersionDiscriminator = 'type';
export var FileContentVersionType;
(function (FileContentVersionType) {
    FileContentVersionType["Unknown"] = "FileSystemFileContentVersion";
    FileContentVersionType["Binary"] = "FileSystemFileBinaryContentVersion";
})(FileContentVersionType || (FileContentVersionType = {}));
export const Schema = z.object({
    rootFileSystemObjectId: z.string(),
    ...Unique.Schema.shape
}).strip();
;
export const IdSchema = z.object({
    fileSystemId: z.string()
});
export const ObjectIdSchema = z.object({
    fileSystemObjectId: z.string()
});
export const ObjectSchema = z.object({
    type: z.enum(FileSystemObjectType),
    fileSystemId: z.string(),
    parentFileSystemDirectoryId: z.union([z.string(), z.instanceof(mongoose.Types.ObjectId)]).transform((parentId) => parentId.toString()).optional(),
    name: z.string(),
    ...Schema.shape
}).strip();
export const DirectoryObjectSchema = ObjectSchema.extend({
    type: z.literal(FileSystemObjectType.Directory).default(FileSystemObjectType.Directory),
    childrenFileSystemObjectIds: z.union([z.string(), z.instanceof(mongoose.Types.ObjectId)]).transform((childId) => childId.toString()).array()
}).strip();
export const FileObjectSchema = ObjectSchema.extend({
    type: z.literal(FileSystemObjectType.File).default(FileSystemObjectType.File),
    mimeType: z.string(),
}).strip();
export const AnyObjectSchema = z.discriminatedUnion(ObjectDiscriminator, [DirectoryObjectSchema, FileObjectSchema]);
export const CreateObjectSchema = z.object({
    type: z.enum(FileSystemObjectType),
    parentFileSystemDirectoryId: z.string(),
    name: z.string()
});
export const CreateDirectoryObjectSchema = CreateObjectSchema.extend({
    type: z.literal(FileSystemObjectType.Directory).default(FileSystemObjectType.Directory)
});
export const CreateFileObjectSchema = CreateObjectSchema.extend({
    type: z.literal(FileSystemObjectType.File).default(FileSystemObjectType.File),
    mimeType: z.string()
});
export const AnyCreateObjectSchema = z.discriminatedUnion(ObjectDiscriminator, [CreateDirectoryObjectSchema, CreateFileObjectSchema]);
export const GetObjectsSchema = z.object({
    parentFileSystemDirectoryId: z.string().optional(),
    name: z.string().optional(),
    ...Base.IdsSchema.shape,
    ...Base.SkipTakeSchema.shape
});
export const GetDirectoryObjectsSchema = GetObjectsSchema;
export const GetFileObjectsSchema = GetObjectsSchema.extend({
    mimeType: z.string().optional()
});
export const AnyGetObjectsSchema = z.union([GetDirectoryObjectsSchema, GetFileObjectsSchema]);
//# sourceMappingURL=FileSystem.data.js.map