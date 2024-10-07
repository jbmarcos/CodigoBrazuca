function contarVogais(str) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let letra of str.toLowerCase()) {
        if (vogais.includes(letra)) {
            count++;
        }
    }

    return count;
}
