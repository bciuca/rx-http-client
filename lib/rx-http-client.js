'use strict';

var Rx = require('rx');
var http = require('http');

var RxHTTPClient = {
    /**
     * GET request.
     * @param url
     * @returns {Rx.Observable}
     */
    get: function(url) {
        return Rx.Observable.create(function(observer) {
            var req = http.get(url, function httpGetResponse(res) {
                res.on('data', function(data) {
                    data = data.toString();
                    observer.onNext(data);
                    observer.onCompleted();
                });
            });

            req.on('error', function(err) {
                observer.onError(err);
            });

            // Dispose
            return function httpGetDispose() {
                req && req.abort();
            };
        });
    },

    /**
     * Parse the data as a JSON string.
     * @param url
     * @returns {Rx.Observable<JSON>}
     */
    getJSON: function(url) {
        return RxHTTPClient.get(url)
            .map(function(data) {
                return JSON.parse(data);
            });
    }
};

module.exports = RxHTTPClient;