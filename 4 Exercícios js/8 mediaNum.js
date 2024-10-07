function calcularMedia(lista) {
    let soma = lista.reduce((total, numero) => total + numero, 0);
    let media = soma / lista.length;
    return media;
}
