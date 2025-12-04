import mongoose from 'mongoose';
import z from 'zod';
import * as Base from './Base.data.js';
import * as Timestamp from './Timestamp.data.js';
import * as Unique from './Unique.data.js';
// #region FileSystem
export var ObjectType;
(function (ObjectType) {
    ObjectType["Unknown"] = "FileSystemObject";
    ObjectType["Directory"] = "FileSystemDirectoryObject";
    ObjectType["File"] = "FileSystemFileObject";
})(ObjectType || (ObjectType = {}));
export const Schema = z.object({
    rootFileSystemObjectId: z.string(),
    ...Base.Schema.shape,
    ...Unique.Schema.shape
}).strip();
;
export const IdSchema = z.object({
    fileSystemId: z.string()
});
// #endregion
// #region FileSystemFileObjectContentVersion
export const FileObjectContentVersionDiscriminator = 'type';
export var FileObjectContentVersionType;
(function (FileObjectContentVersionType) {
    FileObjectContentVersionType["Unknown"] = "FileObjectContentVersion";
    FileObjectContentVersionType["Binary"] = "FileObjectBinaryContentVersion";
})(FileObjectContentVersionType || (FileObjectContentVersionType = {}));
export const FileObjectContentVersionSchema = z.object({
    type: z.enum(FileObjectContentVersionType),
    fileSystemFileObjectContentId: z.union([z.string(), z.instanceof(mongoose.Types.ObjectId)]).transform((fileSystemFileObjectContentId) => fileSystemFileObjectContentId.toString()),
    ...Unique.Schema.shape,
    ...Timestamp.Schema.shape
}).strip();
export const FileObjectBinaryContentVersionSchema = FileObjectContentVersionSchema.extend({
    type: z.literal(FileObjectContentVersionType.Binary).default(FileObjectContentVersionType.Binary),
    bucket: z.string(),
    key: z.string(),
    versionId: z.string(),
    size: z.number()
}).strip();
export const AnyFileObjectContentVersionSchema = z.discriminatedUnion(FileObjectContentVersionDiscriminator, [FileObjectBinaryContentVersionSchema]);
// #endregion
// #region FileSystemFileObjectContent
export const FileObjectContentDiscriminator = 'type';
export var FileObjectContentType;
(function (FileObjectContentType) {
    FileObjectContentType["Unknown"] = "FileObjectContent";
    FileObjectContentType["Text"] = "FileObjectTextContent";
    FileObjectContentType["Binary"] = "FileObjectBinaryContent";
})(FileObjectContentType || (FileObjectContentType = {}));
export const FileObjectContentSchema = z.object({
    type: z.enum(FileObjectContentType),
    fileSystemObjectId: z.union([z.string(), z.instanceof(mongoose.Types.ObjectId)]).transform((fileSystemObjectId) => fileSystemObjectId.toString()),
    mimeType: z.string(),
    ...Unique.Schema.shape,
    ...Timestamp.Schema.shape
}).strip();
export const FileObjectTextContentSchema = FileObjectContentSchema.extend({
    type: z.literal(FileObjectContentType.Text).default(FileObjectContentType.Text),
    text: z.string().optional()
}).strip();
export const FileObjectBinaryContentSchema = FileObjectContentSchema.extend({
    type: z.literal(FileObjectContentType.Binary).default(FileObjectContentType.Binary),
    currentFileSystemFileObjectContentVersionId: z.union([z.string(), z.instanceof(mongoose.Types.ObjectId)]).transform((currentFileSystemFileObjectContentVersionId) => currentFileSystemFileObjectContentVersionId.toString()),
    fileSystemFileObjectContentVersionIds: z.union([z.string(), z.instanceof(mongoose.Types.ObjectId)]).transform((fileSystemFileObjectContentVersionId) => fileSystemFileObjectContentVersionId.toString()).array(),
    currentFileSystemFileObjectContentVersion: FileObjectBinaryContentVersionSchema
}).strip();
export const AnyFileObjectContentSchema = z.discriminatedUnion(FileObjectContentDiscriminator, [FileObjectTextContentSchema, FileObjectBinaryContentSchema]);
export const CreateFileObjectContentSchema = z.object({
    type: z.enum(FileObjectContentType),
    mimeType: z.string().optional()
});
export const CreateFileObjectTextContentSchema = CreateFileObjectContentSchema.extend({
    type: z.literal(FileObjectContentType.Text).default(FileObjectContentType.Text),
    text: z.string().optional()
});
export const CreateFileObjectBinaryContentSchema = CreateFileObjectContentSchema.extend({
    type: z.literal(FileObjectContentType.Binary).default(FileObjectContentType.Binary)
});
export const AnyCreateFileObjectContentSchema = z.discriminatedUnion(FileObjectContentDiscriminator, [CreateFileObjectTextContentSchema, CreateFileObjectBinaryContentSchema]);
export const UpdateFileObjectContentSchema = z.object({
    type: z.enum(FileObjectContentType),
    mimeType: z.string().optional()
});
export const UpdateFileObjectTextContentSchema = UpdateFileObjectContentSchema.extend({
    type: z.literal(FileObjectContentType.Text).default(FileObjectContentType.Text),
    text: z.string().optional()
});
export const UpdateFileObjectBinaryContentSchema = UpdateFileObjectContentSchema.extend({
    type: z.literal(FileObjectContentType.Binary).default(FileObjectContentType.Binary)
});
export const AnyUpdateFileObjectContentSchema = z.discriminatedUnion(FileObjectContentDiscriminator, [UpdateFileObjectTextContentSchema, UpdateFileObjectBinaryContentSchema]);
// #endregion
// #region FileSystemObject
export const ObjectDiscriminator = 'type';
export const ObjectIdSchema = z.object({
    fileSystemObjectId: z.string()
});
export const ObjectSchema = z.object({
    type: z.enum(ObjectType),
    fileSystemId: z.string(),
    parentFileSystemObjectId: z.union([z.string(), z.instanceof(mongoose.Types.ObjectId)]).transform((parentFileSystemObjectId) => parentFileSystemObjectId.toString()).optional(),
    name: z.string(),
    ...Unique.Schema.shape,
    ...Timestamp.Schema.shape
}).strip();
export const DirectoryObjectSchema = ObjectSchema.extend({
    type: z.literal(ObjectType.Directory).default(ObjectType.Directory),
    childrenFileSystemObjectIds: z.union([z.string(), z.instanceof(mongoose.Types.ObjectId)]).transform((childFileSystemObjectId) => childFileSystemObjectId.toString()).array()
}).strip();
export const FileObjectSchema = ObjectSchema.extend({
    type: z.literal(ObjectType.File).default(ObjectType.File),
    fileSystemFileObjectContent: AnyFileObjectContentSchema
}).strip();
export const AnyObjectSchema = z.discriminatedUnion(ObjectDiscriminator, [DirectoryObjectSchema, FileObjectSchema]);
export const CreateObjectSchema = z.object({
    type: z.enum(ObjectType),
    parentFileSystemObjectId: z.string(),
    name: z.string()
});
export const CreateDirectoryObjectSchema = CreateObjectSchema.extend({
    type: z.literal(ObjectType.Directory).default(ObjectType.Directory)
});
export const CreateFileObjectSchema = CreateObjectSchema.extend({
    type: z.literal(ObjectType.File).default(ObjectType.File),
    createFileObjectContent: AnyCreateFileObjectContentSchema.optional()
});
export const AnyCreateObjectSchema = z.discriminatedUnion(ObjectDiscriminator, [CreateDirectoryObjectSchema, CreateFileObjectSchema]);
export const GetObjectsSchema = z.object({
    parentFileSystemObjectId: z.string().optional(),
    name: z.string().optional(),
    ...Base.IdsSchema.shape,
    ...Base.SkipTakeSchema.shape
});
export const GetDirectoryObjectsSchema = GetObjectsSchema;
export const GetFileObjectsSchema = GetObjectsSchema;
export const AnyGetObjectsSchema = z.union([GetDirectoryObjectsSchema, GetFileObjectsSchema]);
export const UpdateObjectSchema = z.object({
    type: z.enum(ObjectType),
    parentFileSystemObjectId: z.string().optional(),
    name: z.string().optional()
});
export const UpdateDirectoryObjectSchema = UpdateObjectSchema.extend({
    type: z.literal(ObjectType.Directory).default(ObjectType.Directory)
});
export const UpdateFileObjectSchema = UpdateObjectSchema.extend({
    type: z.literal(ObjectType.File).default(ObjectType.File),
    updateFileObjectContent: AnyUpdateFileObjectContentSchema.optional()
});
export const AnyUpdateObjectSchema = z.discriminatedUnion(ObjectDiscriminator, [UpdateDirectoryObjectSchema, UpdateFileObjectSchema]);
// #endregion
//# sourceMappingURL=FileSystem.data.js.map