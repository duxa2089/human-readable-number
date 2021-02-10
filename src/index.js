module.exports = function toReadable(number) {
    number = number.toString().split("");
    if (number.length == 1) {
        number.unshift("");
        number.unshift("");
    } else if (number.length == 2) number.unshift("");
    console.log(number);
    let result = "";
    for (let i = 0; i < number.length; i++) {
        switch (Number(number[i])) {
            case 9:
                if (i === 0) result += "nine hundred";
                else if (i === 1) {
                    if (result) result += " ninety";
                    else result += "ninety";
                }
                else if (i === 2 && Number(number[i - 1]) === 0 && Number(number[i - 2]) === 0) result += "nine";
                else result += " " + "nine";
                break;
            case 8:
                if (i === 0) result +="eight hundred";
                else if (i === 1) {
                    if (result) result += " eighty";
                    else result += "eighty";
                }
                else if (i === 2 && Number(number[i - 1]) === 0 && Number(number[i - 2]) === 0) result += "eight";
                else result += " " + "eight";
                break;
            case 7:
                if (i === 0) result += "seven hundred";
                else if (i === 1) {
                    if (result) result += " seventy";
                    else result += "seventy";
                }
                else if (i === 2 && Number(number[i - 1]) === 0 && Number(number[i - 2]) === 0) result += "seven";
                else result += " " + "seven";
                break;
            case 6:
                if (i === 0) result += "six hundred";
                else if (i === 1) {
                    if (result) result += " sixty";
                    else result += "sixty";
                }
                else if (i === 2 && Number(number[i - 1]) === 0 && Number(number[i - 2]) === 0) result += "six";
                else result += " " + "six";
                break;
            case 5:
                if (i === 0) result += "five hundred";
                else if (i === 1) {
                    if (result) result += " fifty";
                    else result += "fifty";
                }
                else if (i === 2 && Number(number[i - 1]) === 0 && Number(number[i - 2]) === 0) result += "five";
                else result += " " + "five";
                break;
            case 4:
                if (i === 0) result += "four hundred";
                else if (i === 1) {
                    if (result) result += " forty";
                    else result += "forty";
                }
                else if (i === 2 && Number(number[i - 1]) === 0 && Number(number[i - 2]) === 0) result += "four";
                else result += " " + "four";
                break;
            case 3:
                if (i === 0) result += "three hundred";
                else if (i === 1) {
                    if (result) result += " thirty";
                    else result += "thirty";
                } 
                else if (i === 2 && Number(number[i - 1]) === 0 && Number(number[i - 2]) === 0) result += "three";
                else result += " " + "three";
                break;
            case 2:
                if (i === 0) result += "two hundred";
                else if (i === 1) {
                    if (result) result += " twenty";
                    else result += "twenty";
                } 
                else if (i === 2 && Number(number[i - 1]) === 0 && Number(number[i - 2]) === 0) result += "two";
                else result += " " + "two";
                break;
            case 1:
                if (i === 0) result += "one hundred";
                else if (i === 1 && Number(number[i + 1]) === 0) {
                    if (result) result += " ten";
                    else result += "ten";
                    i += 2;
                }
                else if (i === 1 && Number(number[i + 1]) === 1) {
                    if (result) result += " eleven";
                    else result += "eleven";
                    i += 2;
                }
                else if (i === 1 && Number(number[i + 1]) === 2) {
                    if (result) result += " twelve";
                    else result += "twelve";
                    i += 2;
                }
                else if (i === 1 && Number(number[i + 1]) === 3) {
                    if (result) result += " thirteen";
                    else result += "thirteen";
                    i += 2;
                }
                else if (i === 1 && Number(number[i + 1]) === 4) {
                    if (result) result += " fourteen";
                    else result += "fourteen";
                    i += 2;
                }
                else if (i === 1 && Number(number[i + 1]) === 5) {
                    if (result) result += " fifteen";
                    else result += "fifteen";
                    i += 2;
                }
                else if (i === 1 && Number(number[i + 1]) === 6) {
                    if (result) result += " sixteen";
                    else result += "sixteen";
                    i += 2;
                }
                else if (i === 1 && Number(number[i + 1]) === 7) {
                    if (result) result += " seventeen";
                    else result += "seventeen";
                    i += 2;
                }
                else if (i === 1 && Number(number[i + 1]) === 8) {
                    if (result) result += " eighteen";
                    else result += "eighteen";
                    i += 2;
                }
                else if (i === 1 && Number(number[i + 1]) === 9) {
                    if (result) result += " nineteen";
                    else result += "nineteen";
                    i += 2;
                }
                else if (i === 2 && Number(number[i - 1]) === 0 && Number(number[i - 2]) === 0) result += "one";
                else result += " " + "one";
                break;
            case 0:
                if (i === 2 && Number(number[i - 1]) == 0 && Number(number[i - 2]) == 0) result += "zero";
                break;
        }
    }
    return result;
};
