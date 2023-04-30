const caesarCipher = (string, shiftFactor) => {

    let plainText = string;

    const plainTextArr = plainText.split("");
    //console.log(plainTextArr)

    const cipherTextArr = plainTextArr.map((letter) => {

        if (letter === ',' || letter === '!' || letter === ' ' || letter === '\n' || letter === '\t') {
            return letter;
        }

        if (letter.charCodeAt(0) > 64 && letter.charCodeAt(0) < 91) {
            if (letter.charCodeAt(0) + shiftFactor > 90) {
                letter = 64 + (letter.charCodeAt(0) - 90) + shiftFactor;
                return String.fromCharCode(letter);
            }
            else {
                letter = letter.charCodeAt(0) + shiftFactor;
                return String.fromCharCode(letter);
            }
        } 

        if (letter.charCodeAt(0) > 96 && letter.charCodeAt(0) < 123) {
            if (letter.charCodeAt(0) + shiftFactor > 122) {
                letter = 96 + (letter.charCodeAt(0) - 122) + shiftFactor;
                return String.fromCharCode(letter);
            }
            else {
                letter = letter.charCodeAt(0) + shiftFactor;
                return String.fromCharCode(letter);
            }
        }

    });

    const cipherText = cipherTextArr.join("");
    //console.log(cipherText);
    return cipherText;

}

module.exports = caesarCipher;