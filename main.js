let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = window.innerWidth - 5;
canvas.height = window.innerHeight - 5;

let mpos;


let foods = [];
let player;

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
    mpos = new Vector(canvas.width/2, canvas.height/2);

    player = new Player(undefined, undefined, 25, randomColor());

    for(var i = 0; i <= 100; i++){
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let color = randomColor();
        foods.push(new Food(x, y, 20, color));
    }
    update();
}

function update() {
    c.clearRect(0,0,canvas.width,canvas.height);
    for(var i = 0; i <= 100; i++){
        // let x = Math.random() * canvas.width;
        // let y = Math.random() * canvas.height;
        // let color = randomColor();
        // foods.push(new Food(x, y, 20, color));
        foods[i].draw(c);
    }

    player.draw(c);
    requestAnimationFrame(update);
}

window.addEventListener('load', function() {
    init();

    window.addEventListener('mousemove', function(event){
        mpos.x = event.clientX - canvas.offsetLeft;
        mpos.y = event.clientY - canvas.offsetTop;
        player.x = mpos.x;
        player.y = mpos.y;
        mpos.print();
    });
});
