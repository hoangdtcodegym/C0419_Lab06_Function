function checkCount() {
    let Array = ["as", "xzcs", "a", "xcz", "asdd", "wass", "sada", "asd", "weq", "eqw", "xzc", "a", "a", "a", "sdsd", "sd", "we", "wq", "rq"];
    let inputIndex = prompt("nhap ki tu bat ky");
    //let newArray = [];
    let count = 0;
    for (let i = 0; i < Array.length; i++) {
        if (inputIndex === Array[i]) {
            //newArray[newArray.length] = Array[i];
            count++;
        }
    }
    if (count===0) {
        return -1;
    }
    return count;
    //return newArray.length
}

let x = checkCount();
alert(x);