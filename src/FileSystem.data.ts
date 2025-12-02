import mongoose from 'mongoose';
import z from 'zod';
import * as Base from './Base.data.js';
import * as Unique from './Unique.data.js';

export const ObjectDiscriminator = 'type';

export enum ObjectType {
  Unknown = 'FileSystemObject',
  Directory = 'FileSystemDirectory',
  File = 'FileSystemFile'
}

export const FileContentDiscriminator = 'type';

export enum FileContentType {
  Unknown = 'FileSystemContent',
  Text = 'FileSystemTextContent',
  Binary = 'FileSystemBinaryContent'
}

export const FileContentVersionDiscriminator = 'type';

export enum FileContentVersionType {
  Unknown = 'FileSystemFileContentVersion',
  Binary = 'FileSystemFileBinaryContentVersion'
}

export const Schema = z.object({
  rootFileSystemObjectId: z.string(),
  ...Unique.Schema.shape
}).strip();;

export type Data = z.infer<typeof Schema>;

export const IdSchema = z.object({
  fileSystemId: z.string()
});

export type IdData = z.infer<typeof IdSchema>;

export const ObjectIdSchema = z.object({
  fileSystemObjectId: z.string()
});

export type ObjectIdData = z.infer<typeof ObjectIdSchema>;

export const ObjectSchema = z.object({
  type: z.enum(ObjectType),
  fileSystemId: z.string(),
  parentFileSystemDirectoryId: z.union([ z.string(), z.instanceof(mongoose.Types.ObjectId) ]).transform((parentId: string | mongoose.Types.ObjectId): string => parentId.toString()).optional(),
  name: z.string(),
  ...Schema.shape
}).strip();

export type ObjectData = z.infer<typeof ObjectSchema>;

export const DirectoryObjectSchema = ObjectSchema.extend({
  type: z.literal(ObjectType.Directory).default(ObjectType.Directory),
  childrenFileSystemObjectIds: z.union([ z.string(), z.instanceof(mongoose.Types.ObjectId) ]).transform((childId: string | mongoose.Types.ObjectId): string => childId.toString()).array()
}).strip();

export type DirectoryObjectData = z.infer<typeof DirectoryObjectSchema>;

export const FileObjectSchema = ObjectSchema.extend({
  type: z.literal(ObjectType.File).default(ObjectType.File),
  mimeType: z.string(),
}).strip();

export type FileObjectData = z.infer<typeof FileObjectSchema>;

export const AnyObjectSchema = z.discriminatedUnion(ObjectDiscriminator, [ DirectoryObjectSchema, FileObjectSchema ]);

export type AnyObjectData = z.infer<typeof AnyObjectSchema>;

export const CreateObjectSchema = z.object({
  type: z.enum(ObjectType),
  parentFileSystemDirectoryId: z.string(),
  name: z.string()
});

export type CreateObjectData = z.infer<typeof CreateObjectSchema>;

export const CreateDirectoryObjectSchema = CreateObjectSchema.extend({
  type: z.literal(ObjectType.Directory).default(ObjectType.Directory)
});

export type CreateDirectoryObjectData = z.infer<typeof CreateDirectoryObjectSchema>;

export const CreateFileObjectSchema = CreateObjectSchema.extend({
  type: z.literal(ObjectType.File).default(ObjectType.File),
  mimeType: z.string()
});

export type CreateFileObjectData = z.infer<typeof CreateFileObjectSchema>;

export const AnyCreateObjectSchema = z.discriminatedUnion(ObjectDiscriminator, [ CreateDirectoryObjectSchema, CreateFileObjectSchema ]);
export type AnyCreateObjectData = z.infer<typeof AnyCreateObjectSchema>;

export const GetObjectsSchema = z.object({
  parentFileSystemDirectoryId: z.string().optional(),
  name: z.string().optional(),
  ...Base.IdsSchema.shape,
  ...Base.SkipTakeSchema.shape
});

export type GetObjectsData = z.infer<typeof GetObjectsSchema>;

export const GetDirectoryObjectsSchema = GetObjectsSchema;

export type GetDirectoryObjectsData = z.infer<typeof GetDirectoryObjectsSchema>;

export const GetFileObjectsSchema = GetObjectsSchema.extend({
  mimeType: z.string().optional()
});

export type GetFileObjectsData = z.infer<typeof GetFileObjectsSchema>;

export const AnyGetObjectsSchema = z.union([ GetDirectoryObjectsSchema, GetFileObjectsSchema ]);
export type AnyGetObjectsData = z.infer<typeof AnyGetObjectsSchema>;