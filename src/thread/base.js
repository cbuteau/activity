
import MessageIds from "../shared/MessageIds";




self.onMessage = function(message) {
    let data = message.data;

    switch (data.message) {
        case MessageIds.BASEINIT:
            break;
    }
}

// run once.
self.postMessage({
    message: MessageIds.BASEINIT_COMPLETE
});