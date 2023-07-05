# What about performance?

You might read that `document.getElementById` should be used over `document.querySelector` because it's much faster. Fortunately, this argument is flawed and incorrect.

It's only correct in a "lab" environment. `document.getElementById` is faster than `document.querySelector` when you make a test that calls both of them 10,000 times sequentially. However, this does not simulate real-life applications.

The bottom line is that switching from `document.querySelector` to `document.getElementById` will never make your application faster. Most performance-related issues are often caused by completely different reasons and optimizing this will be a waste of time.

There's only one use case where such optimization makes sense and that is if you're building a framework/library such as React/Angular/jQuery that will be used by other developers.
