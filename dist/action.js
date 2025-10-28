export class Action {
    _callbacks = new Array;
    invoke(...args) {
        this._callbacks.forEach(callback => callback.call(undefined, ...args));
    }
    add(callback) {
        this._callbacks.push(callback);
    }
    remove(callback) {
        const index = this._callbacks.indexOf(callback);
        this._callbacks.splice(index, 1);
    }
}
//# sourceMappingURL=action.js.map