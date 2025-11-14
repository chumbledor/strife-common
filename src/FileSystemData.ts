import z from 'zod';
import mongoose from 'mongoose';
import { IdsSchema, SkipTakeSchema } from './BaseData';
import { UniqueSchema } from './UniqueData';

export enum FileSystemObjectType {
  None = 'FileSystemObjectModel',
  Directory = 'FileSystemDirectoryModel',
  File = 'FileSystemFileModel'
}

export const FileSystemObjectIdSchema = z.object({
  fileSystemObjectId: z.string()
});

export type FileSystemObjectIdData = z.infer<typeof FileSystemObjectIdSchema>;

export const FileSystemObjectSchema = z.object({
  fileSystemObjectType: z.enum(FileSystemObjectType),
  projectId: z.string(),
  parentId: z.string().optional(),
  name: z.string(),
  ...UniqueSchema.shape
}).strip();

export type FileSystemObjectData = z.infer<typeof FileSystemObjectSchema>;

export const FileSystemDirectorySchema = FileSystemObjectSchema.extend({
  fileSystemObjectType: z.literal(FileSystemObjectType.Directory).default(FileSystemObjectType.Directory),
  childrenIds: z.union([ z.string(), z.instanceof(mongoose.Types.ObjectId) ]).transform((childId: string | mongoose.Types.ObjectId): string => childId.toString()).array()
}).strip();

export type FileSystemDirectoryData = z.infer<typeof FileSystemDirectorySchema>;

export const FileSystemFileSchema = FileSystemObjectSchema.extend({
  fileSystemObjectType: z.literal(FileSystemObjectType.File).default(FileSystemObjectType.File),
  size: z.number(),
  mimeType: z.string(),
}).strip();

export type FileSystemFileData = z.infer<typeof FileSystemFileSchema>;

export const CreateFileSystemObjectSchema = z.object({
  fileSystemObjectType: z.enum(FileSystemObjectType),
  name: z.string()
});

export const AnyFileSystemObjectSchema = z.discriminatedUnion('fileSystemObjectType', [ FileSystemDirectorySchema, FileSystemFileSchema ]);

export type AnyFileSystemObjectData = z.infer<typeof AnyFileSystemObjectSchema>;

export type CreateFileSystemObjectData = z.infer<typeof CreateFileSystemObjectSchema>;

export const CreateFileSystemDirectorySchema = CreateFileSystemObjectSchema.extend({
  fileSystemObjectType: z.literal(FileSystemObjectType.Directory).default(FileSystemObjectType.Directory)
});

export type CreateFileSystemDirectoryData = z.infer<typeof CreateFileSystemDirectorySchema>;

export const CreateFileSystemFileSchema = CreateFileSystemObjectSchema.extend({
  fileSystemObjectType: z.literal(FileSystemObjectType.File).default(FileSystemObjectType.File),
  size: z.number(),
  mimeType: z.string()
});

export type CreateFileSystemFileData = z.infer<typeof CreateFileSystemFileSchema>;

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