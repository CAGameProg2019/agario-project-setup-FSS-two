class PlayerTwo extends Food{

    constructor(x, y, radius, color, stroke, name, dx, dy) {
        super(x,y,radius, color);
        this.stroke = stroke;
        this.name = name;
        this.dx = dx;
        this.dy = dy;
        let _keyPressed = {
            w: false,
            a: false,
            s: false,
            d: false
        };

        window.addEventListener("keydown", function(event) {
            if (event.key === "w") {
                _keyPressed.w = true;
            }
            if (event.key === "a") {
                _keyPressed.a = true;
            }
            if (event.key === "s") {
                _keyPressed.s = true;
            }
            if (event.key === "d") {
                _keyPressed.d = true;
            }
        });

        window.addEventListener("keyup", function(event) {
            if (event.key === "w") {
                _keyPressed.w = false;
            }
            if (event.key === "a") {
                _keyPressed.a = false;
            }
            if (event.key === "s") {
                _keyPressed.s = false;
            }
            if (event.key === "d") {
                _keyPressed.d = false;
            }
        });
        this._keyPressed = _keyPressed;
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

    update() {
        if (this._keyPressed.w) {
            this.dy -= 0.1;
        }
        if (this._keyPressed.a) {
            this.dx -= 0.1;
        }
        if (this._keyPressed.s) {
            this.dy += 0.1;
        }
        if (this._keyPressed.d) {
            this.dx += 0.1;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.print();
    }
}
Object.assign(PlayerTwo, Food);
