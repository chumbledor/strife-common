import mongoose from 'mongoose';
import z from 'zod';
import { IdsSchema, SkipTakeSchema } from './BaseData.js';
import { UniqueSchema } from './UniqueData.js';

export const FileSystemIdSchema = z.object({
  fileSystemId: z.string()
});

export type FileSystemIdData = z.infer<typeof FileSystemIdSchema>;

export const FileSystemSchema = z.object({
  rootFileSystemObjectId: z.string(),
  ...UniqueSchema.shape
}).strip();;

export type FileSystemData = z.infer<typeof FileSystemSchema>;

export enum FileSystemObjectType {
  Object = 'FileSystemObject',
  Directory = 'FileSystemDirectory',
  File = 'FileSystemFile'
}

export enum FileSystemFileContentType {
  Unknown = 'FileSystemContent',
  Text = 'FileSystemTextContent',
  Binary = 'FileSystemBinaryContent'
}

export const FileSystemObjectIdSchema = z.object({
  fileSystemObjectId: z.string()
});

export type FileSystemObjectIdData = z.infer<typeof FileSystemObjectIdSchema>;

export const FileSystemObjectSchema = z.object({
  type: z.enum(FileSystemObjectType),
  fileSystemId: z.string(),
  parentId: z.union([ z.string(), z.instanceof(mongoose.Types.ObjectId) ]).transform((parentId: string | mongoose.Types.ObjectId): string => parentId.toString()).optional(),
  name: z.string(),
  ...UniqueSchema.shape
}).strip();

export type FileSystemObjectData = z.infer<typeof FileSystemObjectSchema>;

export const FileSystemDirectorySchema = FileSystemObjectSchema.extend({
  type: z.literal(FileSystemObjectType.Directory).default(FileSystemObjectType.Directory),
  childrenIds: z.union([ z.string(), z.instanceof(mongoose.Types.ObjectId) ]).transform((childId: string | mongoose.Types.ObjectId): string => childId.toString()).array()
}).strip();

export type FileSystemDirectoryData = z.infer<typeof FileSystemDirectorySchema>;

export const FileSystemFileSchema = FileSystemObjectSchema.extend({
  type: z.literal(FileSystemObjectType.File).default(FileSystemObjectType.File),
  size: z.number(),
  mimeType: z.string(),
}).strip();

export type FileSystemFileData = z.infer<typeof FileSystemFileSchema>;

export const AnyFileSystemObjectSchema = z.discriminatedUnion('type', [ FileSystemDirectorySchema, FileSystemFileSchema ]);

export type AnyFileSystemObjectData = z.infer<typeof AnyFileSystemObjectSchema>;

export const CreateFileSystemObjectSchema = z.object({
  type: z.enum(FileSystemObjectType),
  parentId: z.string(),
  name: z.string()
});

export type CreateFileSystemObjectData = z.infer<typeof CreateFileSystemObjectSchema>;

export const CreateFileSystemDirectorySchema = CreateFileSystemObjectSchema.extend({
  type: z.literal(FileSystemObjectType.Directory).default(FileSystemObjectType.Directory)
});

export type CreateFileSystemDirectoryData = z.infer<typeof CreateFileSystemDirectorySchema>;

export const CreateFileSystemFileSchema = CreateFileSystemObjectSchema.extend({
  type: z.literal(FileSystemObjectType.File).default(FileSystemObjectType.File),
  size: z.number(),
  mimeType: z.string()
});

export type CreateFileSystemFileData = z.infer<typeof CreateFileSystemFileSchema>;

export const AnyCreateFileSystemObjectSchema = z.discriminatedUnion('type', [ CreateFileSystemDirectorySchema, CreateFileSystemFileSchema ]);
export type AnyCreateFileSystemObjectData = z.infer<typeof AnyCreateFileSystemObjectSchema>;

export const GetFileSystemObjectsSchema = z.object({
  parentId: z.string().optional(),
  name: z.string().optional(),
  ...IdsSchema.shape,
  ...SkipTakeSchema.shape
});

export type GetFileSystemObjectsData = z.infer<typeof GetFileSystemObjectsSchema>;

export const GetFileSystemDirectoriesSchema = GetFileSystemObjectsSchema;

export type GetFileSystemDirectoriesData = z.infer<typeof GetFileSystemDirectoriesSchema>;

export const GetFileSystemFilesSchema = GetFileSystemObjectsSchema.extend({
  mimeType: z.string().optional()
});

export type GetFileSystemFilesData = z.infer<typeof GetFileSystemFilesSchema>;

export const AnyGetFileSystemObjectsSchema = z.union([ GetFileSystemDirectoriesSchema, GetFileSystemFilesSchema ]);
export type AnyGetFileSystemObjectsData = z.infer<typeof AnyGetFileSystemObjectsSchema>;