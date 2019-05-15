let inputIndex1=prompt("So nguyen thu nhat: nhap gia tri bat ky");
let inputIndex2=prompt("So nguyen thu hai: nhap gia tri bat ky");
function example() {
    let Array=[];
    let first=0;
    let addIndex = first+1;
    for (;first<addIndex;first++) {
        Array[first] = inputIndex2;
        Array[addIndex] = inputIndex1;
        addIndex--;
    }
    return Array;
}
let x=example();
alert(x);