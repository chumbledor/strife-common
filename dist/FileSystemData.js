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
}).strip();
export const FileSystemDirectorySchema = FileSystemObjectSchema.extend({
    childrenIds: z.string().array()
}).strip();
export const FileSystemFileSchema = FileSystemObjectSchema.extend({
    size: z.number(),
    mimeType: z.string(),
}).strip();
export const CreateFileSystemObjectSchema = z.object({
    type: z.enum(FileSystemObjectType),
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