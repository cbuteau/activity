
import BaseJob from './BaseJob';

class Maths extends BaseJob {
    performWork(workerId, parameters) {
        switch (parameters.op) {
            case '+':
                return parameters.parameterOne + parameters.parameterTwo;
                break;
        }
    }
}

export default Maths;