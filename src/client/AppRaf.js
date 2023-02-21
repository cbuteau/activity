
import RafRepeater from './RafRepeater'

import TimeSpan from './TimeSpan';

class AppRaf {
    constructor() {
        this._raf = new RafRepeater({
            forgetTry: false,
            notContinue: false,
            callback: this._rafHeartbeat.bind(this)
        });
    }

    addModule(module) {

    }

    _rafHeartbeat() {
        let ts = new TimeSpan(TimeSpan.SPANS.TWO_FIFTY);
        while (!ts.checkExpired()) {
            
        }
    }
}

let instance;
let inst = !instance ? instance = new AppRaf() : instance;

export default inst;