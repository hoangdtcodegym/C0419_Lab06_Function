function alertComp(a,b) {
    a=document.getElementById("inputa").value;
    b=document.getElementById("inputb").value;
    if (a>b) {
        alert("a lon hon b");
    }
    else if (a<=b) {
        let x=parseFloat(a);
        let y=parseFloat(b);
        document.getElementById("result").innerHTML= y +x;
    }
}