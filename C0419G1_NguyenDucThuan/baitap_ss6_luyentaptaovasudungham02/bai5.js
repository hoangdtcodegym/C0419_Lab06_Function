let inputIndex1=prompt("So nguyen thu nhat: nhap gia tri bat ky");
let inputIndex2=prompt("So nguyen thu hai: nhap gia tri bat ky");
let inputIndex3=prompt("So nguyen thu ba: nhap gia tri bat ky");
let Array=[inputIndex1,inputIndex2,inputIndex3];
function example() {
    let result= inputIndex1;
    for (let i =0; i<Array.length; i++) {
        if (result>Array[i]) {
            result = Array[i];
        }
    }
    return result;
}


// function returnValue () {
//     if (inputIndex1<inputIndex2&&inputIndex1<inputIndex3) {
//         return inputIndex1;
//     }
//     else if (inputIndex2<inputIndex1&&inputIndex2<inputIndex3) {
//         return inputIndex2;
//     }
//     else if (inputIndex3<inputIndex2&&inputIndex3<inputIndex1) {
//         return inputIndex3;
//     }
// }
//let x=returnValue();
let x=example();
alert(x);

