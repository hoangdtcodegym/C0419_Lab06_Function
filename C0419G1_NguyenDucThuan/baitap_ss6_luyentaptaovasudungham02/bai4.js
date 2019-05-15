let inputIndex=prompt("nhap gia tri bat ky");
function testValue() {
    let NaN=isNaN(inputIndex);
    if (!NaN ===true) {
        return true;
    }
    else if (!NaN===false) {
        return false;
    }
}
let x=testValue(inputIndex);
alert(x);

