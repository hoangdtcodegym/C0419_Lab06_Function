let numberIndex= prompt("nhap so nguyen bat ky");
let result=1;
function Factorial() {
    let float= parseFloat(numberIndex);
    for (let i=1;i<=float;i++) {
        result=result*i;
    }
    return result;
}
let x=Factorial(numberIndex);
alert(x);