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
