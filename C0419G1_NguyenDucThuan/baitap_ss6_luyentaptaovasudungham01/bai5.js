let Star1 = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
let Star2 = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa", "Major", "Leo"];

function pairStar(star) {
    for (let i = 0; i < Star1.length; i++) {
        if (star === Star1[i]) {
            return Star2[i];
        }
    }
    return "khong co gia tri phu hop";
}
let giaTri=prompt ("nhap vao");
let x= pairStar(giaTri);
alert(x);


