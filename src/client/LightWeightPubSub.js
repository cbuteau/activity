
class LightWeightPubSub {
    constructor() {
        this._subscriptions = new Map();
    }
    subscribe(event, callback) {
        let entry = this._subscriptions.get(event);
        if (entry) { 
            entry.callbacks.push(callback);
        } else {
            entry = {
                callbacks: [callback]
            }
            this._subscriptions.set(event, entry);
        }
    }

    publish(event, data) {
        let entry = this._subscriptions.get(event);
        if (entry) {
            for (let i = 0; i < entry.callbacks.length; i++) {
                let callback = entry.callbacks[i];
                try {
                    callback(data);
                } catch (e) {
                    console.error(e);
                }
            }
        }
    }
}

let instance;
let inst = !instance ? instance = new LightWeightPubSub() : instance;

export default inst;