function somarNumerosPares(lista) {
    let soma = 0;
    for (let numero of lista) {
        if (numero % 2 === 0) {
            soma += numero;
        }
    }
    return soma;
}