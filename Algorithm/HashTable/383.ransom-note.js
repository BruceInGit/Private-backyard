/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let codeHashTable = new Map();

    for (let i = 0; i < magazine.length; i++) {
        codeHashTable.set(magazine[i], (codeHashTable.get(magazine[i]) || 0) + 1);
    }

    for (let j = 0; j < ransomNote.length; j++) {
        const times = codeHashTable.get(ransomNote[j]) || 0;
        if (times <= 0) {
            return false; 
        }
        codeHashTable.set(ransomNote[j], times - 1); 
    }

    return true; 
};
