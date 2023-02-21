
# Learned

## Concept

Just a collection of things learned while coding and testing.

## Things learned

### You need RAF for dom dispatching

So immediately I noticed moving data processing to a thread meant that the result needed to be pushed into the DOM.  I found the best mechanism for this is a RAF running on the client side.
