export type ActionCallback<TArgs extends any[]> = (...args: [...TArgs]) => void;

export interface IAction<TArgs extends any[]> {
  add(callback: ActionCallback<TArgs>): void;
  remove(callback: ActionCallback<TArgs>): void;
}

export class Action<TArgs extends any[]> implements IAction<TArgs> {

  private _callbacks = new Array<ActionCallback<TArgs>>;

  public invoke($this: any, ...args: [...TArgs]): void {
    this._callbacks.forEach(
      (callback: ActionCallback<TArgs>): void => 
        callback.call($this, ...args)
    );
  }
  
  public add(callback: ActionCallback<TArgs>): void {
    this._callbacks.push(callback);
  }

  public remove(callback: ActionCallback<TArgs>): void {
    const index = this._callbacks.indexOf(callback);
    this._callbacks.splice(index, 1);
  }

}