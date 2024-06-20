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