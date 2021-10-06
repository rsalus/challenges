/* caesar's cipher + 13; take encoded string and return decoded string */
/* submitted to freecodecamp.org's course on javascript */

function rot13(str) {
    //most straightforward solution seems to simply be a lookup table
    //another solution could be to take the characters UTF value and shift by 13
    const keyMap = {
        'A':'N', 'B':'O', 'C':'P',
        'D':'Q', 'E':'R', 'F':'S',
        'G':'T', 'H':'U', 'I':'V',
        'J':'W', 'K':'X', 'L':'Y',
        'M':'Z', 'N':'A', 'O':'B',
        'P':'C', 'Q':'D', 'R':'E',
        'S':'F', 'T':'G', 'U':'H',
        'V':'I', 'W':'J', 'X':'K',
        'Y':'L', 'Z':'M', ' ':' ',
        '?':'?', '!':'!', '.':'.'
    }
    let result = [...str];
    result.forEach((val, i) => result[i] = keyMap[val]);

    return result.join('');
}

console.log(
    rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")
)