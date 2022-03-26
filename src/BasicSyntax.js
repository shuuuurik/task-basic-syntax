export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    for (let i = 0; i < str.length - 1; ++i) {
        if (romanCharToInteger(str[i]) < romanCharToInteger(str[i + 1]))
            result -= romanCharToInteger(str[i]);
        else result += romanCharToInteger(str[i]);
    }
    result += romanCharToInteger(str[str.length - 1]);
    return result;
}

export function romanCharToInteger(char) {
    let result = 0;
    switch (char) {
        case 'I':
            result++;
            break;

        case 'V':
            result += 5;
            break;

        case 'X':
            result += 10;
            break;

        case 'L':
            result += 50;
            break;

        case 'C':
            result += 100;
            break;

        case 'D':
            result += 500;
            break;

        case 'M':
            result += 1000;
            break;
    }
    return result;
}
