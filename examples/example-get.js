'use strict';

var rxGet = require('../lib/index.js').getJSON;
var noop = function () {};

rxGet('http://ip.jsontest.com/')
    .doAction(function doesAction(json) {
        console.log('data received!');
        console.log(json);
    })
    .subscribe(noop, function onError(err) {console.error(err), noop});

