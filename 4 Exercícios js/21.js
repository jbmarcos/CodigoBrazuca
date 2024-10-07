function saoMultiplos(num1, num2) {
    if (num1 % num2 === 0 || num2 % num1 === 0) {
        return true;
    } else {
        return false;
    }
}