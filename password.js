'use strict';
//npm i prompt-sync
//[ https://www.npmjs.com/package/prompt-sync  ]
const ps = require("prompt-sync");  
const prompt = ps();

const correct = '123';
let tries = 0;

let keepGoing = true;
while(keepGoing){
    tries++;
    let guess = prompt("Enter the password: ");
    console.log(`You typed: ${guess}`);
    if(guess === correct ){
        console.log('Well done, enter through the gates');
        keepGoing = false;
    }else if(tries >= 3){
        console.log('Tries exceeded, goodbye!');
        keepGoing = false;
    }
}