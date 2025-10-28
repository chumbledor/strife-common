export type Callback<TArgs extends any[]> = (...args: [...TArgs]) => void;
export interface IAction<TArgs extends any[]> {
    add(callback: Callback<TArgs>): void;
    remove(callback: Callback<TArgs>): void;
}
