export class Action {
    _callbacks = new Array;
    invoke($this, ...args) {
        this._callbacks.forEach((callback) => callback.call($this, ...args));
    }
    add(callback) {
        this._callbacks.push(callback);
    }
    remove(callback) {
        const index = this._callbacks.indexOf(callback);
        this._callbacks.splice(index, 1);
    }
}
export class Func {
    _callbacks = new Array;
    invoke($this, ...args) {
        return this._callbacks.map((callback) => callback.call($this, ...args));
    }
    reduce($this, callbackfn, ...args) {
        return this.invoke($this, ...args)
            .reduce(callbackfn);
    }
    add(callback) {
        this._callbacks.push(callback);
    }
    remove(callback) {
        const index = this._callbacks.indexOf(callback);
        this._callbacks.splice(index, 1);
    }
}
//# sourceMappingURL=Event.js.map