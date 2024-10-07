function somarDigitos(numero) {
    let soma = 0;
    while (numero) {
        soma += numero % 10;
        numero = Math.floor(numero / 10);
    }
    return soma;
}