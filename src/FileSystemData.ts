import { z } from 'zod';

export const FileSystemObjectIdSchema = z.object({
  fileSystemObjectId: z.string()
});

export type FileSystemObjectIdData = z.infer<typeof FileSystemObjectIdSchema>;