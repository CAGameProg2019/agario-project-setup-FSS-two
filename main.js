let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = window.innerWidth - 5;
canvas.height = window.innerHeight - 5;

let mpos;

const FOOD_COUNT = 100;

let foods = [];
let player;
let playerTwo;

let colors = [
    '#00f788',
    'blue',
    'red',
    'purple',
    'teal',
    'grey'
];
let strokeColors = [
    '#00b66',
    'blueViolet',
    'darkRed',
    'violet',
    'darkTeal',
    'darkGrey'
];

function randomColor() {
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function generateFood(){
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let color = randomColor();
    foods.push(new Food(x, y, 20, color));
}
function init() {
    mpos = new Vector(canvas.width/2, canvas.height/2);

    let name = prompt("Enter a name!");
    let color = randomColor();
    let name2 = prompt("Enter P2's name!");
    let color2 = randomColor();
    let stroke = strokeColors[colors.indexOf(color)];

    player = new Player(0, 0, 25, color, stroke, name, 4);
    playerTwo = new PlayerTwo(0, 0, 25, color2, stroke, name2, 0, 0);

    for(var i = 0; i < FOOD_COUNT; i++){
        generateFood();
    }
    update();
}

function update() {
    c.clearRect(0,0,canvas.width,canvas.height);

    for(var i = 0; i < foods.length; i++){
        let eaten = player.intersects(foods[i]);
        let eaten2 = playerTwo.intersects(foods[i]);
        if(!eaten || !eaten2){
            foods[i].draw(c);
        } else{
            player.addMass(foods[i].mass);
            playerTwo.addMass(foods[i].mass);
            foods.splice(i,1);
            i--;
        }

    }

    while(foods.length < FOOD_COUNT){
        generateFood();
    }

    player.update(mpos);
    playerTwo.update();

    player.draw(c);
    playerTwo.draw(c);

    requestAnimationFrame(update);
}

window.addEventListener('load', function() {
    init();

    window.addEventListener('mousemove', function(event){
        mpos.x = event.clientX - canvas.offsetLeft;
        mpos.y = event.clientY - canvas.offsetTop;
    });
});
