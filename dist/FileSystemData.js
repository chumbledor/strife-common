import { z } from 'zod';
export const FileSystemObjectIdSchema = z.object({
    fileSystemObjectId: z.string()
});
export const FileSystemObjectSchema = z.object({
    id: z.string(),
    projectId: z.string(),
    parentId: z.string()
});
export const CreateFileSystemObjectSchema = z.object({
    projectId: z.string(),
    parentId: z.string(),
    name: z.string()
});
export const CreateFileSystemDirectorySchema = CreateFileSystemObjectSchema;
export const CreateFileSystemFileSchema = z.object({
    size: z.number(),
    mimeType: z.string()
}).and(CreateFileSystemObjectSchema);
//# sourceMappingURL=FileSystemData.js.map