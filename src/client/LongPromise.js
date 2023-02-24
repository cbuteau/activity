
class LongPromise {
    constructor() {
        let ptr = this;
        this._promise = new Promise(function (resolve, reject) {
            ptr._resolve = resolve;
            ptr._reject = reject;
        })
    }

    get promise() {
        return this._promise;
    }

    resolve(parameters) {
        this._resolve(parameters)
    }

    reject(parameters) {
        this._reject(parameters)
    }
}

export default LongPromise;