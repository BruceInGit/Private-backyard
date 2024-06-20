/**
 * @param {Array} arr
 * @return {Array}
 */
var flatArray = function (arr) {
    var result = []
  
    var flat = function(items){
     items.forEach(item=>{
      if(Array.isArray(item)){
        flat(item)
      }else{
        result.push(item)
      }
     })
    }
  
    flat(arr)
  
    return result
  };

// link https://leetcode.cn/problems/flatten-deeply-nested-array/description/
  /**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    var result = []


    var flatArray = function (items, depth) {
        items.forEach(item => {
            if (Array.isArray(item) && depth > 0) {
                flatArray(item, depth - 1)
            } else {
                result.push(item)
            }
        })
    }

    flatArray(arr, n)

    return result
};