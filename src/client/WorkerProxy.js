
import LongPromise from "./LongPromise";
import WorkerStates from "./WorkerStates";

import LightWeightPubSub from "./LightWeightPubSub";

import MessageIds from "../shared/MessageIds";


var usedIds = [];

function getId() {
    return '' + Math.random().toString(36).substr(2, 9);
}

function ensureId() {
    var id = getId();
    while(usedIds.indexOf(id) !== -1) {
        id = getId();
    }
    usedIds.push(id);

    return id;
}


class WorkerProxy {
    constructor(options) {
        this._internals = {};
        this._internals.id = ensureId();
        this._internals.state = WorkerStates.STARTING;
        this.options = options;
        this._longPromise = new LongPromise();
        this.start();
    }

    start() {
     this._worker = new Worker('../thread/base.js', { type: "module" });
     this._worker.onmessage = this._onmessage.bind(this);   
     this.worker.onerror = this._onerror.bind(this);
    }

    _onmessage(event) {
        let data = event.data;
        switch (data.message) {
            case MessageIds.SCRIPTLOADED:
                break;
        }
    }

    _onerror(errorInfo) {
        this._longPromise.reject(errorInfo);
        this.updateState(WorkerStates.COMPLETED);
    }

    subscribeState(state, callback) {
        LightWeightPubSub.subscribe(state, callback);
    }

    updateState(state) {
        this._internals.state = state;
        LightWeightPubSub.publish(state, {});
    }
}