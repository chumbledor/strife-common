export type ActionCallback<TArgs extends any[]> = (...args: [...TArgs]) => void;
export interface IAction<TArgs extends any[]> {
    add(callback: ActionCallback<TArgs>): void;
    remove(callback: ActionCallback<TArgs>): void;
}
export declare class Action<TArgs extends any[]> implements IAction<TArgs> {
    private _callbacks;
    invoke($this: any, ...args: [...TArgs]): void;
    add(callback: ActionCallback<TArgs>): void;
    remove(callback: ActionCallback<TArgs>): void;
}
export type FuncCallback<TArgs extends any[], TResult> = (...args: [...TArgs]) => TResult;
export interface IFunc<TArgs extends any[], TResult> {
    add(callback: FuncCallback<TArgs, TResult>): void;
    remove(callback: FuncCallback<TArgs, TResult>): void;
}
export declare class Func<TArgs extends any[], TResult> implements IFunc<TArgs, TResult> {
    private _callbacks;
    invoke($this: any, ...args: [...TArgs]): TResult[];
    reduce($this: any, callbackfn: (previousValue: TResult, currentValue: TResult, currentIndex: number, array: TResult[]) => TResult, ...args: [...TArgs]): TResult;
    add(callback: FuncCallback<TArgs, TResult>): void;
    remove(callback: FuncCallback<TArgs, TResult>): void;
}
