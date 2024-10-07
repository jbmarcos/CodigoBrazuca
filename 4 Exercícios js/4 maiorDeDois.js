function bigger(numA, numB) {
    if(numA > numB) {
        return(`O Número ${numA} é maior que o Número ${numB}`)
    } else {
        return(`O Número ${numB} é maior que o Número ${numA}`)
    }
}
console.log(bigger(5, 2))