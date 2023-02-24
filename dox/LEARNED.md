
# Learned

## Concept

Just a collection of things learned while coding and testing.

## Things learned

### RAF needs to re-registered after it runs

Thus I code a wrapper just for that mechanism.

### You need RAF for dom dispatching

So immediately I noticed moving data processing to a thread meant that the result needed to be pushed into the DOM.  I found the best mechanism for this is a RAF running on the client side.

### You should treat RAF like embedded program

So embedded programs and things like game engines do something similar.

```javascript

let ts = new Timestamp();
while (ts.hasNotExpired()) {
    if (processInputs(ts) {
        if (processState(ts)) {
            if (processRender(ts)) {

            }
        }
    }
}
```

