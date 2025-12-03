import z from 'zod';

export const Schema = z.object({
  createdAt: z.date(),
  updatedAt: z.date()
});

export type Data = z.infer<typeof Schema>;