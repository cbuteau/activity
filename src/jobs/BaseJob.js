

class BaseJob {
    dispatch(workerId, parameters) {
        let ptr = this;
        return new Promise((resolve, reject) => {
            try {
                // figure out async later.
                result = ptr.performWork(workerId, parameters);
                resolve(result);
            } catch (e) {
                reject(e);
            }
        });
    }

    performWork(workerId, parameters) {
        throw new Error('implement this method');
    }
}