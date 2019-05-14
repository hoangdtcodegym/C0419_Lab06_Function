let numberIndex= prompt("nhap vao ban kinh hinh tron");
function calArea() {
    let float=parseFloat(numberIndex);
    let result = float*2*3.14;
    return result;
}
function calPerimeter() {
    let float=parseFloat(numberIndex);
    let result = float*float*3.14;
    return result;
}
let x= calArea(numberIndex);
alert("dien tich hinh tron la "+x);
let y=calPerimeter(numberIndex);
alert("chu vi hinh trong la " +y);