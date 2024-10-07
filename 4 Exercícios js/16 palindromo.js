function verificarPalindromo(str) {
    const strReversa = str.split('').reverse().join('');
    return str === strReversa;
}