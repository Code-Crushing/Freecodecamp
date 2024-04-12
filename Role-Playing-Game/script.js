let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector('#button1');
const test = 'for';
let goForIt = () =>{
    for (let i = 0; i < 10; i++){
        console.log(i);
    }
}
for (let i = 0; i < 10; i++){
    console.log(i);
}

console.log('Hello! Welcome to the game!');

function welcome() {
    console.log('Hello! Welcome to the game!');
}       
welcome();

function fight() {
    console.log('You fought the monster!');
};
const mouseTrack =  document.getElementById('mouseTrack');
