num1=Math.floor(Math.random()*6+1)
num2=Math.floor(Math.random()*6+1)
if (num1===1) {document.querySelector("#first_dice").src='img/dice1.png'}
if (num1===2) {document.querySelector("#first_dice").src='img/dice2.png'}
if (num1===3) {document.querySelector("#first_dice").src='img/dice3.png'}
if (num1===4) {document.querySelector("#first_dice").src='img/dice4.png'}
if (num1===5) {document.querySelector("#first_dice").src='img/dice5.png'}
if (num1===6) {document.querySelector("#first_dice").src='img/dice6.png'}

if (num2===1) {document.querySelector("#second_dice").src='img/dice1.png'}
if (num2===2) {document.querySelector("#second_dice").src='img/dice2.png'}
if (num2===3) {document.querySelector("#second_dice").src='img/dice3.png'}
if (num2===4) {document.querySelector("#second_dice").src='img/dice4.png'}
if (num2===5) {document.querySelector("#second_dice").src='img/dice5.png'}
if (num2===6) {document.querySelector("#second_dice").src='img/dice6.png'}

if (num1>num2) {document.querySelector("h1").innerHTML='🚩 First player wins'}
else if (num1<num2) {document.querySelector("h1").innerHTML='Second player wins 🚩'}
else {document.querySelector("h1").innerHTML='Draw!'}
