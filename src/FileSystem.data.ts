import mongoose, { version } from 'mongoose';
import z from 'zod';
import * as Base from './Base.data.js';
import * as Timestamp from './Timestamp.data.js';
import * as Unique from './Unique.data.js';

// #region FileSystem

export enum ObjectType {
  Unknown = 'FileSystemObject',
  Directory = 'FileSystemDirectoryObject',
  File = 'FileSystemFileObject'
}

export const Schema = z.object({
  rootFileSystemObjectId: z.string(),
  ...Base.Schema.shape,
  ...Unique.Schema.shape
}).strip();;

export type Data = z.infer<typeof Schema>;

export const IdSchema = z.object({
  fileSystemId: z.string()
});

// #endregion

// #region FileSystemFileObjectContentVersion

export const FileObjectContentVersionDiscriminator = 'type';

export enum FileObjectContentVersionType {
  Unknown = 'FileObjectContentVersion',
  Binary = 'FileObjectBinaryContentVersion'
}

export const FileObjectContentVersionSchema = z.object({
  type: FileObjectContentVersionType,
  fileSystemFileObjectContentId: z.string(),
  ...Unique.Schema.shape,
  ...Timestamp.Schema.shape
}).strip();

export type FileObjectContentVersionData = z.infer<typeof FileObjectContentVersionSchema>;

export const FileObjectBinaryContentVersionSchema = FileObjectContentVersionSchema.extend({
  type: z.literal(FileObjectContentVersionType.Binary).default(FileObjectContentVersionType.Binary),
  bucket: z.string(),
  key: z.string(),
  versionId: z.string(),
  size: z.number()
}).strip();

export type FileObjectBinaryContentVersionData = z.infer<typeof FileObjectBinaryContentVersionSchema>;

export const AnyFileObjectContentVersionSchema = z.discriminatedUnion(FileObjectContentVersionDiscriminator, [ FileObjectBinaryContentVersionSchema ]);
export type AnyFileObjectContentVersionData = z.infer<typeof AnyFileObjectContentVersionSchema>;

// #endregion

// #region FileSystemFileObjectContent

export const FileObjectContentDiscriminator = 'type';

export enum FileObjectContentType {
  Unknown = 'FileObjectContent',
  Text = 'FileObjectTextContent',
  Binary = 'FileObjectBinaryContent'
}

export const FileObjectContentSchema = z.object({
  type: FileObjectContentType,
  fileSystemObjectId: z.string(),
  mimeType: z.string(),
  ...Unique.Schema.shape,
  ...Timestamp.Schema.shape
}).strip();

export type FileObjectContentData = z.infer<typeof FileObjectContentSchema>;

export const FileObjectTextContentSchema = FileObjectContentSchema.extend({
  type: z.literal(FileObjectContentType.Text).default(FileObjectContentType.Text),
  text: z.string().optional()
}).strip();

export type FileObjectTextContentData = z.infer<typeof FileObjectTextContentSchema>;

export const FileObjectBinaryContentSchema = FileObjectContentSchema.extend({
  type: z.literal(FileObjectContentType.Binary).default(FileObjectContentType.Binary),
  currentFileSystemFileObjectContentVersionId: z.string(),
  fileSystemFileObjectContentVersionIds: z.string().array(),
  currentFileSystemFileObjectContentVersion: FileObjectBinaryContentVersionSchema
}).strip();

export type FileObjectBinaryContentData = z.infer<typeof FileObjectBinaryContentSchema>;

export const AnyFileObjectContentSchema = z.discriminatedUnion(FileObjectContentDiscriminator, [ FileObjectTextContentSchema, FileObjectBinaryContentSchema ]);
export type AnyFileObjectContentData = z.infer<typeof AnyFileObjectContentSchema>;

export const CreateFileObjectContentSchema = z.object({
  type: FileObjectContentType,
  mimeType: z.string().optional()
});

export type CreateFileObjectContentData = z.infer<typeof CreateFileObjectContentSchema>;

export const CreateTextFileObjectContentSchema = CreateFileObjectContentSchema.extend({
  type: z.literal(FileObjectContentType.Text).default(FileObjectContentType.Text),
  text: z.string().optional()
});

export type CreateTextFileObjectContentData = z.infer<typeof CreateTextFileObjectContentSchema>;

export const CreateBinaryFileObjectContentSchema = CreateFileObjectContentSchema.extend({
  type: z.literal(FileObjectContentType.Binary).default(FileObjectContentType.Binary)
});

export type CreateBinaryFileObjectContentData = z.infer<typeof CreateBinaryFileObjectContentSchema>;

export const AnyCreateFileObjectContentSchema = z.discriminatedUnion(FileObjectContentDiscriminator, [ CreateTextFileObjectContentSchema, CreateBinaryFileObjectContentSchema ]);
export type AnyCreateFileObjectContentData = z.infer<typeof AnyCreateFileObjectContentSchema>;

// #endregion

// #region FileSystemObject

export const ObjectDiscriminator = 'type';

export type IdData = z.infer<typeof IdSchema>;

export const ObjectIdSchema = z.object({
  fileSystemObjectId: z.string()
});

export type ObjectIdData = z.infer<typeof ObjectIdSchema>;

export const ObjectSchema = z.object({
  type: z.enum(ObjectType),
  fileSystemId: z.string(),
  parentFileSystemObjectId: z.union([ z.string(), z.instanceof(mongoose.Types.ObjectId) ]).transform((parentFileSystemObjectId: string | mongoose.Types.ObjectId): string => parentFileSystemObjectId.toString()).optional(),
  name: z.string(),
  ...Unique.Schema.shape,
  ...Timestamp.Schema.shape
}).strip();

export type ObjectData = z.infer<typeof ObjectSchema>;

export const DirectoryObjectSchema = ObjectSchema.extend({
  type: z.literal(ObjectType.Directory).default(ObjectType.Directory),
  childrenFileSystemObjectIds: z.union([ z.string(), z.instanceof(mongoose.Types.ObjectId) ]).transform((childId: string | mongoose.Types.ObjectId): string => childId.toString()).array()
}).strip();

export type DirectoryObjectData = z.infer<typeof DirectoryObjectSchema>;

export const FileObjectSchema = ObjectSchema.extend({
  type: z.literal(ObjectType.File).default(ObjectType.File),
  fileSystemFileObjectContent: AnyFileObjectContentSchema
}).strip();

export type FileObjectData = z.infer<typeof FileObjectSchema>;

export const AnyObjectSchema = z.discriminatedUnion(ObjectDiscriminator, [ DirectoryObjectSchema, FileObjectSchema ]);
export type AnyObjectData = z.infer<typeof AnyObjectSchema>;

export const CreateObjectSchema = z.object({
  type: z.enum(ObjectType), // TODO: Does this need to be a enum or can it just be ObjectType?
  parentFileSystemObjectId: z.string(),
  name: z.string()
});

export type CreateObjectData = z.infer<typeof CreateObjectSchema>;

export const CreateDirectoryObjectSchema = CreateObjectSchema.extend({
  type: z.literal(ObjectType.Directory).default(ObjectType.Directory)
});

export type CreateDirectoryObjectData = z.infer<typeof CreateDirectoryObjectSchema>;

export const CreateFileObjectSchema = CreateObjectSchema.extend({
  type: z.literal(ObjectType.File).default(ObjectType.File),
  createFileObjectContent: AnyCreateFileObjectContentSchema
});

export type CreateFileObjectData = z.infer<typeof CreateFileObjectSchema>;

export const AnyCreateObjectSchema = z.discriminatedUnion(ObjectDiscriminator, [ CreateDirectoryObjectSchema, CreateFileObjectSchema ]);
export type AnyCreateObjectData = z.infer<typeof AnyCreateObjectSchema>;

export const GetObjectsSchema = z.object({
  parentFileSystemObjectId: z.string().optional(),
  name: z.string().optional(),
  ...Base.IdsSchema.shape,
  ...Base.SkipTakeSchema.shape
});

export type GetObjectsData = z.infer<typeof GetObjectsSchema>;

export const GetDirectoryObjectsSchema = GetObjectsSchema;
export type GetDirectoryObjectsData = z.infer<typeof GetDirectoryObjectsSchema>;

export const GetFileObjectsSchema = GetObjectsSchema;
export type GetFileObjectsData = z.infer<typeof GetFileObjectsSchema>;

export const AnyGetObjectsSchema = z.union([ GetDirectoryObjectsSchema, GetFileObjectsSchema ]);
export type AnyGetObjectsData = z.infer<typeof AnyGetObjectsSchema>;

// #endregion