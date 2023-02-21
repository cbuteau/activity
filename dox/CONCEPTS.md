
# Concepts

## Background

In the past I have found programmers who found threadign daunting to the point of not even experiementing with it.

This changed with Task Libraries.

C# Has an excellent Task Library 
C++ Has the TBB.

They both have constructs named continuation or futures or some wrapper that conitunes execution once the thread task is complete.

Given the Javascript  language and its features.
The best thing was to wrap the work to be doen in a promise.

Then client code could register the next work to be performed in the then() of the Promise.

