(function () {
    'use strict';
    function longCall() {
        return new WinJS.Promise(function (c, e) {
            var primes = new Array();
            for (var i = 1; i <= 1000000; i++) {
                var isPrime = true;
                for (var j = 2; j < i; j++) {
                    if (i % j == 0) {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime)
                    primes.push(i);
            }
        }, function (err) {
            console.log('Video fail: ' + err.response);
            e();
        });
    }
})();