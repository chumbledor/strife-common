declare function filterAsync<TValue>(array: TValue[], predicate: (value: TValue, index: number, array: TValue[]) => Promise<boolean>): Promise<TValue[]>;
declare function mapAsync<TFrom, TTo>(array: TFrom[], callbackfn: (value: TFrom, index: number, array: TFrom[]) => Promise<TTo>): Promise<TTo[]>;
export declare const Algorithms: {
    filterAsync: typeof filterAsync;
    mapAsync: typeof mapAsync;
};
export {};
