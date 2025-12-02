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

export type FuncCallback<TArgs extends any[], TResult> = (...args: [...TArgs]) => TResult;

export interface IFunc<TArgs extends any[], TResult> {
  add(callback: FuncCallback<TArgs, TResult>): void;
  remove(callback: FuncCallback<TArgs, TResult>): void;
}

export class Func<TArgs extends any[], TResult> implements IFunc<TArgs, TResult> {

  private _callbacks = new Array<FuncCallback<TArgs, TResult>>;

  public invoke($this: any, ...args: [...TArgs]): TResult[] {
    return this._callbacks.map(
      (callback: FuncCallback<TArgs, TResult>): TResult => 
        callback.call($this, ...args)
    )
  }

  public reduce($this: any, callbackfn: (previousValue: TResult, currentValue: TResult, currentIndex: number, array: TResult[]) => TResult, ...args: [...TArgs]): TResult {
    return this.invoke($this, ...args)
      .reduce(callbackfn);
  }
  
  public add(callback: FuncCallback<TArgs, TResult>): void {
    this._callbacks.push(callback);
  }

  public remove(callback: FuncCallback<TArgs, TResult>): void {
    const index = this._callbacks.indexOf(callback);
    this._callbacks.splice(index, 1);
  }

}