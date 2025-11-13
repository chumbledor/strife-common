import { z } from 'zod';
export var FileSystemObjectType;
(function (FileSystemObjectType) {
    FileSystemObjectType["Directory"] = "directory";
    FileSystemObjectType["File"] = "file";
})(FileSystemObjectType || (FileSystemObjectType = {}));
export const FileSystemObjectIdSchema = z.object({
    fileSystemObjectId: z.string()
});
export const FileSystemObjectSchema = z.object({
    fileSystemObjectType: z.enum(FileSystemObjectType),
    id: z.string(),
    projectId: z.string(),
    name: z.string()
});
export const FileSystemDirectorySchema = FileSystemObjectSchema.extend({
    fileSystemObjectType: z.literal(FileSystemObjectType.Directory).default(FileSystemObjectType.Directory),
    childrenIds: z.string().array()
}).strip();
export const FileSystemFileSchema = FileSystemObjectSchema.extend({
    fileSystemObjectType: z.literal(FileSystemObjectType.File).default(FileSystemObjectType.File),
    size: z.number(),
    mimeType: z.string(),
}).strip();
export const CreateFileSystemObjectSchema = z.object({
    fileSystemObjectType: z.enum(FileSystemObjectType),
    name: z.string()
});
export const CreateFileSystemDirectorySchema = CreateFileSystemObjectSchema.extend({
    fileSystemObjectType: z.literal(FileSystemObjectType.Directory).default(FileSystemObjectType.Directory)
});
export const CreateFileSystemFileSchema = CreateFileSystemObjectSchema.extend({
    fileSystemObjectType: z.literal(FileSystemObjectType.File).default(FileSystemObjectType.File),
    size: z.number(),
    mimeType: z.string()
});
//# sourceMappingURL=FileSystemData.js.map