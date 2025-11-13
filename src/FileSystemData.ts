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
  fileSystemObjectType: z.enum(FileSystemObjectType),
  id: z.string(),
  projectId: z.string()
}).strip();

export const FileSystemDirectorySchema = FileSystemObjectSchema.extend({
  type: z.literal(FileSystemObjectType.Directory).default(FileSystemObjectType.Directory),
  childrenIds: z.string().array()
})

export type FileSystemDirectoryData = z.infer<typeof FileSystemDirectorySchema>;

export type FileSystemObjectData = z.infer<typeof FileSystemObjectSchema>;

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