export type Callback<TArgs extends any[]> = (...args: [...TArgs]) => void;

export interface IAction<TArgs extends any[]> {
  add(callback: Callback<TArgs>): void;
  remove(callback: Callback<TArgs>): void;
}

export default class Action<TArgs extends any[]> implements IAction<TArgs> {

  private _callbacks = new Array<Callback<TArgs>>;

  public invoke(...args: [...TArgs]): void {
    this._callbacks.forEach(callback => callback.call(undefined, ...args));
  }
  
  public add(callback: Callback<TArgs>): void {
    this._callbacks.push(callback);
  }

  public remove(callback: Callback<TArgs>): void {
    const index = this._callbacks.indexOf(callback);
    this._callbacks.splice(index, 1);
  }

}