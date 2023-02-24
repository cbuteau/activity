
import LongPromise from "./LongPromise";
import WorkerStates from "./WorkerStates";

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
        
    }
}