'use strict';

function isDifferent(str) {
	for (let i = 0; i < str.length; i++) {
		if (str.includes(str[i], i + 1)) {
			return false;
		}
	}
	return true;
}

function isNumeric(e){
	e.value = e.value.replace( /[^\d]/g , '' );
	if (!isDifferent(e.value)){
		e.value = e.value.slice(0, e.value.length -1);
	}	
}


function generateNum() {
	let num = '';
	do {
		num = Math.floor(Math.random() * 1e4);
		if (num < 1e3) {
			num = '0' + num;
		} else {
			num = num.toString();
		}
	} while (!isDifferent(num));
	return num;
}

function giveVersion() {
	let num = null;
	let textInput = document.getElementById('inputValue');
		num = textInput.value;
		if (num === null || num === '') {
			return '1234';
		}
		textInput.value = '';		
	return num;
}

function countBulls(computerString, userString) {
	let count = 0;
	for (let i = 0; i < computerString.length; i++) {
		if (computerString[i] === userString[i]) {
			count++;
		}
	}
	return count;
}

function countCows(computerString, userString) {
	let count = 0;
	for (let i = 0; i < userString.length; i++) {
		if (
			computerString.includes(userString[i]) &&
			computerString[i] !== userString[i]
		) {
			count++;
		}
	}
	return count;
}

function generateCows (num,elem){
	if (num == 0){
		return;
	}
	let generateCow = [];
	for (let i = 0; i<num; i++){
		generateCow[i] = document.createElement('img')
		generateCow[i].setAttribute('src','http://img.lenagold.ru/k/kow/korova85.png');
		generateCow[i].setAttribute('alt','Cow');
		elem.appendChild(generateCow[i]);
	}
}

function generateBulls (num,elem){
	if (num == 0){
		return;
	}
	let generateBull = [];
	for (let i = 0; i<num; i++){
		generateBull[i] = document.createElement('img')
		generateBull[i].setAttribute('src','http://img.lenagold.ru/k/kow/korova55.png');
		generateBull[i].setAttribute('alt','Bull');
		elem.appendChild(generateBull[i]);
	}
}


let down = 0;

function sendValue() {

let userVersion = giveVersion();
let computerVersion = generateNum();
let cows = countCows(computerVersion, userVersion);
let bulls = countBulls(computerVersion, userVersion);
let cowsOutput = document.getElementById('cow');
let bullsOutput = document.getElementById('bull');
let elemCows = document.createElement('li');
	generateCows(cows,elemCows);
let elemBulls = document.createElement('li');
	generateBulls(bulls, elemBulls);

	cowsOutput.appendChild(elemCows);
	bullsOutput.appendChild(elemBulls);

window.scrollTo(0,down);
down += 100;
console.log(`computerVersion: ${computerVersion}, userVersion: ${userVersion}`);
}

