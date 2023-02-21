
const SPANS = {
    ONE: 100,
    TWO: 200,
    TWO_FIFTY: 250
};


class TimeSpan {
    constructor(span) {
        this._start = Date.now();
        this._span = span;
    }

    checkExpired() {
        var now = Date.now();
        return (now = this._start) >= this._span;
    }

    clone() {
        // CLONE for passing to other code.
        ts = new TimeSpan(this._span);
        ts._start = this._start;
        return ts;
    }

    get SPANS() {
        return SPANS;
    }
}

export default TimeSpan;