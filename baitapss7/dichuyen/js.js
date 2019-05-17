
window.onload = function(){

    let canvas = document.getElementById("myCanvas");
    let context = canvas.getContext("2d");

    let img = new Image();

    img.onload = function(){
        context.drawImage(img, 300, 300,100,100);
    };
    img.src = "xe.jpg";
};
        /*this.moveRight = function () {
            this.left += this.speed;
        };
        this.moveDown = function () {
            this.top += this.speed;
        };
        this.moveLeft = function () {
            this.left -= this.speed;
        };
        this.moveTop = function () {
            this.top -= this.speed;
        };

*/













}
