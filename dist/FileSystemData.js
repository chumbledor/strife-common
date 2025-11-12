import { z } from 'zod';
export var FileSystemObjectType;
(function (FileSystemObjectType) {
    FileSystemObjectType[FileSystemObjectType["Directory"] = 0] = "Directory";
    FileSystemObjectType[FileSystemObjectType["File"] = 1] = "File";
})(FileSystemObjectType || (FileSystemObjectType = {}));
export const FileSystemObjectIdSchema = z.object({
    fileSystemObjectId: z.string()
});
export const FileSystemObjectSchema = z.object({
    id: z.string(),
    projectId: z.string(),
    parentId: z.string()
});
export const FileSystemDirectorySchema = z.object({
    childrenIds: z.string().array()
}).and(FileSystemObjectSchema);
export const FileSystemFileSchema = z.object({
    size: z.number(),
    mimeType: z.string(),
}).and(FileSystemObjectSchema);
export const CreateFileSystemObjectSchema = z.object({
    type: FileSystemObjectType,
    projectId: z.string(),
    parentId: z.string(),
    name: z.string()
});
export const CreateFileSystemDirectorySchema = CreateFileSystemObjectSchema.extend({
    type: z.literal(FileSystemObjectType.Directory).default(FileSystemObjectType.Directory)
});
export const CreateFileSystemFileSchema = CreateFileSystemObjectSchema.extend({
    type: z.literal(FileSystemObjectType.File).default(FileSystemObjectType.File),
    size: z.number(),
    mimeType: z.string()
});
//# sourceMappingURL=FileSystemData.js.map