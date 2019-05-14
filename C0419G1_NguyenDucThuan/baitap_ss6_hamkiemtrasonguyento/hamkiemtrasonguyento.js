function songuyento() {
    let numb = document.getElementById("number").value;
    if (numb>1) {
        for (let i = 2; i < numb; i++) {
            if (numb % i === 0) {
                document.getElementById("songuyentoxyz").innerHTML = " Khong phai so nguyen to";
                return false;
            }
        }
        document.getElementById("songuyentoxyz").innerHTML = " La so nguyen to";
        return true;
    }
    else {
        document.getElementById("songuyentoxyz").innerHTML = " Khong phai so nguyen to";
    }
}