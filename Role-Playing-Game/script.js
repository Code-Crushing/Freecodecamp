let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");

const monsterHealthText = document.querySelector("#monsterHealth");

function goStore () {
    console.log('Going to store.')
};

function goCave () {
    console.log("Going to cave.");
}
function fightDragon () {
    console.log("Fighting dragon.");
}

function fightSlime () {
    console.log("Fighting slime.");
}
function fightBeast () {
    console.log("Fighting beast.");
}

function pickUpLoot () {
    console.log("Picking up loot.");

}

import Assignments from "./Assignments.js"

export default{
    components: {
        Assignments
    },

    template: `
        <Assignments></Assignments>
    `


    // template: `
    

    // <section  >
    //     <ul>
    //         <H2 class="font-bold">    In Progress</H2>
    //         <li v-for="assignment in InProgressAssignments" :key="assignment.id" class="m-2">
    //             <label>
    //                 {{ assignment.name }}

    //                 <input type="checkbox" v-model="assignment.disabled">

    //             </label>
    //         </li>
    //     </ul>
    // </section>
    // <section class="mt-4">
    //     <ul>
    //     <H2 class="font-bold">Completed</H2>
    //         <li v-for="assignment in completedAssignments" :key="assignment.id" >
    //             <label>
    //                 {{ assignment.name }}

    //                 <input type="checkbox" v-model="assignment.disabled">

    //             </label>
    //         </li>
    //     </ul>
    // </section>
    
    // `,

    // data () {
    //     return{
    //         assignments: [
    //             {name: 'do shores', disabled: false, id: 1},
    //             {name: 'learn', disabled: false, id: 2},
    //             {name: 'read', disabled: false, id: 3},
    //         ]
    //     }
    // },

    // computed: {
    //     InProgressAssignments (){
    //         return this.assignments.filter(assignment => !assignment.disabled);
    //     },
    //     completedAssignments (){
    //         return this.assignments.filter(assignment => assignment.disabled);
    //     }
    // }

}