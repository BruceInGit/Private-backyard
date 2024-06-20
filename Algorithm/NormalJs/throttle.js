var throttle = function (fn, t) {
    var timer = new Date();

    return function (...args) {
        var now = new Date();

        if (now - timer >= t) {
            fn.apply(this, args);
            timer = now
        }
    }
}


var throttleByTimer = function (func, delay) {
    let timer = null;
    
    return function (...args) {
        if (timer) return;
        timer = setTimeout(function () {
            func.apply(this, args);
            timer = null;
        }, delay);
    };
}