//select numbers
const numbers = document.querySelectorAll('.number'); 
const comma = document.querySelector('.comma'); 
const zero = document.querySelector('.zero'); 
const toggleMinus = document.querySelector('.toggleMinus'); 
const para = document.querySelector('.display'); //select text
const disp = document.querySelector('.disp');
const mp = document.createElement('p');


//select operators
const opAdd = document.querySelector('.add'); 
const opSubtract = document.querySelector('.subtract'); 
const opMultiply = document.querySelector('.multiply'); 
const opDivide = document.querySelector('.divide'); 
const opClear = document.querySelector('.clear');
const opDelete = document.querySelector('.delete');
const opEnter = document.querySelector('.enter'); 

let array = [];
let saved = [];
let result = 0;
let storeFunction = [];
let signal = 0; //reset all if value !== 0

//store array
function show() {
	if (signal > 0) {
  	clear();
    signal = 0;
  }
  var value = this.getAttribute("data-value");
  array.push(value);
  let join = array.join("");
  para.textContent = `${join}`;
}

function addComma() {
  var value = this.getAttribute("data-value");
  if (array.length === 0) {
  	array[0] = "0";
    array[1] = '.';
  } else if (array.includes('.') === true) {
  	return;
  } else {
  	array.push('.')}
  let join = array.join("");
  para.textContent = `${join}`;
}

function addZero() {
  var value = this.getAttribute("data-value");
  if (array.length === 0 && saved.length === 0) {
  	return;
  } else {
    array.push(value);}
  let join = array.join("");
  para.textContent = `${join}`;
}

function toggle() {
  var value = this.getAttribute("data-value");
  if (signal === 1 && array.includes('-') === false) {
  	array.unshift("-");
    let join = array.join("");
    saved[0] = parseFloat(join);
    operating = 1;
  } else if (signal === 1 && array.includes('-') === true) {
  	array.shift("-");
    let join = array.join("");
    saved[0] = parseFloat(join);
    operating = 1;
  } else if (array.length === 0) {
  	return;
  } else if (array.includes('-') === false){
    array.unshift("-");
  } else {
  	array.shift("-");
  }
  let join = array.join("");
  para.textContent = `${join}`;
}

function clear() {
  array = [];
  saved = [];
	result = 0;
	storeFunction = [];
  para.textContent = '0';
}

function deleteNumber() {
  if (array.length === 0 || signal > 0) {
  	return;
  } else if (array.length === 1 && signal === 0) {
  	array.pop();
  	para.textContent = '0';
  } else if (array.length === 2 && array[0] === '-') {
    array = [];
    para.textContent = '0';
  } else {
  	array.pop();
    let join = array.join("");
  	para.textContent = `${join}`;
  } 
}

var added = function() {saved.reduce((a, b) => {
    	result = a + b;
      return result;
    	});}
      
var subtracted = function() {saved.reduce((a, b) => {
    	result = a - b;
      return result;
    	});}

var multiplied = function() {saved.reduce((a, b) => {
    	result = a * b;
      return result;
    	});}
      
var divided = function() {saved.reduce((a, b) => {
			if (saved[1] === 0) {
      	return alert("WTF MATH"); 
      } else
    	result = a / b;
      return result;
    	});}
      
//function add, which will store the number
function add() {
	if (array.length === 0 && storeFunction.length === 0 || array.length === 0 || signal === 1) {
  	return;
  }
  if (storeFunction.length === 1 && storeFunction[0] !== added && array.length === 0) {
  	storeFunction.shift();
  	storeFunction.push(added);
  		} else if (saved.length === 0) {
  	let join = array.join("");
    para.textContent = `${join}`;
    saved.push(parseFloat(join));
    storeFunction.push(added);
    array = [];
    	} else {
    let join = array.join("");
    saved.push(parseFloat(join));
    (storeFunction.shift())();
    para.textContent = `${result}`;
    saved = [];
    saved.push(result);
    storeFunction.push(added);
    array = [];}
}

function subtract() {
	if (array.length === 0 && storeFunction.length === 0 || array.length === 0 || signal === 1) {
  	return;
  }
  if (storeFunction.length === 1 && storeFunction[0] !== subtracted && array.length === 0) {
  	storeFunction.shift();
  	storeFunction.push(subtracted);
  		} else if (saved.length === 0) {
  	let join = array.join("");
    para.textContent = `${join}`;
    saved.push(parseFloat(join));
    storeFunction.push(subtracted);
    array = [];
    	} else {
    let join = array.join("");
    saved.push(parseFloat(join));
    (storeFunction.shift())();
    para.textContent = `${result}`;
    saved = [];
    saved.push(result.toFixed(10));
    storeFunction.push(subtracted);
    array = [];}
}

function multiply() {
	if (array.length === 0 && storeFunction.length === 0 || array.length === 0 || signal === 1) {
  	return;
  }
  if (storeFunction.length === 1 && storeFunction[0] !== multiplied && array.length === 0) {
  	storeFunction.shift();
  	storeFunction.push(multiplied);
  		} else if (saved.length === 0) {
  	let join = array.join("");
    para.textContent = `${join}`;
    saved.push(parseFloat(join));
    storeFunction.push(multiplied);
    array = [];
    	} else {
    let join = array.join("");
    saved.push(parseFloat(join));
    (storeFunction.shift())();
    para.textContent = `${result}`;
    saved = [];
    saved.push(result.toFixed(10));
    storeFunction.push(multiplied);
    array = [];}
}

function divide() {
	if (array.length === 0 && storeFunction.length === 0 || array.length === 0 || signal === 1) {
  	return;
  }
  if (storeFunction.length === 1 && storeFunction[0] !== divided && array.length === 0) {
  	storeFunction.shift();
  	storeFunction.push(divided);
  		} else if (saved.length === 0) {
  	let join = array.join("");
    para.textContent = `${join}`;
    saved.push(parseFloat(join));
    storeFunction.push(divided);
    array = [];
    	} else {
    let join = array.join("");
    saved.push(parseFloat(join));
    (storeFunction.shift())();
    para.textContent = `${result}`;
    saved = [];
    saved.push(result);
    storeFunction.push(divided);
    array = [];}
}

function operate() {
	if (array.length === 0) {
  	return;
  } else if (array.length !== 0 && saved.length === 0) {
  	return;
  } else if (array.length === 0 && saved.length === 1) {
  	return;
  } else if (array.length !== 0 && saved.length === 1) {
  	signal = 1;
    storeFunction.push(storeFunction[0]);
    storeFunction.push(storeFunction[0]);
    let join = array.join("");
    saved.push(parseFloat(join));
    (storeFunction.shift())();
  } else
  storeFunction.push(storeFunction[0]);
  (storeFunction.shift())();
  saved[0] = parseFloat(result.toFixed(10));
  array = Array.from(String(+result.toFixed(10)));
  let join = array.join("");
	para.textContent = `${join}`;
}


numbers.forEach(number => number.addEventListener('click', show));
comma.addEventListener('click', addComma);
zero.addEventListener('click', addZero);

opAdd.addEventListener('click', add);
opSubtract.addEventListener('click', subtract);
opMultiply.addEventListener('click', multiply);
opDivide.addEventListener('click', divide);
opClear.addEventListener('click', clear);
opDelete.addEventListener('click', deleteNumber);
opEnter.addEventListener('click', operate);

toggleMinus.addEventListener('click', toggle);



/* var numb = 1.5;
numb = +numb.toFixed(3); */