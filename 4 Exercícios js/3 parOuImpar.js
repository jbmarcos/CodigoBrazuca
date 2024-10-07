const par_impar = (n) => {
    if (n % 2 === 0) {
        return "O número é Par";
    } 
    else {
        return "O número é Ímpar";
    }
}
console.log(par_impar(4));