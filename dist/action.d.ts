export type Callback<TArgs extends any[]> = (...args: [...TArgs]) => void;
export interface IAction<TArgs extends any[]> {
    add(callback: Callback<TArgs>): void;
    remove(callback: Callback<TArgs>): void;
}
export default class Action<TArgs extends any[]> implements IAction<TArgs> {
    private _callbacks;
    invoke(...args: [...TArgs]): void;
    add(callback: Callback<TArgs>): void;
    remove(callback: Callback<TArgs>): void;
}
