export type Callback<TArgs extends any[], TResult> = (...args: [...TArgs]) => TResult;

export interface IFunc<TArgs extends any[], TResult> {
  add(callback: Callback<TArgs, TResult>): void;
  remove(callback: Callback<TArgs, TResult>): void;
}

export class Func<TArgs extends any[], TResult> implements IFunc<TArgs, TResult> {

  private _callbacks = new Array<Callback<TArgs, TResult>>;

  public invoke($this: any, ...args: [...TArgs]): TResult[] {
    return this._callbacks.map(
      (callback: Callback<TArgs, TResult>): TResult => 
        callback.call($this, ...args)
    )
  }

  public reduce($this: any, callbackfn: (previousValue: TResult, currentValue: TResult, currentIndex: number, array: TResult[]) => TResult, ...args: [...TArgs]): TResult {
    return this.invoke($this, ...args)
      .reduce(callbackfn);
  }
  
  public add(callback: Callback<TArgs, TResult>): void {
    this._callbacks.push(callback);
  }

  public remove(callback: Callback<TArgs, TResult>): void {
    const index = this._callbacks.indexOf(callback);
    this._callbacks.splice(index, 1);
  }

}