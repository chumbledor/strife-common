import { z } from 'zod';

export enum FileSystemObjectType {
  Directory,
  File
}

export const FileSystemObjectIdSchema = z.object({
  fileSystemObjectId: z.string()
});

export type FileSystemObjectIdData = z.infer<typeof FileSystemObjectIdSchema>;

export const FileSystemObjectSchema = z.object({
  id: z.string(),
  projectId: z.string(),
  parentId: z.string()
}).strip();

export type FileSystemObjectData = z.infer<typeof FileSystemObjectSchema>;

export const FileSystemDirectorySchema = FileSystemObjectSchema.extend({
  childrenIds: z.string().array()
}).strip();

export type FileSystemDirectoryData = z.infer<typeof FileSystemDirectorySchema>;

export const FileSystemFileSchema = FileSystemObjectSchema.extend({
  size: z.number(),
  mimeType: z.string(),
}).strip();

export type FileSystemFileData = z.infer<typeof FileSystemFileSchema>;

export const CreateFileSystemObjectSchema = z.object({
  type: z.enum(FileSystemObjectType),
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