import { z } from 'zod';

export const UniqueSchema = z.object({
  id: z.string()
});

export type UniqueData = z.infer<typeof UniqueSchema>;