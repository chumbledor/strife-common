import z from 'zod';
const now = new Date();
const CoerceStringToDate = z.preprocess((value) => {
    switch (typeof value) {
        case 'string':
            return new Date(value);
        case 'object':
            return value;
        case 'undefined':
            return now;
    }
}, z.date());
export const Schema = z.object({
    createdAt: CoerceStringToDate,
    updatedAt: CoerceStringToDate
});
//# sourceMappingURL=Timestamp.data.js.map