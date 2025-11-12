import { z } from 'zod';

export const FileSystemObjectIdSchema = z.object({
  fileSystemObjectId: z.string()
});

export type FileSystemObjectIdData = z.infer<typeof FileSystemObjectIdSchema>;

export const FileSystemObjectSchema = z.object({
  id: z.string(),
  projectId: z.string(),
  parentId: z.string()
})

export const CreateFileSystemObjectSchema = z.object({
  projectId: z.string(),
  parentId: z.string(),
  name: z.string()
});

export type CreateFileSystemObjectData = z.infer<typeof CreateFileSystemObjectSchema>;

export const CreateFileSystemDirectorySchema = CreateFileSystemObjectSchema;

export type CreateFileSystemDirectoryData = z.infer<typeof CreateFileSystemDirectorySchema>;

export const CreateFileSystemFileSchema = z.object({
  size: z.number(),
  mimeType: z.string()
}).and(CreateFileSystemObjectSchema);

export type CreateFileSystemFileData = z.infer<typeof CreateFileSystemFileSchema>;