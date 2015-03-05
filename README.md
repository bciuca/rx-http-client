rx-http-client
==============

Create HTTP requests from node and process async events using Rx.

Example
-------
```javascript
var rxGet = require('rx-http-client').getJSON;
var noop = function () {};

rxGet('http://ip.jsontest.com/')
    .doAction(function doesAction(json) {
        console.log('data received!');
        console.log(json);
    })
    .subscribe(noop, function onError(err) {console.error(err), noop});
```