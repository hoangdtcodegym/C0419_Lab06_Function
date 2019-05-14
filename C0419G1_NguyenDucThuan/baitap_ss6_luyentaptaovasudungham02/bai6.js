let inputIndex=prompt("nhap gia tri bat ky");
function testValue() {
    let NaN=isNaN(inputIndex);
    if (!NaN ===true) {
        if (inputIndex>0) {
            return true;
        }
        else {
            return false;
    }
    }
    else if(!NaN===false) {
        return "khong phai so nguyen";
    }
}
let x=testValue(inputIndex);
alert(x);

