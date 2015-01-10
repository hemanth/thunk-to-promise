# thunk-to-promise
> Converts a Thunk to a Promise. (Picked from [co](https://github.com/tj/co/blob/master/index.js#L120))


__Get it:__ ```npm install --save thunk-to-promise```

__Sample usage:__

```js
var readThunk = require("thunkify")(fs.read);

var thunkToPromise = require("thunk-to-promise");

var readPromise = thunkToPromise(readThunk);

// readPromisse is your thunk, that got converted to a Promise.
```


