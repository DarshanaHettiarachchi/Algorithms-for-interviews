function reverseString(string) {

    let reversed = "";

    for (let index = string.length - 1; index >= 0; index--) {
        reversed += string[index];
    }

    return reversed;
}

console.log(reverseString("Hello"));
console.log(reverseString("Hello World"));
