import z from 'zod';

const CoerceStringToDate = z.transform(
  (value: string | Date): Date => {
    switch (typeof value) {
      case 'string':
        return new Date(value);
      case 'object':
        return value;
    }
  }
);

export const Schema = z.object({
  createdAt: CoerceStringToDate,
  updatedAt: CoerceStringToDate
});

export type Input = z.input<typeof Schema>;
export type Data = z.infer<typeof Schema>;