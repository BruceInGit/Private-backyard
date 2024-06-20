//link https://leetcode.cn/problems/debounce/

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timer=null

    return function(...args) {
        if(timer){
            clearTimeout(timer)
            timer = null
        }

        timer = setTimeout(() => {
          fn.apply(this, args)
        },t)
    }
};
