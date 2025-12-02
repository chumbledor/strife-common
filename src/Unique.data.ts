import z from 'zod';

export const Schema = z.object({
  id: z.string()
});

export type Data = z.infer<typeof Schema>;