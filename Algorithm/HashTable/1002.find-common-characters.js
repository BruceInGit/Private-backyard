//Link https://leetcode.cn/problems/find-common-characters/description/

var commonChars = function (words) {
    let mini_count = new Map()

    // initialize mini hash table by first word
    for (let str of words[0]) {
        mini_count.set(str, ((mini_count.get(str) || 0) + 1))
    }
    
    for (let i = 1; i < words.length; i++) {
        let temp = new Map()
        Array.from(words[i]).forEach(s => {
            temp.set(s, (temp.get(s) || 0) + 1)
        })
        /**
         * Loop mini_count, and if new word hash table doesn't have this character，it will set value to zero
         * The value represents the number of times this character appears in the word
         * so compare the value, get the minimer value to set the value of the key
         */ 
        for (let key of mini_count.keys()) {
            let minvalue = Math.min(mini_count.get(key) || 0, temp.get(key) || 0)
            mini_count.set(key, minvalue) 
        }

    }
   
    let res = []
    // loop the mini_count, the value is the number of times
    for (let [key, value] of mini_count) {
        while (value > 0) {
            value--
            res.push(key)
        }
    }

    return res
}
