export type Callback<TArgs extends any[], TResult> = (...args: [...TArgs]) => TResult;
export interface IFunc<TArgs extends any[], TResult> {
    add(callback: Callback<TArgs, TResult>): void;
    remove(callback: Callback<TArgs, TResult>): void;
}
export declare class Func<TArgs extends any[], TResult> implements IFunc<TArgs, TResult> {
    private _callbacks;
    invoke($this: any, ...args: [...TArgs]): TResult[];
    reduce($this: any, callbackfn: (previousValue: TResult, currentValue: TResult, currentIndex: number, array: TResult[]) => TResult, ...args: [...TArgs]): TResult;
    add(callback: Callback<TArgs, TResult>): void;
    remove(callback: Callback<TArgs, TResult>): void;
}
