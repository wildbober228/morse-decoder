const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decodeSymbol(symbol) {
    if (symbol[0] === "*")
        return " " 
    let clearSymbol = ""
    let symbolArray = []
    let result = ""
    for (let i = 0; i < symbol.length; i++) {
        if (symbol[0] !== "1"){
            if (!(symbol[i] === "0" && symbol[i+1] != 1)) {
                if (symbol[i+1] !== undefined)
                clearSymbol += symbol[i+1]
            }
        } else {
            clearSymbol += symbol[i]
        }
    }

    for (let i = 0; i < clearSymbol.length; i+=2) {
        symbolArray.push(clearSymbol[i] + clearSymbol[i+1])
    }
    
    for (let i = 0; i < symbolArray.length; i++) {
        if (symbolArray[i] === "10") {
            result += "."
        } else {
            result += "-"
        }
    }
    return result
}

function decode(expr) {
    let space = "**********"
    let countSymbols = expr.length / 10
    let symbolsArr = []
    let decodeArr = []
    for (let indexSymbol = 0; indexSymbol < expr.length; indexSymbol+=10) {
        let sumbol = expr.slice(indexSymbol, indexSymbol+10)
        symbolsArr.push(sumbol)
    }
    symbolsArr.map((s) => decodeArr.push(decodeSymbol(s)))
    let result = ""
    for (let decodeIndex = 0; decodeIndex < decodeArr.length; decodeIndex ++) {
        result += MORSE_TABLE[decodeArr[decodeIndex]] !== undefined ? MORSE_TABLE[decodeArr[decodeIndex]] : " "
    }
    return result
}

module.exports = {
    decode
}