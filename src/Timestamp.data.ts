import z from 'zod';

const now = new Date();

const CoerceStringToDate = z.preprocess(
  (value: string | Date | undefined): Date => {
    switch (typeof value) {
      case 'string':
        return new Date(value);
      case 'object':
        return value;
      case 'undefined':
        return now;
    }
  },
  z.date()
);

export const Schema = z.object({
  createdAt: CoerceStringToDate,
  updatedAt: CoerceStringToDate
});

export type Data = z.infer<typeof Schema>;