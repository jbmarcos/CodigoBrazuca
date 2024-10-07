function multiplicar(lista) {
    if (lista.length === 0) {
        return 0;
    }
    return lista.reduce((total, elemento) => total * elemento, 1);
}