function cFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * cFatorial(numero - 1);
    }
}