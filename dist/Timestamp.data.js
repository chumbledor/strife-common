import z from 'zod';
const CoerceStringToDate = z.transform((value) => {
    switch (typeof value) {
        case 'string':
            return new Date(value);
        case 'object':
            return value;
    }
});
export const Schema = z.object({
    createdAt: CoerceStringToDate,
    updatedAt: CoerceStringToDate
});
//# sourceMappingURL=Timestamp.data.js.map