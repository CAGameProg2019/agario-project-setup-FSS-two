let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let foods = [];

let colors = [
    '#00f788',
    'blue',
    'red',
    'purple',
    'teal',
    'grey'
];

    function randomColor() {
        let index = Math.floor(Math.random() * colors.length);
        return colors[index];
    }

function init() {
    // let x = Math.random() * canvas.width;
    // let y = Math.random() * canvas.height;
    // let color = randomColor();
    // foods.push(new Food(x, y, 20, color));
    update();
}

function update() {
    c.clearRect(0,0,canvas.width,canvas.height);
    for(var i = 0; i <= 100; i++){
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let color = randomColor();
        foods.push(new Food(x, y, 20, color));
        foods[i].draw(c);
    }

    requestAnimationFrame(update);
}

window.addEventListener('load', function(event) {
    init();
});
