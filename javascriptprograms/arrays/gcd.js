var number1=8;
var number2=16 ;


for (let i = 1; i <= number1 && i <= number2; i++) {

    // check if is factor of both integers
    if( number1 % i == 0 && number2 % i == 0) {
        gcd = i;
    }
}
console.log(gcd);