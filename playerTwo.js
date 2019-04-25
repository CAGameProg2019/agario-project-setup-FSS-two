class PlayerTwo extends Food{

    constructor(x, y, radius, color, stroke, name, dx, dy) {
        super(x,y,radius, color);
        this.stroke = stroke;
        this.name = name;
        this.dx = dx;
        this.dy = dy;
    }
    draw(c){
        c.lineWidth = this.radius * .075;
        c.strokeStyle = this.stroke;
        super.draw(c);
        c.stroke();
        c.fillStyle = '#ffffff';
        c.textAlign = 'center';
        c.textBaseline = 'middle';
        c.lineWidth = 5;
        let fontSize =  Math.round(this.radius*.50)
        c.font = fontSize + "px Gotham Narrow";
        c.strokeStyle= '#000000';
        c.strokeText(this.name, this.x, this.y);
        c.fillText(this.name, this.x, this.y);
    }

    let keyPressed = {
        w: false,
        a: false,
        s: false,
        d: false
    };

    window.addEventListener("keydown", function(event) {
        if (event.key === "w") {
            keyPressed.w = true;
        }
        if (event.key === "a") {
            keyPressed.a = true;
        }
        if (event.key === "s") {
            keyPressed.s = true;
        }
        if (event.key === "d") {
            keyPressed.d = true;
        }
    });

    window.addEventListener("keyup", function(event) {
        if (event.key === "w") {
            keyPressed.w = false;
        }
        if (event.key === "a") {
            keyPressed.a = false;
        }
        if (event.key === "s") {
            keyPressed.s = false;
        }
        if (event.key === "d") {
            keyPressed.d = false;
        }
    });
    function animate() {
        requestAnimationFrame(animate);
        c.fillStyle = "#000000";
        c.fillRect(0, 0, innerWidth, innerHeight);

        if (keyPressed.w) {
            circle.dy -= 0.1;
        }
        if (keyPressed.a) {
            circle.dx -= 0.1;
        }
        if (keyPressed.s) {
            circle.dy += 0.1;
        }
        if (keyPressed.d) {
            circle.dx += 0.1;
        }
    }
}
Object.assign(PlayerTwo, Food);
