function contarCaractere(str, caractere) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === caractere) {
            count++;
        }
    }
    return count;
}