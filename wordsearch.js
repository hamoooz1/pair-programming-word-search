const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }   
    let verticalWord = [];
    for (let i = 0; i < letters[0].length; i++) {
        let words = '';
        for (let j = 0; j < letters.length; j++) {
            words += letters[j][i]
        }
        verticalWord.push(words);
    }
    for (let i of verticalWord) {
        if (i.includes(word)) {
            return true;
        }
    }

    return false;
}

module.exports = wordSearch