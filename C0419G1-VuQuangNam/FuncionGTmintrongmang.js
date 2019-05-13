function minArray(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
    // Trả về một giá trị
}

let b = "";

function cacule() {

    let input = document.getElementById("input").value;
    for (let x = 0; x < a.length; x++) {
        if (input == x) {
            b = a[x]
            // Gán b = mảng cần kt
        }

    }
    let result = minArray(b);
    // chạy function minArry với gt b
    document.getElementById("result").innerHTML = result;
}