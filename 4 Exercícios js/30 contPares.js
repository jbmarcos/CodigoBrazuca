function contImpares(lista) {
    let count = 0;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 !== 0) {
            count++;
        }
    }
    return count;
}